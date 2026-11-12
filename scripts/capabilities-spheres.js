function buildSVGs(){
const C30=Math.cos(Math.PI/6);
const THEMES={
 dark:{ink:'250,246,236',top:'#FAF6EC',left:'#CFC8BA',right:'#9F978A',edge:'rgba(19,17,16,0.35)',glass_in:0.20,glass_out:0.03,stroke_top:0.60,stroke_bot:0.14,plat:0.05,plat_stroke:0.18,glow:0.14,line:0.28,equator:0.16},
 light:{ink:'19,17,16',top:'#FFFFFF',left:'#E4DCCD',right:'#C7BCA9',edge:'rgba(19,17,16,0.30)',glass_in:0.07,glass_out:0.015,stroke_top:0.38,stroke_bot:0.10,plat:0.04,plat_stroke:0.14,glow:0.07,line:0.22,equator:0.12}};
const OR={top:'#F6B88D',left:'#F08F51',right:'#D76B27',edge:'rgba(19,17,16,0.25)'};
const SH={L:[[0,0,0],[1,0,0],[0,1,0],[0,0,1]],stack:[[0,0,0],[0,0,1],[0,0,2],[1,0,0]],T:[[0,0,0],[1,0,0],[2,0,0],[1,0,1]],step:[[0,0,0],[1,0,0],[1,0,1],[0,1,0]],core:[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1]]};
const f=n=>n.toFixed(1), rgba=(ink,a)=>`rgba(${ink},${a.toFixed(3)})`;
const proj=(x,y,z,s)=>[(x-y)*C30*s,(x+y)*0.5*s-z*s];
const key=c=>c.join(',');
function cubes(list,s,cx,cy,t,orange){
  const pts=[]; for(const [x,y,z] of list) for(const dx of [0,1]) for(const dy of [0,1]) for(const dz of [0,1]) pts.push(proj(x+dx,y+dy,z+dz,s));
  const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]); const ox=cx-(Math.min(...xs)+Math.max(...xs))/2, oy=cy-(Math.min(...ys)+Math.max(...ys))/2;
  const P=(x,y,z)=>{const p=proj(x,y,z,s); return [p[0]+ox,p[1]+oy];};
  const occ=new Set(list.map(key)); const ors=new Set(Array.isArray(orange)?orange.map(key):[]);
  const sorted=[...list].sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2]) || a[2]-b[2]);
  let out='';
  for(const [x,y,z] of sorted){ const pal = (orange===true||ors.has(key([x,y,z])))?OR:t;
    const faces=[['top',!occ.has(key([x,y,z+1])),[P(x,y,z+1),P(x+1,y,z+1),P(x+1,y+1,z+1),P(x,y+1,z+1)]],
                 ['left',!occ.has(key([x,y+1,z])),[P(x,y+1,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x,y+1,z+1)]],
                 ['right',!occ.has(key([x+1,y,z])),[P(x+1,y,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x+1,y,z+1)]]];
    for(const [k,ok,poly] of faces) if(ok) out+=`<path d="M${poly.map(p=>f(p[0])+' '+f(p[1])).join(' L')}Z" fill="${pal[k]}" stroke="${pal.edge}" stroke-width="0.6" stroke-linejoin="round"/>`; }
  return out; }
