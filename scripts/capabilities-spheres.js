function buildSVGs(){
const C30=Math.cos(Math.PI/6), K=32, OX=320;
const T={
 dark:{bg:'#131110',ink:'250,246,236',inkHex:'#FAF6EC',top:'#FAF6EC',left:'#CFC8BA',right:'#9F978A',edge:'rgba(19,17,16,0.35)',glass:'250,246,236',sphA:0.12,accSph:0.20,accPlat:0.16,sphS:0.45,platA:0.10,platS:0.20,tile:0.16,line:0.30,
       acc:{rgb:'151,153,255',hex:'#9799FF',top:'#CBCCFF',left:'#9799FF',right:'#586CBC',edge:'rgba(19,17,16,0.25)'}},
 light:{bg:'#FAF6EC',ink:'19,17,16',inkHex:'#131110',top:'#FFFFFF',left:'#E4DCCD',right:'#C7BCA9',edge:'rgba(19,17,16,0.30)',glass:'255,255,255',sphA:0.50,accSph:0.22,accPlat:0.18,sphS:0.26,platA:0.45,platS:0.14,tile:0.10,line:0.24,
       acc:{rgb:'240,143,81',hex:'#F08F51',top:'#F6B88D',left:'#F08F51',right:'#D76B27',edge:'rgba(19,17,16,0.25)'}}};
const SH={L:[[0,0,0],[1,0,0],[0,1,0],[0,0,1]],stack:[[0,0,0],[0,0,1],[0,0,2],[1,0,0]],T:[[0,0,0],[1,0,0],[2,0,0],[1,0,1]],step:[[0,0,0],[1,0,0],[1,0,1],[0,1,0]],core:[[0,0,0],[1,0,0],[0,1,0],[1,1,0],[0,0,1]]};
const f=n=>n.toFixed(1), rgba=(ink,a)=>`rgba(${ink},${Math.max(0,a).toFixed(3)})`;
const h2=h=>[1,3,5].map(i=>parseInt(h.slice(i,i+2),16));
const mix=(a,b,t)=>{const A=h2(a),B=h2(b); return '#'+A.map((v,i)=>Math.round(v+(B[i]-v)*t).toString(16).padStart(2,'0')).join('');};  // solid (opaque) tint
const iso=(x,y,z,s)=>[(x-y)*C30*s,(x+y)*0.5*s-z*s];
const key=c=>c.join(',');
function cubes(list,s,cx,cy,pal,accPal,orange){
  const pts=[]; for(const [x,y,z] of list) for(const dx of [0,1]) for(const dy of [0,1]) for(const dz of [0,1]) pts.push(iso(x+dx,y+dy,z+dz,s));
  const xs=pts.map(p=>p[0]), ys=pts.map(p=>p[1]); const ox=cx-(Math.min(...xs)+Math.max(...xs))/2, oy=cy-(Math.min(...ys)+Math.max(...ys))/2;
  const P=(x,y,z)=>{const p=iso(x,y,z,s); return [p[0]+ox,p[1]+oy];};
  const occ=new Set(list.map(key)); const ors=new Set(Array.isArray(orange)?orange.map(key):[]);
  const sorted=[...list].sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2]) || a[2]-b[2]); let out='';
  for(const [x,y,z] of sorted){ const p=(orange===true||ors.has(key([x,y,z])))?accPal:pal;
    for(const [k,ok,poly] of [['top',!occ.has(key([x,y,z+1])),[P(x,y,z+1),P(x+1,y,z+1),P(x+1,y+1,z+1),P(x,y+1,z+1)]],
      ['left',!occ.has(key([x,y+1,z])),[P(x,y+1,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x,y+1,z+1)]],
      ['right',!occ.has(key([x+1,y,z])),[P(x+1,y,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x+1,y,z+1)]]])
      if(ok) out+=`<path d="M${poly.map(q=>f(q[0])+' '+f(q[1])).join(' L')}Z" fill="${p[k]}" stroke="${p.edge}" stroke-width="0.6" stroke-linejoin="round"/>`; }
  return out; }
