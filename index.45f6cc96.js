class e extends Option{func;constructor(e,t){super(e,e),this.func=t}}class t{elems;constructor(e){this.elems=e}options=[new e("100%x60%",()=>{this.resizeCanvasByPct(100,60)}),new e("100%x80%",()=>{this.resizeCanvasByPct(100,80)}),new e("640x360",()=>{this.resizeCanvasByPx(640,360)}),new e("640x640",()=>{this.resizeCanvasByPx(640,640)})];setOptions(){let e=new DocumentFragment;this.options.map(t=>e.append(t)),this.elems.size.replaceChildren(e),this.options[0].func()}onChange(e){let t=e.target.value;(this.options.find(e=>e.value===t)||this.options[0]).func()}resizeCanvasByPx(e,t){this.elems.canvas.width=e,this.elems.canvas.height=t}resizeCanvasByPct(e,t){this.elems.canvas.width=this.elems.sketch.clientWidth*e/100-2,this.elems.canvas.height=this.elems.body.clientHeight*t/100-2}}class a{targetDoc;constructor(e){this.targetDoc=e}get body(){return this.targetDoc.getElementsByTagName("body").item(0)}get sketch(){return this.targetDoc.getElementById("sketch")}get canvas(){return this.targetDoc.getElementById("canvas")}get context(){return this.canvas.getContext("2d")}get redArc(){return this.targetDoc.getElementById("redArc")}get redEllipse(){return this.targetDoc.getElementById("redEllipse")}get blueArc(){return this.targetDoc.getElementById("blueArc")}get blueEllipse(){return this.targetDoc.getElementById("blueEllipse")}get eyeArc(){return this.targetDoc.getElementById("eyeArc")}get eyeEllipse(){return this.targetDoc.getElementById("eyeEllipse")}get size(){return this.targetDoc.getElementById("size")}get download(){return this.targetDoc.getElementById("download")}get clear(){return this.targetDoc.getElementById("clear")}}class s{elems;constructor(e){this.elems=e}onClick(){this.createAnchor().click()}createAnchor(){let e=`myaku-myaku_${this.formatYyyymmddHhmmss(new Date)}.png`,t=document.createElement("a");return t.href=this.elems.canvas.toDataURL("image/png"),t.download=e,t}formatYyyymmddHhmmss(e){return e.getFullYear()+this.padZero(e.getMonth()+1)+this.padZero(e.getDate())+"-"+this.padZero(e.getHours())+this.padZero(e.getMinutes())+this.padZero(e.getSeconds())}padZero(e,t=2){return e.toString().padStart(t,"0")}}class r{myakuList;next;constructor(e){this.myakuList=e,this.next=0}hasNext(){return this.next<this.myakuList.length}getNext(){let e=this.myakuList.get(this.next);return this.next++,e}}class n{myakuList;next;constructor(e){this.myakuList=e,this.next=this.myakuList.length}hasNext(){return 0<this.next}getNext(){return this.next--,this.myakuList.get(this.next)}}class i{myakus;next;constructor(){this.myakus=[],this.next=0}get length(){return this.next}get(e){return this.myakus[e]}append(e){this.myakus[this.next]=e,this.next++}remove(e){this.myakus=this.myakus.filter(t=>e!==t),this.next--}fifoIterator(){return new r(this)}lifoIterator(){return new n(this)}}class h{myakuList=new i;selectedMyaku=null;elems;constructor(e){this.elems=e,this.changeFabric()}putOnMyaku(e){this.myakuList.append(e)}eraseMyaku(e){this.myakuList.remove(e)}grabMyaku(e){this.selectedMyaku=e}moveMyaku(e){this.selectedMyaku&&this.selectedMyaku.movePosition(e)}releaseMyaku(){this.selectedMyaku=null}seekMyaku(e,t){let a=this.myakuList.lifoIterator();for(;a.hasNext();){let s=a.getNext();if(s.inRange(e)){t(s);break}}}redraw(){this.paintGesso();let e=this.myakuList.fifoIterator();for(;e.hasNext();)e.getNext().drawPath(this.elems.context)}changeFabric(){this.myakuList=new i,this.paintGesso()}paintGesso(){this.elems.context.clearRect(0,0,this.elems.canvas.width,this.elems.canvas.height)}}class o{static SKEB_OFFSET=25;static SHAPE_SENSITIVITY=1.2;static RADIUSES=[20,30,40,50];static RADIUS_XYS=[[20,30],[20,40],[20,50],[20,60],[30,40],[30,50],[30,60],[40,50],[40,60],[50,60]];static BODY_ANGLES=[0,15,30,45,60,75,90,105,120,135,150,165];static WHITE_ANGLES=[0,45,90,135,180,-135,-90,-45,0];static IRIS_ANGLES=[0,45,90,135,180,-135,-90,-45,0];static MYAKU_RED="rgb(229, 0, 18)";static MYAKU_BLUE="rgb(0, 104, 182)";static MYAKU_WHITE="rgb(225, 225, 225)"}class c{x;y;constructor(e,t){this.x=e,this.y=t}static createRandom(e,t){let a=o.SKEB_OFFSET,s=(e,t)=>Math.floor(Math.random()*(t-e+1)+e);return new c(s(a,e-a),s(a,t-a))}static createByMouse(e,t){return new c(e.pageX-t.offsetLeft,e.pageY-t.offsetTop)}findByHypAngle(e,t){let a=t*Math.PI/180;return new c(this.x+e*Math.cos(a),this.y+e*Math.sin(a))}}class l{static get radius(){return this.randomFromArray(o.RADIUSES)}static get radiusXy(){return this.randomFromArray(o.RADIUS_XYS)}static get bodyAngle(){return this.randomFromArray(o.BODY_ANGLES)}static get whiteAngle(){return this.randomFromArray(o.WHITE_ANGLES)}static get irisAngle(){return this.randomFromArray(o.IRIS_ANGLES)}static randomFromArray(e){return e[Math.floor(Math.random()*e.length)]}}class u{coord;radiusX;radiusY;bodyAngle;constructor(e,t,a,s=0){this.coord=e,this.radiusX=t,this.radiusY=a,this.bodyAngle=s}get bodyRadian(){return this.bodyAngle*Math.PI/180}static forArc(e,t){let a=l.radius;return new u(c.createRandom(e,t),a,a,l.bodyAngle)}static forEllipse(e,t){let a=l.radiusXy;return new u(c.createRandom(e,t),a[0],a[1],l.bodyAngle)}}class d{bodyColor;whiteAngle;irisAngle;constructor(e="rgb(0, 0, 0)",t=0,a=0){this.bodyColor=e,this.whiteAngle=t,this.irisAngle=a}static createRed(){return new d(o.MYAKU_RED)}static createBlue(){return new d(o.MYAKU_BLUE)}static createEye(){return new d(o.MYAKU_RED,l.whiteAngle,l.irisAngle)}}class y{shapeParams;styleParams;constructor(e,t){this.shapeParams=e,this.styleParams=t}drawPath(e){e.beginPath(),e.ellipse(this.shapeParams.coord.x,this.shapeParams.coord.y,this.shapeParams.radiusX,this.shapeParams.radiusY,this.shapeParams.bodyRadian,0,2*Math.PI),e.fillStyle=this.styleParams.bodyColor,e.fill()}inRange(e){let t=e.x-this.shapeParams.coord.x,a=e.y-this.shapeParams.coord.y,s=Math.sin(this.shapeParams.bodyRadian),r=Math.cos(this.shapeParams.bodyRadian);return Math.pow(r*t+s*a,2)/Math.pow(this.shapeParams.radiusX,2)+Math.pow(-s*t+r*a,2)/Math.pow(this.shapeParams.radiusY,2)<=o.SHAPE_SENSITIVITY}}class m{shapeParams;styleParams;baseShape;constructor(e,t){this.shapeParams=e,this.styleParams=t,this.baseShape=new y(this.shapeParams,this.styleParams)}drawPath(e){this.baseShape.drawPath(e);let t=this.shapeParams.radiusX/50,a=this.shapeParams.radiusY/50,s=this.shapeParams.radiusX<this.shapeParams.radiusY?t:a,r=this.shapeParams.coord.findByHypAngle(18*t,this.styleParams.whiteAngle),n=24*s;new y(new u(r,n,n,0),new d(o.MYAKU_WHITE)).drawPath(e);let i=r.findByHypAngle(10*s,this.styleParams.irisAngle),h=10*s;new y(new u(i,h,h,0),d.createBlue()).drawPath(e)}inRange(e){return this.baseShape.inRange(e)}movePosition(e){this.shapeParams.coord=e}}class g{shapeParams;baseShape;constructor(e,t){this.shapeParams=e,this.baseShape=new y(this.shapeParams,t)}drawPath(e){this.baseShape.drawPath(e)}inRange(e){return this.baseShape.inRange(e)}movePosition(e){this.shapeParams.coord=e}}window.addEventListener("load",()=>{let e=new a(document),r=new h(e);e.canvas.onpointerdown=t=>{r.releaseMyaku(),r.seekMyaku(c.createByMouse(t,e.canvas),e=>{r.eraseMyaku(e),r.putOnMyaku(e),r.grabMyaku(e)}),r.redraw()},e.canvas.oncontextmenu=t=>{t.preventDefault(),r.seekMyaku(c.createByMouse(t,e.canvas),e=>{r.eraseMyaku(e)}),r.redraw()},e.canvas.onpointerup=()=>r.releaseMyaku(),e.canvas.onpointerout=()=>r.releaseMyaku(),e.canvas.onpointermove=t=>{r.moveMyaku(c.createByMouse(t,e.canvas)),r.redraw()},e.redArc.onclick=()=>{let t=u.forArc(e.canvas.width,e.canvas.height);r.putOnMyaku(new g(t,d.createRed())),r.redraw()},e.redEllipse.onclick=()=>{let t=u.forEllipse(e.canvas.width,e.canvas.height);r.putOnMyaku(new g(t,d.createRed())),r.redraw()},e.eyeArc.onclick=()=>{let t=u.forArc(e.canvas.width,e.canvas.height);r.putOnMyaku(new m(t,d.createEye())),r.redraw()},e.blueArc.onclick=()=>{let t=u.forArc(e.canvas.width,e.canvas.height);r.putOnMyaku(new g(t,d.createBlue())),r.redraw()},e.blueEllipse.onclick=()=>{let t=u.forEllipse(e.canvas.width,e.canvas.height);r.putOnMyaku(new g(t,d.createBlue())),r.redraw()},e.eyeEllipse.onclick=()=>{let t=u.forEllipse(e.canvas.width,e.canvas.height);r.putOnMyaku(new m(t,d.createEye())),r.redraw()};let n=new t(e);n.setOptions(),e.size.onchange=e=>{n.onChange(e),r.redraw()};let i=new s(e);e.download.onclick=()=>i.onClick(),e.clear.onclick=()=>r.changeFabric();let o=[];document.onkeydown=e=>{let t="4b2fb724c6e49b";o.push(e.key),o.join("")===t&&(r.putOnMyaku(new g(new u(new c(50,50),40,40),new d("rgb(115, 103, 7)"))),r.putOnMyaku(new g(new u(new c(90,50),40,40),new d("rgb(34, 36, 38)"))),r.redraw()),t.length<o.length&&o.splice(0)}});