function Doc(th,pre){ const t=THEMES[th]; let n=0; const defs=[],plat=[],lines=[],sph=[]; const gid=()=>pre+'g'+(++n);
  const platform=(cx,cy,r)=>{const rx=r*1.15, ry=rx*0.42, g=gid();
    defs.push(`<radialGradient id="${g}" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="rgb(${t.ink})" stop-opacity="${t.glow}"/><stop offset="1" stop-color="rgb(${t.ink})" stop-opacity="0"/></radialGradient>`);
    plat.push(`<g><ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx)}" ry="${f(ry)}" fill="${rgba(t.ink,t.plat)}" stroke="${rgba(t.ink,t.plat_stroke)}" stroke-width="1"/><ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx*.62)}" ry="${f(ry*.62)}" fill="url(#${g})"/><ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(rx*.62)}" ry="${f(ry*.62)}" fill="none" stroke="${rgba(t.ink,t.plat_stroke*.7)}" stroke-width="1" stroke-dasharray="2 3"/></g>`);};
  return { sphere(cx,cy,r,shape,o={}){ const acc=!!o.accent, ink=acc?'240,143,81':t.ink; const pcy=cy+r+r*0.42; platform(cx,pcy,r);
      const gi=gid(), gs=gid();
      defs.push(`<radialGradient id="${gi}" cx="34%" cy="28%" r="78%"><stop offset="0" stop-color="rgb(${ink})" stop-opacity="${(t.glass_in*(acc?1.6:1)).toFixed(3)}"/><stop offset="1" stop-color="rgb(${ink})" stop-opacity="${t.glass_out}"/></radialGradient>`);
      defs.push(`<linearGradient id="${gs}" x1="0" y1="0" x2="0.4" y2="1"><stop offset="0" stop-color="rgb(${ink})" stop-opacity="${(t.stroke_top*(acc?1.2:1)).toFixed(3)}"/><stop offset="1" stop-color="rgb(${ink})" stop-opacity="${t.stroke_bot}"/></linearGradient>`);
      const list=typeof shape==='string'?SH[shape]:shape; const body=cubes(list,o.scale||r*0.30,cx,cy+r*0.06,t,acc?true:o.orange);
      const hl=`M${f(cx-r*.62)} ${f(cy-r*.42)} A${f(r*.78)} ${f(r*.78)} 0 0 1 ${f(cx-r*.10)} ${f(cy-r*.74)}`;
      sph.push(`<g><circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="url(#${gi})"/><ellipse cx="${f(cx)}" cy="${f(cy)}" rx="${f(r)}" ry="${f(r*.34)}" fill="none" stroke="${rgba(ink,t.equator)}" stroke-width="1" stroke-dasharray="2 3"/>${body}<circle cx="${f(cx)}" cy="${f(cy)}" r="${f(r)}" fill="none" stroke="url(#${gs})" stroke-width="1"/><path d="${hl}" fill="none" stroke="${rgba(ink,acc?0.45:0.30)}" stroke-width="1.2" stroke-linecap="round"/></g>`);
      return [cx,pcy]; },
    line(a,b,dash,acc){ const c=acc?'240,143,81':t.ink; lines.push(`<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="${rgba(c,t.line*(acc?1.5:1))}" stroke-width="1"${dash?' stroke-dasharray="3 4"':''}/>`); },
    node(p,acc){ const c=acc?'240,143,81':t.ink; lines.push(`<rect x="${f(p[0]-3)}" y="${f(p[1]-3)}" width="6" height="6" rx="1" fill="${rgba(c,acc?0.9:0.55)}"/>`); },
    svg(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640"><defs>${defs.join('')}</defs>${plat.join('')}${lines.join('')}${sph.join('')}</svg>`; } }; }
const res={};
for (const th of ['dark','light']){
  let d=Doc(th,th+'1'); const sh=['L','stack','T','step']; const base=[155,265,375,485].map((x,i)=>d.sphere(x,196+i*64,50,sh[i]));
  for(let i=0;i<3;i++) d.line(base[i],base[i+1],true); d.line([base[0][0]-80,base[0][1]-46],base[0],true); d.line(base[3],[base[3][0]+80,base[3][1]+46],true);
  res[th+'-1']=d.svg();
  d=Doc(th,th+'2'); const c=d.sphere(320,232,62,'core',{accent:true});
  const ps=[[320,70,'L'],[530,222,'stack'],[320,430,'T'],[110,222,'step']].map(([x,y,s])=>d.sphere(x,y,44,s));
  for(let i=0;i<4;i++) d.line(ps[i],ps[(i+1)%4]); for(const p of ps) d.line(c,p,true,true); for(const p of ps) d.node(p); d.node(c,true);
  res[th+'-2']=d.svg();
  d=Doc(th,th+'3'); const cubesAll=[]; for(let x=0;x<3;x++) for(let y=0;y<3;y++) cubesAll.push([x,y,0]);
  for(const [x,y] of [[0,0],[1,0],[0,1],[1,1],[2,0],[0,2]]) cubesAll.push([x,y,1]); for(const [x,y] of [[0,0],[1,0],[0,1]]) cubesAll.push([x,y,2]); cubesAll.push([0,0,3]);
  d.sphere(320,262,150,cubesAll,{scale:30,orange:[[0,0,3],[1,0,2]]}); res[th+'-3']=d.svg();
}
return res; }
if (typeof module!=='undefined') module.exports=buildSVGs;
