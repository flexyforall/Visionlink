// Capabilities · Community (light) v4: scattered pieces -> 2x2x2 lit core (one gradient per face) with small 1–2 cube pieces -> one rounded body in a sphere.
// One cube size (K) across all three frames, one solid border colour for every cube. Grid/shadows were removed by hand in Figma for frames 1 and 3. node scripts/capabilities-community.js <outdir>
function buildSVGs(){
const C30=Math.cos(Math.PI/6), K=34;            // one cube size for all three frames
const t={face:'#FFFDF8',line:'#B9AFA2',grid:'#EFE9DD',shadow:'#ECE5D8',
  acc:{edge:'#EB640F',mid:'#F6B88D',center:'#FCFFBC'}};
const f=n=>n.toFixed(1), key=c=>c.join(',');
// 8 pieces of 1–3 cubes (18 cubes) + 2-cube core = 20 cubes = frame 3 cluster
const PIECES=[
  [[0,0,0],[1,0,0],[0,1,0]],      // L, 3
  [[0,0,0],[1,0,0]],              // bar x, 2
  [[0,0,0],[0,0,1]],              // tower, 2
  [[0,0,0]],                      // single
  [[0,0,0],[0,1,0],[0,2,0]],      // line y, 3
  [[0,0,0],[0,1,0]],              // bar y, 2
  [[0,0,0],[1,0,0],[1,0,1]],      // step, 3
  [[0,0,0],[0,1,0],[0,0,1]],      // corner, 3
];
const CORE=[[0,0,0],[0,0,1]];
function Doc(OX,OY,pre){ let gid=0; const defs=[], L={grid:[],shadow:[],back:[],cubes:[],front:[]};
  const P=(x,y,z)=>[OX+(x-y)*C30*K, OY+(x+y)*0.5*K - z*K];
  const poly=pts=>'M'+pts.map(p=>f(p[0])+' '+f(p[1])).join(' L')+'Z';
  const grad=()=>{ const id=pre+'g'+(++gid); const A=t.acc;
    defs.push(`<radialGradient id="${id}" cx="0.5" cy="0.5" r="0.72"><stop offset="0" stop-color="${A.center}" stop-opacity="0"/><stop offset="0.55" stop-color="${A.mid}" stop-opacity="0.45"/><stop offset="1" stop-color="${A.edge}" stop-opacity="0.95"/></radialGradient>`); return id; };
  // draw one full cube (3 visible faces) at real-valued position
  const cube=(x,y,z,ac,hide={})=>{ const F=[];
    if(!hide.top) F.push([P(x,y,z+1),P(x+1,y,z+1),P(x+1,y+1,z+1),P(x,y+1,z+1)]);
    if(!hide.left) F.push([P(x,y+1,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x,y+1,z+1)]);
    if(!hide.right) F.push([P(x+1,y,z),P(x+1,y+1,z),P(x+1,y+1,z+1),P(x+1,y,z+1)]);
    for(const pts of F){ const d=poly(pts); L.cubes.push(`<path d="${d}" fill="${t.face}"/>`);
      if(ac) L.cubes.push(`<path d="${d}" fill="url(#${grad()})"/>`);
      L.cubes.push(`<path d="${d}" fill="none" stroke="${t.line}" stroke-width="1.2" stroke-linejoin="round"/>`); } };
  return { P,
    grid(x0,x1,y0,y1){ for(let x=x0;x<=x1;x++){ const a=P(x,y0,0),b=P(x,y1,0); L.grid.push(`<path d="M${f(a[0])} ${f(a[1])} L${f(b[0])} ${f(b[1])}" stroke="${t.grid}" stroke-width="1" fill="none"/>`);}
      for(let y=y0;y<=y1;y++){ const a=P(x0,y,0),b=P(x1,y,0); L.grid.push(`<path d="M${f(a[0])} ${f(a[1])} L${f(b[0])} ${f(b[1])}" stroke="${t.grid}" stroke-width="1" fill="none"/>`);} },
    // solid figure on integer cells: hidden faces culled, flat footprint shadow
    figures(list,noShadow){ // list of {ox,oy,cubes,acc}
      const all=[]; for(const g of list) for(const [x,y,z] of g.cubes) all.push([x+g.ox,y+g.oy,z,!!g.acc]);
      const occ=new Set(all.map(c=>key(c.slice(0,3))));
      if(!noShadow) for(const [x,y,z] of all) if(z===0){ const s=0.5; L.shadow.push(`<path d="${poly([P(x+s,y+s,0),P(x+1+s,y+s,0),P(x+1+s,y+1+s,0),P(x+s,y+1+s,0)])}" fill="${t.shadow}"/>`); }
      all.sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2])||a[2]-b[2]);
      for(const [x,y,z,ac] of all) cube(x,y,z,ac,{top:occ.has(key([x,y,z+1])),left:occ.has(key([x,y+1,z])),right:occ.has(key([x+1,y,z]))}); },
    cluster(cells,acc,gap,cx,cy,cz){ const s=1+gap; const sorted=[...cells].sort((a,b)=>(a[0]+a[1]+a[2])-(b[0]+b[1]+b[2])||a[2]-b[2]);
      const A=new Set(acc.map(key)); for(const c of sorted) cube(cx+c[0]*s,cy+c[1]*s,cz+c[2]*s,A.has(key(c))); },
    // solid block with ONE gradient per big face; cube division lines drawn on top
    block(x0,y0,n,acc){ const a0x=x0,a1x=x0+n,a0y=y0,a1y=y0+n,h=n;
      const big=[[P(a0x,a0y,h),P(a1x,a0y,h),P(a1x,a1y,h),P(a0x,a1y,h)],[P(a0x,a1y,0),P(a1x,a1y,0),P(a1x,a1y,h),P(a0x,a1y,h)],[P(a1x,a0y,0),P(a1x,a1y,0),P(a1x,a1y,h),P(a1x,a0y,h)]];
      for(const pts of big){ const d=poly(pts); L.cubes.push(`<path d="${d}" fill="${t.face}"/>`); if(acc) L.cubes.push(`<path d="${d}" fill="url(#${grad()})"/>`); }
      for(let i=0;i<n;i++) for(let j=0;j<n;j++){ // top cells, left (y=max) cells, right (x=max) cells
        const q=[[P(x0+i,y0+j,h),P(x0+i+1,y0+j,h),P(x0+i+1,y0+j+1,h),P(x0+i,y0+j+1,h)],[P(x0+i,a1y,j),P(x0+i+1,a1y,j),P(x0+i+1,a1y,j+1),P(x0+i,a1y,j+1)],[P(a1x,y0+i,j),P(a1x,y0+i+1,j),P(a1x,y0+i+1,j+1),P(a1x,y0+i,j+1)]];
        for(const pts of q) L.cubes.push(`<path d="${poly(pts)}" fill="none" stroke="${t.line}" stroke-width="1.2" stroke-linejoin="round"/>`); } },
    raw(layer,s){ L[layer].push(s); },
    svg(){ return `<svg xmlns="http://www.w3.org/2000/svg" width="640" height="640" viewBox="0 0 640 640"><defs>${defs.join('')}</defs><g id="Grid">${L.grid.join('')}</g><g id="Shadows">${L.shadow.join('')}</g><g id="Sphere back">${L.back.join('')}</g><g id="Cubes">${L.cubes.join('')}</g><g id="Sphere front">${L.front.join('')}</g></svg>`; } }; }
