var canvas=document.getElementById("myCanvas");
var pen=canvas.getContext('2d');
var nmax= 600; 

var n=nmax;
var h=canvas.height=window.innerHeight;
var w=canvas.width=window.innerWidth;
var rmin=10;    //min circle rad possible
var rmax=80;    //max circle rad possible
var v=3;        //maximum moving velocity
var mc_dis=50;  //mouse effect range
var rate=1.5;   //radius increasing/decreasing speed

//of circles
var x =[n];
var vx=[n];
var vy=[n];
var y =[n];
var c =[n];
var r =[n];

var m ={x:undefined,y:undefined};


//Adding event listners
//element.addEventListner ("type", func(event));
window.addEventListener("mousemove",function(event){
		m.x=event.x; 
		m.y=event.y;//use console.log ot see details
		}
	);



function drawCircle(X,Y,Color,R){
   	pen.beginPath();//start drawing
   	pen.arc(X,Y,R,0,2*Math.PI);
   	pen.fillStyle=Color;
   	pen.fill();
   	//pen.stroke();add stroke 
}


function start(){
    n=Math.floor(nmax * (w/1260));
  	for(var i=0; i<n;i++){
    	x[i] = Math.random()*w;
    	y[i] = Math.random()*h;
    	vx[i]= Math.random()*v;
    	vy[i]= Math.random()*v;
    	r[i] = rmin;
    	switch(Math.floor(5*Math.random())){
    		case 0: c[i]= "#9C9"; break;
    		case 1: c[i]= "#555"; break;
    		case 2: c[i]= "#993"; break;
    		case 3: c[i]= "#989"; break;
    		case 4: c[i]= "#667"; 
    	} 
   }
}


function update(){
 
       pen.clearRect(0,0,w,h);
 	for(var i=0; i<n;i++){
 		if(x[i]>w || x[i]<0)
 			vx[i]*=(-1);
 		if(y[i]>h || y[i]<0)
 			vy[i]*=(-1);
 		if(x[i] -m.x < mc_dis && x[i] -m.x >-mc_dis && y[i] -m.y < mc_dis && y[i] -m.y >-mc_dis)
 			r[i]=(r[i]>rmax)?rmax:r[i]+rate;
 		else
 			r[i]=(r[i]>rmin)?r[i]-rate:rmin;
 		 
        drawCircle(x[i]+=vx[i],y[i]+=vy[i],c[i],r[i]);
    }
	window.requestAnimationFrame(update);
}


start();
update();


