// Capabilities illustrations, flat linear isometric (Community: light/orange, Disaster: dark/purple).
// node scripts/capabilities-flat.js <outdir>  -> writes light-1..3.svg, dark-1..3.svg (640x640, no background).
// In Figma the SVG goes into the inner "Illustration" frame of each Capabilities card (Solutions page, section 1473:59687).
function buildSVGs(){
const C30=Math.cos(Math.PI/6);
const T={
 light:{bg:'#FAF6EC',face:'#FFFDF8',line:'rgba(70,52,37,0.34)',grid:'rgba(70,52,37,0.07)',shadow:'rgba(70,52,37,0.18)',conn:'rgba(70,52,37,0.38)',
        acc:{edge:'#EB640F',mid:'#F6B88D',center:'#FCFFBC',line:'rgba(215,107,39,0.9)',dot:'#F08F51'}},
 dark:{bg:'#131110',face:'#181615',line:'rgba(250,246,236,0.34)',grid:'rgba(250,246,236,0.07)',shadow:'rgba(0,0,0,0.45)',conn:'rgba(250,246,236,0.32)',
        acc:{edge:'#7C80F2',mid:'#9799FF',center:'#D9DAFF',line:'rgba(203,204,255,0.95)',dot:'#9799FF'}}};
const SH={L:[[0,0,0],[1,0,0],[0,1,0],[0,0,1]],stack:[[0,0,0],[0,0,1],[0,0,2],[1,0,0]],T:[[0,0,0],[1,0,0],[2,0,0],[1,0,1]],step:[[0,0,0],[1,0,0],[1,0,1],[0,1,0]],core:[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1]]};
const f=n=>n.toFixed(1); const key=c=>c.join(',');
function Doc(th,K,OX,OY,pre){ const t=T[th]; const A=t.acc; let gid=0; const defs=[]; const layers={grid:[],shadow:[],conn:[],cubes:[],dots:[]};
  const P=(x,y,z)=>[OX+(x-y)*C30*K, OY+(x+y)*0.5*K - z*K];
  const poly=pts=>'M'+pts.map(p=>f(p[0])+' '+f(p[1])).join(' L')+'Z';
  const accGrad=(side)=>{ const id=pre+'a'+(++gid); const x1=side==='left'?0:1, x2=side==='left'?0.75:0.25;
    defs.push(`<linearGradient id="${id}" x1="${x1}" y1="0.5" x2="${x2}" y2="0.5"><stop offset="0" stop-color="${A.edge}" stop-opacity="1"/><stop offset="0.45" stop-color="${A.mid}" stop-opacity="0.45"/><stop offset="1" stop-color="${A.center}" stop-opacity="0"/></linearGradient>`); return id; };
  return {
    grid(x0,x1,y0,y1){ for(let x=x0;x<=x1;x++) layers.grid.push(`<path d="M${f(P(x,y0,0)[0])} ${f(P(x,y0,0)[1])} L${f(P(x,y1,0)[0])} ${f(P(x,y1,0)[1])}" stroke="${t.grid}" stroke-width="1" fill="none"/>`);
      for(let y=y0;y<=y1;y++) layers.grid.push(`<path d="M${f(P(x0,y,0)[0])} ${f(P(x0,y,0)[1])} L${f(P(x1,y,0)[0])} ${f(P(x1,y,0)[1])}" stroke="${t.grid}" stroke-width="1" fill="none"/>`); },
    figure(ox,oy,cubes,accent){ // accent: true | array of cube keys
      const C=cubes.map(([x,y,z])=>[x+ox,y+oy,z]); const occ=new Set(C.map(key)); const acs=new Set(accent===true?C.map(key):(accent||[]).map(([x,y,z])=>key([x+ox,y+oy,z])));
      // flat shadow: footprint cells shifted forward
      const base=C.filter(c=>c[2]===0); const sh=0.55;
      for(const [x,y] of base){ layers.shadow.push(`<path d="${poly([P(x+sh,y+sh,0),P(x+1+sh,y+sh,0),P(x+1+sh,y+1+sh,0),P(x+sh,y+1+sh,0)])}" fill="${t.shadow}"/>`); }
      const sorted=[...C].sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2])||a[2]-b[2]);
      for(const [x,y,z] of sorted){ const ac=acs.has(key([x,y,z]));
        const faces=[[!occ.has(key([x,y,z+1])),[P(x,y,z+1),P(x+1,y,z+1),P(x+1,y+1,z+1),P(x,y+1,z+1)],'top'],
                     [!occ.has(key([x,y+1,z])),[P(x,y+1,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x,y+1,z+1)],'left'],
                     [!occ.has(key([x+1,y,z])),[P(x+1,y,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x+1,y,z+1)],'right']];
        for(const [ok,pts,side] of faces){ if(!ok) continue; const d=poly(pts);
          layers.cubes.push(`<path d="${d}" fill="${t.face}"/>`);
          if(ac && side!=='top') layers.cubes.push(`<path d="${d}" fill="url(#${accGrad(side)})"/>`);
          layers.cubes.push(`<path d="${d}" fill="none" stroke="${ac?A.line:t.line}" stroke-width="1.2" stroke-linejoin="round"/>`); } }
      // anchor point on floor (front center of footprint)
      const xs=C.map(c=>c[0]), ys=C.map(c=>c[1]); const cx=(Math.min(...xs)+Math.max(...xs)+1)/2, cy=(Math.min(...ys)+Math.max(...ys)+1)/2; return {cx,cy}; },
    link(a,b,acc){ const p=P(a.cx,a.cy,0), q=P(b.cx,b.cy,0); layers.conn.push(`<path d="M${f(p[0])} ${f(p[1])} L${f(q[0])} ${f(q[1])}" stroke="${acc?A.dot:t.conn}" stroke-width="1" stroke-dasharray="3 4" fill="none"/>`); },
    dot(x,y,acc,r=3){ const p=P(x,y,0); layers.dots.push(`<circle cx="${f(p[0])}" cy="${f(p[1])}" r="${r}" fill="${acc?A.dot:t.conn}"/>`); },
    ring(cx,cy,R,acc){ const pts=[]; for(let i=0;i<=72;i++){ const a=i/72*Math.PI*2; pts.push(P(cx+R*Math.cos(a),cy+R*Math.sin(a),0)); } layers.conn.push(`<path d="M${pts.map(p=>f(p[0])+' '+f(p[1])).join(' L')}" stroke="${acc?A.dot:t.conn}" stroke-width="1" stroke-dasharray="3 4" fill="none"/>`);
      return a=>({cx:cx+R*Math.cos(a),cy:cy+R*Math.sin(a)}); },
    svg(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640"><defs>${defs.join('')}</defs><g id="Grid">${layers.grid.join('')}</g><g id="Shadows">${layers.shadow.join('')}</g><g id="Links">${layers.conn.join('')}${layers.dots.join('')}</g><g id="Cubes">${layers.cubes.join('')}</g></svg>`; } }; }
const res={};
for (const th of ['light','dark']){
  // 1 · separate pieces in a row, waiting to be connected
  let d=Doc(th,32,320,268,th+'1'); d.grid(-9,10,-2,3);
  const sh=['L','stack','T','step']; const xs=[-7.5,-3,1.5,6]; const A1=xs.map((x,i)=>d.figure(x,0,SH[sh[i]],false));
  for(let i=0;i<3;i++) d.link(A1[i],A1[i+1],false); A1.forEach(a=>d.dot(a.cx,a.cy,false)); res[th+'-1']=d.svg();
  // 2 · accent core in the middle, four pieces around, linked across the floor
  d=Doc(th,29,320,254,th+'2'); d.grid(-5,6,-5,6);
  const core=d.figure(0,0,SH.core,true); const pos=[[-4.5,-4.5,'L'],[4.5,-4.5,'stack'],[4.5,4.5,'T'],[-4.5,4.5,'step']]; const A2=pos.map(([x,y,s])=>d.figure(x,y,SH[s],false));
  A2.forEach(a=>{ d.link(core,a,true); d.dot(a.cx,a.cy,true); }); d.dot(core.cx,core.cy,true,4); res[th+'-2']=d.svg();
  // 3 · everything assembled into one structure
  d=Doc(th,44,320,262,th+'3'); d.grid(-3,5,-3,5);
  const B=[]; for(let x=0;x<3;x++) for(let y=0;y<3;y++) B.push([x,y,0]); for(const [x,y] of [[0,0],[1,0],[0,1],[1,1],[2,0],[0,2]]) B.push([x,y,1]); for(const [x,y] of [[0,0],[1,0],[0,1]]) B.push([x,y,2]); B.push([0,0,3]);
  d.figure(-1,-1,B,[[0,0,3],[1,0,2]]); res[th+'-3']=d.svg();
}
return res; }
if (typeof module!=='undefined') module.exports=buildSVGs;

if (typeof require!=='undefined' && require.main===module){ const fs=require('fs'), path=require('path'); const dir=process.argv[2]||'.'; const r=buildSVGs();
  for (const k in r) fs.writeFileSync(path.join(dir,k+'.svg'), r[k]); }