function Doc(th,OY){ const t=T[th]; const A=t.acc; const floor=[],lines=[],items=[];
  const W=(x,y)=>{const p=iso(x,y,0,K); return [OX+p[0],OY+p[1]];};
  const N=7, S=1.5;
  for(let i=-N;i<N;i++) for(let j=-N;j<N;j++){ const d=Math.hypot(i+0.5,j+0.5)/N; const a=t.tile*Math.pow(Math.max(0,1-d),1.2); if(a<0.004) continue;
    const q=[W(i*S,j*S),W((i+1)*S,j*S),W((i+1)*S,(j+1)*S),W(i*S,(j+1)*S)];
    floor.push(`<path d="M${q.map(p=>f(p[0])+' '+f(p[1])).join(' L')}Z" fill="none" stroke="${rgba(t.ink,a)}" stroke-width="1"/>`); }
  return { W,
    item(wx,wy,r,shape,o={}){ const acc=!!o.accent; const [px,py]=W(wx,wy);
      const gc = acc? A.rgb : t.glass; const sc = acc? A.rgb : t.ink;
      const rx=r*(o.plat??0.78), ry=rx*0.577;
      let g=`<g><ellipse id="glass-platform" cx="${f(px)}" cy="${f(py)}" rx="${f(rx)}" ry="${f(ry)}" fill="rgb(${gc})" fill-opacity="${(acc?t.accPlat:t.platA).toFixed(3)}" stroke="${rgba(sc,t.platS*(acc?1.8:1))}" stroke-width="1"/>`;
      const cy = o.cy ?? (py - r*(o.lift??0.9));
      g+=`<circle id="glass-sphere" cx="${f(px)}" cy="${f(cy)}" r="${f(r)}" fill="rgb(${gc})" fill-opacity="${(acc?t.accSph:t.sphA).toFixed(3)}" stroke="${rgba(sc,t.sphS*(acc?1.6:1))}" stroke-width="1"/>`;
      const list=typeof shape==='string'?SH[shape]:shape;
      g+=cubes(list,o.scale||r*0.30,px,cy+r*0.04,t,A,acc?true:o.orange)+'</g>';
      items.push([wx+wy,g]); return [px,py]; },
    line(a,b,dash,acc){ const c=acc?A.rgb:t.ink; lines.push(`<line x1="${f(a[0])}" y1="${f(a[1])}" x2="${f(b[0])}" y2="${f(b[1])}" stroke="${rgba(c,t.line*(acc?1.6:1))}" stroke-width="1"${dash?' stroke-dasharray="3 4"':''}/>`); },
    svg(){ items.sort((a,b)=>a[0]-b[0]); return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640">${floor.join('')}${lines.join('')}${items.map(i=>i[1]).join('')}</svg>`; } }; }
const res={};
for (const th of ['dark','light']){
  // 1 · row of bigger spheres along the iso x-axis
  let d=Doc(th,376); const sh=['L','stack','T','step'];
  const row=[-6.3,-2.1,2.1,6.3].map((x,i)=>d.item(x,0,54,sh[i]));
  for(let i=0;i<3;i++) d.line(row[i],row[i+1],true); d.line(d.W(-9,0),row[0],true); d.line(row[3],d.W(9,0),true);
  res[th+'-1']=d.svg();
  // 2 · accent centre with four spheres in a floor diamond
  d=Doc(th,372); const c=d.item(0,0,50,'core',{accent:true});
  const ps=[[-4.5,-4.5,'L'],[4.5,-4.5,'stack'],[4.5,4.5,'T'],[-4.5,4.5,'step']].map(([x,y,s])=>d.item(x,y,36,s));
  for(let i=0;i<4;i++) d.line(ps[i],ps[(i+1)%4]); for(const p of ps) d.line(c,p,true,true);
  res[th+'-2']=d.svg();
  // 3 · everything assembled in one big centred sphere
  const R=170, cyS=320, pyS=cyS+R*0.94;
  d=Doc(th,pyS); const B=[]; for(let x=0;x<3;x++) for(let y=0;y<3;y++) B.push([x,y,0]);
  for(const [x,y] of [[0,0],[1,0],[0,1],[1,1],[2,0],[0,2]]) B.push([x,y,1]); for(const [x,y] of [[0,0],[1,0],[0,1]]) B.push([x,y,2]); B.push([0,0,3]);
  d.item(0,0,R,B,{scale:33,cy:cyS,plat:0.5,orange:[[0,0,3],[1,0,2]]}); res[th+'-3']=d.svg();
}
return res; }
if (typeof module!=='undefined') module.exports=buildSVGs;