// place pieces near target screen points so their silhouettes never touch (screen-space boxes + padding)
function place(OX,OY,targets,taken,pad=18,pieces=PIECES){ const P=(x,y,z)=>[OX+(x-y)*C30*K, OY+(x+y)*0.5*K - z*K];
  const box=(cells)=>{ const xs=[],ys=[]; for(const [x,y,z] of cells) for(const dx of [0,1]) for(const dy of [0,1]) for(const dz of [0,1]){ const p=P(x+dx,y+dy,z+dz); xs.push(p[0]); ys.push(p[1]); }
    return [Math.min(...xs),Math.min(...ys),Math.max(...xs),Math.max(...ys)]; };
  const boxes=taken.map(box); const hit=(a,b)=>!(a[2]+pad<b[0]||b[2]+pad<a[0]||a[3]+pad<b[1]||b[3]+pad<a[1]);
  return pieces.map((pc,i)=>{ let best=null;
    for(let ox=-10;ox<=10;ox++) for(let oy=-10;oy<=10;oy++){ const cells=pc.map(([x,y,z])=>[x+ox,y+oy,z]); const b=box(cells);
      if(b[0]<28||b[2]>612||b[1]<30||b[3]>516) continue; if(boxes.some(o=>hit(b,o))) continue;
      const dd=Math.hypot((b[0]+b[2])/2-targets[i][0],(b[1]+b[3])/2-targets[i][1]); if(!best||dd<best.dd) best={ox,oy,dd,b}; }
    boxes.push(best.b); return {ox:best.ox,oy:best.oy,cubes:pc}; }); }
