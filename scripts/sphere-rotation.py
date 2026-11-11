import math, sys, os, numpy as np
from PIL import Image, ImageDraw
BG=tuple(int(sys.argv[1][i:i+2],16) for i in (0,2,4)); OUT=sys.argv[2]
W,H=1268,1142; SS=2; FPS=30
C=np.array([654.0,558.0]); R=396.0; ORB=539.0
p1=np.array([300.0,385.0]); p2=np.array([1018.0,716.0])
ax2=(p2-p1)/np.linalg.norm(p2-p1)
a=np.array([ax2[0],ax2[1],0.0]); u=np.array([-ax2[1],ax2[0],0.0]); w=np.array([0,0,1.0])
N=4; PHI0=[math.radians(x) for x in (22,62,112,158)]   # uneven start spacing like the drawing
STEP=math.pi/3; MOVE=1.4; HOLD=1.6; LOOP=3*(MOVE+HOLD); FRAMES=int(round(LOOP*FPS))
cream=(250,246,236)
def ease(t): return t*t*t*(t*(6*t-15)+10)
def angle(t):
    k=int(t//(MOVE+HOLD)); r=t-k*(MOVE+HOLD); return k*STEP+STEP*ease(min(r/MOVE,1.0))
def col(alpha): return tuple(int(BG[i]+(cream[i]-BG[i])*alpha) for i in range(3))
def dashed(d,pts,c,wd,on,off):
    acc=0; drawing=True; seg=[pts[0]]
    for p,q in zip(pts,pts[1:]):
        acc+=math.dist(p,q); seg.append(q)
        if acc>=(on if drawing else off):
            if drawing and len(seg)>1: d.line(seg,fill=c,width=wd)
            drawing=not drawing; acc=0; seg=[q]
    if drawing and len(seg)>1: d.line(seg,fill=c,width=wd)
os.makedirs('f',exist_ok=True)
S=SS; cx,cy=C*S
for fi in range(FRAMES):
    th=angle(fi/FPS)
    img=Image.new('RGB',(W*S,H*S),BG); d=ImageDraw.Draw(img)
    s=np.linspace(0,2*math.pi,1440)
    # static dotted orbit
    pts=[(cx+ORB*S*math.cos(t), cy+ORB*S*math.sin(t)) for t in s]
    dashed(d,pts,col(0.30),int(1.2*S),2*S,6*S)
    # meridians: back halves first (dotted), then front (solid)
    for want in (False,True):
        for p0 in PHI0:
            ph=p0+th; dv=math.cos(ph)*u+math.sin(ph)*w
            P=np.outer(np.cos(s),a)+np.outer(np.sin(s),dv)
            X=cx+P[:,0]*R*S; Y=cy+P[:,1]*R*S; front=P[:,2]>=0
            run=[]
            for x,y,f in zip(X,Y,front):
                if f==want: run.append((x,y))
                else:
                    if len(run)>1: (d.line(run,fill=col(0.36),width=int(1.3*S)) if want else dashed(d,run,col(0.28),int(1.2*S),2*S,5*S))
                    run=[]
            if len(run)>1: (d.line(run,fill=col(0.36),width=int(1.3*S)) if want else dashed(d,run,col(0.28),int(1.2*S),2*S,5*S))
    # silhouette
    d.ellipse([cx-R*S,cy-R*S,cx+R*S,cy+R*S],outline=col(0.55),width=int(1.6*S))
    img.resize((W,H),Image.LANCZOS).save(f'f/{fi:04d}.png')
print(FRAMES)
