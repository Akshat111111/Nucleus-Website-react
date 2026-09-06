/* Nucleus Systems home globe */
window._initHomeGlobe=function(){
  var canvas=document.getElementById('homeGlobeCanvas');
  if(!canvas||canvas._globeRunning)return;
  canvas._globeRunning=true;
  setTimeout(function(){
  var ctx=canvas.getContext('2d');
  var W,H,cx,cy,R,rot=0;

  var continents=[
    [[-6,36],[12,37],[25,31],[33,31],[43,11],[50,12],[42,-12],[36,-18],[26,-35],[18,-35],[12,-25],[8,2],[-8,5],[-17,15],[-17,28],[-6,36]],
    [[-10,36],[3,43],[10,44],[18,46],[28,46],[38,42],[42,41],[36,38],[28,41],[26,45],[28,56],[22,60],[15,69],[5,62],[-5,58],[-10,52],[-6,50],[-5,44],[-10,36]],
    [[26,38],[38,38],[42,38],[55,24],[57,20],[60,22],[70,22],[78,8],[80,12],[92,20],[100,5],[105,2],[110,2],[118,4],[120,15],[125,20],[130,32],[140,36],[145,42],[148,52],[135,60],[100,60],[80,68],[60,70],[45,70],[35,65],[28,60],[26,50],[26,38]],
    [[-168,72],[-140,60],[-130,56],[-130,52],[-125,46],[-120,35],[-115,30],[-108,22],[-90,15],[-84,10],[-77,8],[-75,10],[-68,14],[-65,18],[-75,20],[-80,25],[-80,35],[-75,45],[-70,47],[-65,45],[-60,48],[-70,60],[-80,62],[-90,65],[-100,72],[-120,72],[-140,72],[-168,72]],
    [[-73,12],[-62,10],[-60,5],[-50,-1],[-35,-8],[-35,-12],[-40,-20],[-44,-23],[-48,-28],[-52,-33],[-65,-55],[-75,-50],[-75,-40],[-72,-30],[-70,-18],[-80,-5],[-78,0],[-76,8],[-73,12]],
    [[114,-22],[115,-34],[120,-35],[130,-34],[139,-36],[145,-38],[148,-38],[150,-25],[150,-20],[145,-15],[138,-13],[132,-12],[128,-14],[121,-18],[114,-22]],
    [[-45,60],[-20,60],[-16,70],[-20,76],[-30,82],[-50,82],[-56,76],[-56,68],[-45,60]],
  ];

  var nodes=[
    {lat:-26.2,lon:28.0,hq:true},
    {lat:-1.3,lon:36.8},{lat:6.5,lon:3.4},{lat:-33.9,lon:18.4},{lat:5.6,lon:-0.2},
    {lat:9.0,lon:38.7},{lat:25.2,lon:55.3},{lat:24.7,lon:46.7},{lat:26.2,lon:50.6},
    {lat:51.5,lon:-0.1},{lat:52.4,lon:4.9},{lat:50.1,lon:8.7},{lat:48.9,lon:2.3},
    {lat:1.3,lon:103.8},{lat:19.1,lon:72.9},{lat:35.7,lon:139.7},{lat:22.3,lon:114.2},
    {lat:40.7,lon:-74.0},{lat:37.8,lon:-122.4},{lat:-23.5,lon:-46.6},{lat:-33.9,lon:151.2},
  ];

  var backboneLinks=[[9,10],[9,11],[10,11],[9,6],[11,6],[6,7],[7,8],[6,13],[13,14],[13,16],[15,16],[17,18],[17,19],[9,17],[13,20],[1,6],[2,9],[5,6]];
  var arcs=[];

  function buildArcs(){
    arcs=[];
    for(var i=1;i<nodes.length;i++) arcs.push({from:0,to:i,t:Math.random(),speed:0.004+Math.random()*0.003,hq:true});
    backboneLinks.forEach(function(l){arcs.push({from:l[0],to:l[1],t:Math.random(),speed:0.003+Math.random()*0.002,hq:false});});
  }

  function toRad(d){return d*Math.PI/180;}
  function project(lat,lon){
    var phi=toRad(90-lat),theta=toRad(lon)+rot;
    var x=-R*Math.sin(phi)*Math.cos(theta);
    var y=R*Math.cos(phi);
    var z=R*Math.sin(phi)*Math.sin(theta);
    return{x:cx+x,y:cy-y,z:z,vis:z>-R*0.1};
  }

  function drawGlobe(){
    var grd=ctx.createRadialGradient(cx-R*.25,cy-R*.25,R*.05,cx,cy,R);
    grd.addColorStop(0,'#EEF4FF');
    grd.addColorStop(0.6,'#E8F0FE');
    grd.addColorStop(1,'#D8E6FA');
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.fillStyle=grd;ctx.fill();
    // Soft border
    var rim=ctx.createRadialGradient(cx,cy,R*0.88,cx,cy,R*1.02);
    rim.addColorStop(0,'rgba(11,80,200,0)');
    rim.addColorStop(1,'rgba(11,80,200,0.12)');
    ctx.beginPath();ctx.arc(cx,cy,R,0,Math.PI*2);ctx.fillStyle=rim;ctx.fill();
    // Grid
    ctx.strokeStyle='rgba(11,80,200,0.06)';ctx.lineWidth=0.6;
    [-60,-30,0,30,60].forEach(function(lat){
      var phi=toRad(90-lat),ry=R*Math.cos(phi),rx=R*Math.sin(phi);
      if(rx<2)return;
      ctx.beginPath();ctx.ellipse(cx,cy-R*Math.cos(phi),rx,Math.abs(ry)*0.12,0,0,Math.PI*2);ctx.stroke();
    });
    [0,30,60,90,120,150].forEach(function(lon){
      var t=toRad(lon)+rot;
      ctx.beginPath();ctx.ellipse(cx,cy,R*Math.abs(Math.sin(t))||1,R,0,0,Math.PI*2);
      ctx.strokeStyle='rgba(11,80,200,0.04)';ctx.stroke();
    });
  }

  function drawContinents(){
    continents.forEach(function(poly){
      var pts=poly.map(function(p){return project(p[1],p[0]);});
      ctx.beginPath();var s=false;
      pts.forEach(function(p){if(p.vis){if(!s){ctx.moveTo(p.x,p.y);s=true;}else ctx.lineTo(p.x,p.y);}else s=false;});
      ctx.closePath();ctx.fillStyle='rgba(11,80,200,0.09)';ctx.fill();
      ctx.beginPath();s=false;
      pts.forEach(function(p){if(p.vis){if(!s){ctx.moveTo(p.x,p.y);s=true;}else ctx.lineTo(p.x,p.y);}else s=false;});
      ctx.strokeStyle='rgba(11,80,200,0.22)';ctx.lineWidth=0.8;ctx.stroke();
    });
  }

  function gcPt(la1,lo1,la2,lo2,f){
    var p1=[toRad(la1),toRad(lo1)],p2=[toRad(la2),toRad(lo2)];
    var d=2*Math.asin(Math.sqrt(Math.pow(Math.sin((p2[0]-p1[0])/2),2)+Math.cos(p1[0])*Math.cos(p2[0])*Math.pow(Math.sin((p2[1]-p1[1])/2),2)));
    if(d<0.001)return{lat:la1,lon:lo1};
    var A=Math.sin((1-f)*d)/Math.sin(d),B=Math.sin(f*d)/Math.sin(d);
    var x=A*Math.cos(p1[0])*Math.cos(p1[1])+B*Math.cos(p2[0])*Math.cos(p2[1]);
    var y=A*Math.cos(p1[0])*Math.sin(p1[1])+B*Math.cos(p2[0])*Math.sin(p2[1]);
    var z=A*Math.sin(p1[0])+B*Math.sin(p2[0]);
    return{lat:Math.atan2(z,Math.sqrt(x*x+y*y))*180/Math.PI,lon:Math.atan2(y,x)*180/Math.PI};
  }

  function drawArcs(){
    arcs.forEach(function(arc){
      var n1=nodes[arc.from],n2=nodes[arc.to];
      var steps=36,pts=[];
      for(var s=0;s<=steps;s++){var gp=gcPt(n1.lat,n1.lon,n2.lat,n2.lon,s/steps);pts.push(project(gp.lat,gp.lon));}
      if(!arc.hq&&pts.some(function(p){return!p.vis;})){arc.t=(arc.t+arc.speed)%1;return;}
      var seg=false;ctx.beginPath();
      pts.forEach(function(p){if(p.vis){if(!seg){ctx.moveTo(p.x,p.y);seg=true;}else ctx.lineTo(p.x,p.y);}else seg=false;});
      ctx.strokeStyle=arc.hq?'rgba(244,128,30,0.15)':'rgba(11,80,200,0.13)';ctx.lineWidth=0.7;ctx.stroke();
      var head=Math.min(steps,Math.floor(arc.t*steps)),tail=Math.max(0,head-10);
      if(head>0){
        var vr=[];for(var j=tail;j<=head;j++){if(pts[j].vis)vr.push(pts[j]);else vr=[];}
        if(vr.length>1){ctx.beginPath();ctx.moveTo(vr[0].x,vr[0].y);for(var k=1;k<vr.length;k++)ctx.lineTo(vr[k].x,vr[k].y);ctx.strokeStyle=arc.hq?'rgba(244,128,30,0.85)':'rgba(11,80,200,0.75)';ctx.lineWidth=arc.hq?1.8:1.2;ctx.stroke();}
        var hp=pts[head];
        if(hp.vis){
          var r=arc.hq?3:2;
          ctx.beginPath();ctx.arc(hp.x,hp.y,r,0,Math.PI*2);ctx.fillStyle=arc.hq?'#F4801E':'#2563EB';ctx.fill();
          var gw=ctx.createRadialGradient(hp.x,hp.y,0,hp.x,hp.y,r*4);
          gw.addColorStop(0,arc.hq?'rgba(244,128,30,0.4)':'rgba(37,99,235,0.3)');
          gw.addColorStop(1,'rgba(0,0,0,0)');
          ctx.beginPath();ctx.arc(hp.x,hp.y,r*4,0,Math.PI*2);ctx.fillStyle=gw;ctx.fill();
        }
      }
      arc.t=(arc.t+arc.speed)%1;
    });
  }

  function drawNodes(){
    nodes.forEach(function(node){
      var p=project(node.lat,node.lon);if(!p.vis)return;
      var isHQ=node.hq,r=isHQ?5:2.5;
      ctx.beginPath();ctx.arc(p.x,p.y,r+4,0,Math.PI*2);
      ctx.strokeStyle=isHQ?'rgba(244,128,30,0.4)':'rgba(37,99,235,0.25)';ctx.lineWidth=1;ctx.stroke();
      ctx.beginPath();ctx.arc(p.x,p.y,r,0,Math.PI*2);
      ctx.fillStyle=isHQ?'#F4801E':'#2563EB';ctx.fill();
      if(isHQ){
        ctx.font='bold 11px "Space Grotesk",sans-serif';
        ctx.fillStyle='rgba(10,25,47,0.85)';
        ctx.fillText('Nucleus Systems',p.x+9,p.y+4);
      }
    });
  }

  function resize(){
    var wrap=canvas.parentElement;
    W=wrap.offsetWidth||460;H=W;
    canvas.width=W;canvas.height=H;
    cx=W/2;cy=H/2;R=W*0.43;
  }

  function frame(){
    ctx.clearRect(0,0,W,H);
    drawGlobe();drawContinents();drawArcs();drawNodes();
    rot+=0.003;requestAnimationFrame(frame);
  }

  resize();buildArcs();frame();
  window.addEventListener('resize',function(){if(canvas._globeRunning)resize();});
  },60);
};
// Auto-init since home is the default active view
setTimeout(function(){if(window._initHomeGlobe)window._initHomeGlobe();},120);


