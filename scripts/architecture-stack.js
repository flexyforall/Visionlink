// Platform · Architecture section illustrations (dark): data box (top) / config plates (middle) / brand 2x2 cubes (bottom).
// All three layers are always drawn; on scroll the active one glows (one gradient per face): frame 1 top, 2 middle, 3 bottom.
// Faces are #131110 @40% with a 40px background blur applied in Figma. node scripts/architecture-stack.js <outdir>
function buildArch(preview){
const C30=Math.cos(Math.PI/6), K=36, W=427, H=497;
const t={face:'#131110',faceOp:0.4,line:'#66615B',ghost:'#3A3734',acc:{edge:'#EB640F',mid:'#F6B88D',center:'#FCFFBC'}};
const f=n=>n.toFixed(1);
const OX=W/2, OY=H/2+ (9.5*K)/2 - 3.6*K/2*0.5*2 + 0; // centred below
function Doc(pre,oy){ let gid=0; const defs=[]; const G={};
  const P=(x,y,z)=>[OX+(x-y)*C30*K, oy+(x+y)*0.5*K - z*K];
  const poly=pts=>'M'+pts.map(p=>f(p[0])+' '+f(p[1])).join(' L')+'Z';
  const grad=()=>{ const id=pre+'g'+(++gid); const A=t.acc; defs.push(`<radialGradient id="${id}" cx="0.5" cy="0.5" r="0.72"><stop offset="0" stop-color="${A.center}" stop-opacity="0"/><stop offset="0.55" stop-color="${A.mid}" stop-opacity="0.45"/><stop offset="1" stop-color="${A.edge}" stop-opacity="0.95"/></radialGradient>`); return id; };
  const faces=(x0,y0,z0,sx,sy,sz)=>{ const x1=x0+sx,y1=y0+sy,z1=z0+sz;
    return {top:[P(x0,y0,z1),P(x1,y0,z1),P(x1,y1,z1),P(x0,y1,z1)], left:[P(x0,y1,z0),P(x1,y1,z0),P(x1,y1,z1),P(x0,y1,z1)], right:[P(x1,y0,z0),P(x1,y1,z0),P(x1,y1,z1),P(x1,y0,z1)],
            bottom:[P(x0,y0,z0),P(x1,y0,z0),P(x1,y1,z0),P(x0,y1,z0)], back1:[P(x0,y0,z0),P(x0,y1,z0),P(x0,y1,z1),P(x0,y0,z1)], back2:[P(x0,y0,z0),P(x1,y0,z0),P(x1,y0,z1),P(x0,y0,z1)]}; };
  const push=(g,s)=>{ (G[g]=G[g]||[]).push(s); };
  return {
    // solid prism: face fill + solid line
    prism(g,x0,y0,z0,sx,sy,sz){ const F=faces(x0,y0,z0,sx,sy,sz); for(const k of ['top','left','right']){ const d=poly(F[k]);
      push(g,`<path id="face" d="${d}" fill="${preview?'#161412':t.face}" fill-opacity="${preview?1:t.faceOp}"/>`); push(g,`<path d="${d}" fill="none" stroke="${t.line}" stroke-width="1.2" stroke-linejoin="round"/>`); } },
    // wire box: back edges before content, front faces after
    boxBack(g,x0,y0,z0,sx,sy,sz){ const F=faces(x0,y0,z0,sx,sy,sz); for(const k of ['bottom','back1','back2']) push(g,`<path d="${poly(F[k])}" fill="none" stroke="${t.line}" stroke-width="1.2" stroke-linejoin="round"/>`); },
    boxFront(g,x0,y0,z0,sx,sy,sz,acc,stroke=true){ const F=faces(x0,y0,z0,sx,sy,sz); for(const k of ['top','left','right']){ const d=poly(F[k]);
      if(acc) push(g,`<path d="${d}" fill="url(#${grad()})"/>`); if(stroke) push(g,`<path d="${d}" fill="none" stroke="${t.line}" stroke-width="1.2" stroke-linejoin="round"/>`); } },
    ghost(g,x0,y0,z0,sx,sy,sz){ const F=faces(x0,y0,z0,sx,sy,sz); for(const k of ['top','left','right']) push(g,`<path d="${poly(F[k])}" fill="none" stroke="${t.ghost}" stroke-width="1" stroke-dasharray="2 4" stroke-linejoin="round"/>`); },
    svg(order){ return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}"><defs>${defs.join('')}</defs>${order.filter(k=>G[k]).map(k=>`<g id="${k}">${G[k].join('')}</g>`).join('')}</svg>`; } }; }
// geometry (world units, footprint -1.8..1.8)
const B=1.8, S=2*B;
const L={ brand:{z0:0,h:1.7}, config:{z0:4.3,h:3*0.22+2*0.14}, data:{z0:7.84,h:1.2} };   // top: data, middle: config, bottom: brand
const top=L.data.z0+L.data.h;           // 5.7
const oy=Math.round(H/2 + (top*K)/2 - (S*0.5*K)/2*0 ) ;  // vertical centring: screen span = top*K + S*K
const OY0 = (H - (top*K + S*K))/2 + top*K + S*0.5*K*0; 
function frame(n,pre){ const d=Doc(pre, H/2 + top*K/2);
  const lay=[['brand',3],['config',2],['data',1]];   // drawn bottom -> top; lit in scroll order 1 top, 2 middle, 3 bottom
  for(const [name,i] of lay){ const g=name[0].toUpperCase()+name.slice(1); const z0=L[name].z0, h=L[name].h, acc=(i===n);
    if(name==='data'){ d.boxBack(g,-B,-B,z0,S,S,h); const s=1, gap=0.2, o=-B+0.1;
      const cells=[]; for(let x=0;x<3;x++) for(let y=0;y<3;y++) cells.push([x,y]); cells.sort((a,b)=>(a[0]+a[1])-(b[0]+b[1]));
      for(const [x,y] of cells) d.prism(g,o+x*(s+gap),o+y*(s+gap),z0+0.1,s,s,1);
      d.boxFront(g,-B,-B,z0,S,S,h,acc); }
    if(name==='config'){ for(let k=0;k<3;k++) d.prism(g,-B,-B,z0+k*0.36,S,S,0.22); if(acc) d.boxFront(g,-B,-B,z0,S,S,h,true,false); }
    if(name==='brand'){ const s=1.7, gap=0.2; const cells=[[0,0],[1,0],[0,1],[1,1]];
      for(const [x,y] of cells) d.prism(g,-B+x*(s+gap),-B+y*(s+gap),z0,s,s,s); if(acc) d.boxFront(g,-B,-B,z0,S,S,h,true,false); } }
  return d.svg(['Brand','Config','Data']); }
return {'arch-1':frame(1,'a1'),'arch-2':frame(2,'a2'),'arch-3':frame(3,'a3')}; }
if (typeof module!=='undefined') module.exports=buildArch;
if (typeof require!=='undefined' && require.main===module){ const fs=require('fs'), path=require('path'); const dir=process.argv[2]||'.'; const r=buildArch(false); for (const k in r) fs.writeFileSync(path.join(dir,k+'.svg'), r[k]); }
