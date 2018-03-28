var canvas=document.getElementById("myCanvas");
var pen=canvas.getContext('2d');


var h    = canvas.height=window.innerHeight;
var w    = canvas.width =window.innerWidth;
var n    = 25;
var rMax = 30;
var drMax= 2 ;
var range= 50;
var vMax = 2;


var x  = [n];
var y  = [n];
var r  = [n];
var vx = [n];
var vy = [n];
var dr = [n];
var col= [n];

var m ={x:undefined,y:undefined};

//Adding event listners
//element.addEventListner ("type", func(event));
window.addEventListener("mousemove",function(event){
		m.x=event.x; 
		m.y=event.y;
		}
	);



function drawCircleWrtM(i){
   	pen.beginPath();//start drawing
   	pen.arc(x[i] ,y[i],r[i],0,2*Math.PI);
    pen.fillStyle=col[i];
    pen.fill();
    console.log(x[i],y[i]);
}

function init(i){
    x[i]=m.x;
    y[i]=m.y;
    vx[i]= vMax*(1-2*Math.random());
    vy[i]= vMax*(1-2*Math.random());
    r[i]= rMax*Math.random();
    dr[i]= drMax*(1-2*Math.random()); 
    switch(Math.floor(5*Math.random())){
    	case 0 :col[i]= "#9C9"; break;
    	case 1 :col[i]= "#555"; break;
    	case 2 :col[i]= "#993"; break;
    	case 3 :col[i]= "#989"; break;
    	default:col[i]= "#667"; 
    };	
    }

function start(){
    for(var i=0; i<n;i++)
      init(i);  
}


function update(){
  
  pen.clearRect(0,0,w,h);
  for(var i=0; i<n;i++){
    
    x[i]+=vx[i];
    y[i]+=vy[i];
    r[i]+=dr[i];
    if((x[i] > w+r[i]  || x[i]<-r[i]) || (y[i]> h+r[i]  || y[i]<-r[i]) || r[i]<0.5)
       init(i); 

    if(r[i]>rMax) dr[i]*=(-1);

    drawCircleWrtM(i);
  }
  	window.requestAnimationFrame(update);
}


start();
update();
