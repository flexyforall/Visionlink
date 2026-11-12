function buildSVGs(){
const C30=Math.cos(Math.PI/6), K=32, OX=320, OY=372;
const T={
 dark:{ink:'250,246,236',top:'#FAF6EC',left:'#CFC8BA',right:'#9F978A',edge:'rgba(19,17,16,0.35)',sph:0.07,sphS:0.42,pTop:0.10,pSide:0.05,tile:0.15,line:0.30},
 light:{ink:'19,17,16',top:'#FFFFFF',left:'#E4DCCD',right:'#C7BCA9',edge:'rgba(19,17,16,0.30)',sph:0.04,sphS:0.30,pTop:0.07,pSide:0.11,tile:0.09,line:0.24}};
const OR={top:'#F6B88D',left:'#F08F51',right:'#D76B27',edge:'rgba(19,17,16,0.25)'};
const SH={L:[[0,0,0],[1,0,0],[0,1,0],[0,0,1]],stack:[[0,0,0],[0,0,1],[0,0,2],[1,0,0]],T:[[0,0,0],[1,0,0],[2,0,0],[1,0,1]],step:[[0,0,0],[1,0,0],[1,0,1],[0,1,0]],core:[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1]]};
const f=n=>n.toFixed(1), rgba=(ink,a)=>`rgba(${ink},${Math.max(0,a).toFixed(3)})`;
const iso=(x,y,z,s)=>[(x-y)*C30*s,(x+y)*0.5*s-z*s];
const W=(x,y)=>{const p=iso(x,y,0,K); return [OX+p[0],OY+p[1]];};   // floor world -> screen
const key=c=>c.join(',');
function cubes(list,s,cx,cy,t,orange){
  const pts=[]; for(const [x,y,z] of list) for(const dx of [0,1]) for(const dy of [0,1]) for(const dz of [0,1]) pts.push(iso(x+dx,y+dy,z+dz,s));
  const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]); const ox=cx-(Math.min(...xs)+Math.max(...xs))/2, oy=cy-(Math.min(...ys)+Math.max(...ys))/2;
  const P=(x,y,z)=>{const p=iso(x,y,z,s); return [p[0]+ox,p[1]+oy];};
  const occ=new Set(list.map(key)); const ors=new Set(Array.isArray(orange)?orange.map(key):[]);
  const sorted=[...list].sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2]) || a[2]-b[2]); let out='';
  for(const [x,y,z] of sorted){ const pal=(orange===true||ors.has(key([x,y,z])))?OR:t;
    for(const [k,ok,poly] of [['top',!occ.has(key([x,y,z+1])),[P(x,y,z+1),P(x+1,y,z+1),P(x+1,y+1,z+1),P(x,y+1,z+1)]],
      ['left',!occ.has(key([x,y+1,z])),[P(x,y+1,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x,y+1,z+1)]],
      ['right',!occ.has(key([x+1,y,z])),[P(x+1,y,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x+1,y,z+1)]]])
      if(ok) out+=`<path d="M${poly.map(p=>f(p[0])+' '+f(p[1])).join(' L')}Z" fill="${pal[k]}" stroke="${pal.edge}" stroke-width="0.6" stroke-linejoin="round"/>`; }
  return out; }
function Doc(th){ const t=T[th]; const floor=[],lines=[],items=[];
  // floor tiles with radial fade
  const N=9;
  for(let i=-N;i<N;i++) for(let j=-N;j<N;j++){ const d=Math.hypot(i+0.5,j+0.5)/N; const a=t.tile*Math.pow(Math.max(0,1-d),1.3); if(a<0.004) continue;
    const q=[W(i,j),W(i+1,j),W(i+1,j+1),W(i,j+1)];
    floor.push(`<path d="M${q.map(p=>f(p[0])+' '+f(p[1])).join(' L')}Z" fill="none" stroke="${rgba(t.ink,a)}" stroke-width="1"/>`); }
  return {
    item(wx,wy,r,shape,o={}){ const acc=!!o.accent, ink=acc?'240,143,81':t.ink; const [px,py]=W(wx,wy);
      // platform: flat disc with thickness (true iso circle ratio 0.577)
      const rx=r*1.12, ry=rx*0.577, h=Math.max(5,r*0.12);
      const side=`M${f(px-rx)} ${f(py)} L${f(px-rx)} ${f(py+h)} A${f(rx)} ${f(ry)} 0 0 0 ${f(px+rx)} ${f(py+h)} L${f(px+rx)} ${f(py)} A${f(rx)} ${f(ry)} 0 0 1 ${f(px-rx)} ${f(py)}Z`;
      let g=`<g><path d="${side}" fill="${rgba(acc?ink:t.ink,(acc?0.9:1)*t.pSide*(acc?2:1))}"/><ellipse cx="${f(px)}" cy="${f(py)}" rx="${f(rx)}" ry="${f(ry)}" fill="${rgba(acc?ink:t.ink,t.pTop*(acc?1.8:1))}"/>`;
      // sphere floats above platform
      const cy=py-r-r*0.42;
      g+=`<circle cx="${f(px)}" cy="${f(cy)}" r="${f(r)}" fill="${rgba(ink,t.sph*(acc?2.2:1))}" stroke="${rgba(ink,t.sphS*(acc?1.6:1))}" stroke-width="1"/>`;
      const list=typeof shape==='string'?SH[shape]:shape;
      g+=cubes(list,o.scale||r*0.30,px,cy+r*0.06,t,acc?true:o.orange)+'</g>';
      items.push([wx+wy,g]); return [px,py]; },
    line(a,b,dash,acc){ const c=acc?'240,143,81':t.ink; lines.push(`<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="${rgba(c,t.line*(acc?1.6:1))}" stroke-width="1"${dash?' stroke-dasharray="3 4"':''}/>`); },
    svg(){ items.sort((a,b)=>a[0]-b[0]); return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">${floor.join('')}${lines.join('')}${items.map(i=>i[1]).join('')}</svg>`; } }; }
const res={};
for (const th of ['dark','light']){
  let d=Doc(th); const sh=['L','stack','T','step'];
  const row=[-6,-2,2,6].map((x,i)=>d.item(x,0,44,sh[i]));
  for(let i=0;i<3;i++) d.line(row[i],row[i+1],true); d.line(W(-8.5,0),row[0],true); d.line(row[3],W(8.5,0),true);
  res[th+'-1']=d.svg();
  d=Doc(th); const c=d.item(0,0,50,'core',{accent:true});
  const ps=[[-4.5,-4.5,'L'],[4.5,-4.5,'stack'],[4.5,4.5,'T'],[-4.5,4.5,'step']].map(([x,y,s])=>d.item(x,y,36,s));
  for(let i=0;i<4;i++) d.line(ps[i],ps[(i+1)%4]); for(const p of ps) d.line(c,p,true,true);
  res[th+'-2']=d.svg();
  d=Doc(th); const A=[]; for(let x=0;x<3;x++) for(let y=0;y<3;y++) A.push([x,y,0]);
  for(const [x,y] of [[0,0],[1,0],[0,1],[1,1],[2,0],[0,2]]) A.push([x,y,1]); for(const [x,y] of [[0,0],[1,0],[0,1]]) A.push([x,y,2]); A.push([0,0,3]);
  d.item(0,0.5,124,A,{scale:26,orange:[[0,0,3],[1,0,2]]}); res[th+'-3']=d.svg();
}
return res; }
if (typeof module!=='undefined') module.exports=buildSVGs;