const res={};
// 1 · pieces scattered across the field
const OY=290;
let d=Doc(320,OY,'c1'); d.grid(-6,6,-6,6);
d.figures(place(320,OY,[[150,150],[370,90],[530,215],[310,255],[110,360],[455,370],[270,445],[540,480]],[])); res['light-1']=d.svg();
// 2 · a lit core appears, the pieces gather around it in a ring
d=Doc(320,OY,'c2');                                   // no grid / shadows (removed by design)
const CORE8=[]; for(let x=0;x<2;x++) for(let y=0;y<2;y++) for(let z=0;z<2;z++) CORE8.push([x,y,z]);
const SMALL=[[[0,0,0],[1,0,0]],[[0,0,0]],[[0,0,0],[0,0,1]],[[0,0,0]],[[0,0,0],[0,1,0]],[[0,0,0]],[[0,0,0],[0,0,1]],[[0,0,0]]];  // 12 cubes + 8 core = 20
const coreC=[320,OY-16]; const ring=[]; for(let i=0;i<8;i++){ const a=-Math.PI/2+i*Math.PI/4; const j=[1,0.92,1.08,0.9,1.04,0.95,1.1,0.93][i], da=[0,0.12,-0.1,0.15,0,-0.12,0.1,-0.08][i]; ring.push([coreC[0]+205*j*Math.cos(a+da),coreC[1]+165*j*Math.sin(a+da)]); }
d.figures(place(320,OY,ring,[CORE8.map(([x,y,z])=>[x-0.5,y-0.5,z])],14,SMALL),true); d.block(-0.5,-0.5,2,true); res['light-2']=d.svg();
// 3
const cells=[]; for(let x=0;x<3;x++) for(let y=0;y<3;y++) for(let z=0;z<3;z++){ const corner=(x!==1)&&(y!==1)&&(z!==1); if(corner && !(x===2&&y===2&&z===2)) continue; cells.push([x,y,z]); }
// 3 · everything assembled into one rounded body inside the sphere (floor dropped so the sphere rests on it)
const gap=0.16, ext=3+2*gap, c0=0.5-ext/2;
const cw=ext*2*C30*K, R=cw/0.62/2, CY=262, lift=14;
const OY3=CY+R+lift-K;                            // floor point under the sphere sits just below it
d=Doc(320,OY3,'c3'); d.grid(-6,6,-6,6);
const cz=(OY3+K-CY)/K - ext/2;                    // cluster centre on the sphere centre
const ctr=[320,CY];
const sh=[]; const rs=R/K*0.48; for(let i=0;i<=72;i++){ const a=i/72*Math.PI*2; sh.push(d.P(0.5+0.25+rs*Math.cos(a),0.5+0.25+rs*Math.sin(a),0)); }
d.raw('shadow',`<path d="M${sh.map(p=>f(p[0])+' '+f(p[1])).join(' L')}Z" fill="${t.shadow}"/>`);
d.raw('back',`<circle cx="${f(ctr[0])}" cy="${f(ctr[1])}" r="${f(R)}" fill="#FAF6EC"/>`);
d.cluster(cells,[[2,2,1],[2,2,2]],gap,c0,c0,cz);
d.raw('front',`<circle cx="${f(ctr[0])}" cy="${f(ctr[1])}" r="${f(R)}" fill="none" stroke="${t.line}" stroke-width="1.2"/>`);
d.raw('front',`<ellipse cx="${f(ctr[0])}" cy="${f(ctr[1])}" rx="${f(R*0.9)}" ry="${f(R*0.4)}" transform="rotate(-18 ${f(ctr[0])} ${f(ctr[1])})" fill="none" stroke="${t.line}" stroke-width="1.6" stroke-dasharray="0.1 5" stroke-linecap="round"/>`);
res['light-3']=d.svg();
return res; }
if (typeof module!=='undefined') module.exports=buildSVGs;
if (typeof require!=='undefined' && require.main===module){ const fs=require('fs'), path=require('path'); const dir=process.argv[2]||'.'; const r=buildSVGs(); for (const k in r) fs.writeFileSync(path.join(dir,k+'.svg'), r[k]); }
