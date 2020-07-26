const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

 

var engine, world;
var particle=[];
var plinco=[];
var divisions=[];
var divisionsHeight=300;
var gameState;
var play=1;
var end=0;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  for (var i = 75; i <=width; i=i+50) { plinco.push(new Plinco(i,75)); }
  //1st phase
  // plinco1=new Plinco(40,75,10,10)
  
  // plinco2=new Plinco(90,75,10,10)
  // plinco3=new Plinco(140,75,10,10)
  // plinco4=new Plinco(190,75,10,10)
  // plinco5=new Plinco(240,75,10,10)
  // plinco6=new Plinco(290,75,10,10)
  // plinco7=new Plinco(340,75,10,10)
  // plinco8=new Plinco(390,75,10,10)
  // plinco9=new Plinco(440,75,10,10)
  // //2nd phase
  // plinco11=new Plinco(15,175,10,10)
  // plinco12=new Plinco(65,175,10,10)
  // plinco13=new Plinco(115,175,10,10)
  // plinco14=new Plinco(165,175,10,10)
  // plinco15=new Plinco(215,175,10,10)
  // plinco16=new Plinco(265,175,10,10)
  // plinco17=new Plinco(315,175,10,10)
  // plinco18=new Plinco(365,175,10,10)
  // plinco19=new Plinco(415,175,10,10)
  // plinco10=new Plinco(465,175,10,10)
  // //3rd phase
  // plinco20=new Plinco(40,275,10,10)
  // plinco21=new Plinco(90,275,10,10)
  // plinco22=new Plinco(140,275,10,10)
  // plinco23=new Plinco(190,275,10,10)
  // plinco24=new Plinco(240,275,10,10)
  // plinco25=new Plinco(290,275,10,10)
  // plinco26=new Plinco(340,275,10,10)
  // plinco27=new Plinco(390,275,10,10)
  // plinco28=new Plinco(440,275,10,10)
  // //4th phase
  // plinco29=new Plinco(15,375,10,10)
  // plinco30=new Plinco(65,375,10,10)
  // plinco31=new Plinco(115,375,10,10)
  // plinco32=new Plinco(165,375,10,10)
  // plinco33=new Plinco(215,375,10,10)
  // plinco34=new Plinco(265,375,10,10)
  // plinco35=new Plinco(315,375,10,10)
  // plinco36=new Plinco(365,375,10,10)
  // plinco37=new Plinco(415,375,10,10)
  // plinco38=new Plinco(465,375,10,10)
  //Division
  division1=new Divisions(0,600,10,400)
  division2=new Divisions(80,600,10,400)
  division3=new Divisions(160,600,10,400)
  division4=new Divisions(240,600,10,400)
  division5=new Divisions(320,600,10,400)
  division6=new Divisions(400,600,10,400)
  division7=new Divisions(480,600,10,400)
  division8=new Divisions(0,200,10,400)
  division9=new Divisions(480,200,10,400)
  ground=new Ground(240,800,480,10)
//1st 
particle1=new Particles(40,0,10,10)
particle2=new Particles(40,0,10,10)
particle3=new Particles(40,0,10,10)
particle4=new Particles(40,0,10,10)
particle5=new Particles(40,0,10,10)
particle6=new Particles(40,0,10,10)
particle7=new Particles(40,0,10,10)
particle8=new Particles(40,0,10,10)
particle9=new Particles(40,0,10,10)
particle10=new Particles(40,0,10,10)
//2nd
particle11=new Particles(120,0,10,10)
particle12=new Particles(120,0,10,10)
particle13=new Particles(120,0,10,10)
particle14=new Particles(120,0,10,10)
particle15=new Particles(120,0,10,10)
particle16=new Particles(120,0,10,10)
particle17=new Particles(120,0,10,10)
particle18=new Particles(120,0,10,10)
particle19=new Particles(120,0,10,10)
particle20=new Particles(120,0,10,10)
//3rd
particle21=new Particles(200,0,10,10)
particle22=new Particles(200,0,10,10)
particle23=new Particles(200,0,10,10)
particle24=new Particles(200,0,10,10)
particle25=new Particles(200,0,10,10)
particle26=new Particles(200,0,10,10)
particle27=new Particles(200,0,10,10)
particle28=new Particles(200,0,10,10)
particle29=new Particles(200,0,10,10)
particle30=new Particles(200,0,10,10)
//4th
particle31=new Particles(280,0,10,10)
particle32=new Particles(280,0,10,10)
particle33=new Particles(280,0,10,10)
particle34=new Particles(280,0,10,10)
particle35=new Particles(280,0,10,10)
particle36=new Particles(280,0,10,10)
particle37=new Particles(280,0,10,10)
particle38=new Particles(280,0,10,10)
particle39=new Particles(280,0,10,10)
particle40=new Particles(280,0,10,10)
//5th
particle41=new Particles(360,0,10,10)
particle42=new Particles(360,0,10,10)
particle43=new Particles(360,0,10,10)
particle44=new Particles(360,0,10,10)
particle45=new Particles(360,0,10,10)
particle46=new Particles(360,0,10,10)
particle47=new Particles(360,0,10,10)
particle48=new Particles(360,0,10,10)
particle49=new Particles(360,0,10,10)
particle50=new Particles(360,0,10,10)
//6th
particle51=new Particles(440,0,10,10)
particle52=new Particles(440,0,10,10)
particle53=new Particles(440,0,10,10)
particle54=new Particles(440,0,10,10)
particle55=new Particles(440,0,10,10)
particle56=new Particles(440,0,10,10)
particle57=new Particles(440,0,10,10)
particle58=new Particles(440,0,10,10)
particle59=new Particles(440,0,10,10)
particle60=new Particles(440,0,10,10)
}
 function draw() {
  Engine.update(engine);  
  background("blue"); 
  text (mouseX+","+mouseY,200,20);
  // if(particle!=null){
  //   particle.display();
  //   if (particle.body.position.y>760){
      
  //   }
  // }
  for (var i = 0; i < plinco.length; i++) { plinco[i].display(); }
  // plinco1.display();
  // plinco2.display();
  
  // plinco3.display();
  // plinco4.display();
  
  // plinco5.display();
  // plinco6.display();

  // plinco7.display();
  // plinco8.display();

  // plinco9.display();
  // plinco10.display();

  // plinco11.display();
  // plinco12.display();

  // plinco13.display();
  // plinco14.display();

  // plinco15.display();
  // plinco16.display();

  // plinco17.display();
  // plinco18.display();

  // plinco19.display();
  // plinco20.display();

  // plinco21.display();
  // plinco22.display();

  // plinco23.display();
  // plinco24.display();

  // plinco25.display();
  // plinco26.display();

  // plinco27.display();
  // plinco28.display();

  // plinco29.display();
  // plinco30.display();
  
  // plinco31.display();
  // plinco32.display();

  // plinco33.display();
  // plinco34.display();

  // plinco35.display();
  // plinco36.display();

  // plinco37.display();
  // plinco38.display();

  fill("red");
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();
  division7.display();

  particle1.display();
  particle2.display();
  particle3.display();
  particle4.display();
  particle5.display();
  particle6.display();
  particle7.display();
  particle8.display();
  particle9.display();
  particle10.display();
  particle11.display();
  particle12.display();
  particle13.display();
  particle14.display();
  particle15.display();
  particle16.display();
  particle17.display();
  particle18.display();
  particle19.display();
  particle20.display();
  particle21.display();
  particle22.display();
  particle23.display();
  particle24.display();
  particle25.display();
  particle26.display();
  particle27.display();
  particle28.display();
  particle29.display();
  particle30.display();
  particle31.display();
  particle32.display();
  particle33.display();
  particle34.display();
  particle35.display();
  particle36.display();
  particle37.display();
  particle38.display();
  particle39.display();
  particle40.display();
  particle41.display();
  particle42.display();
  particle43.display();
  particle44.display();
  particle45.display();
  particle46.display();
  particle47.display();
  particle48.display();
  particle49.display();
  particle50.display();
  particle51.display();
  particle52.display();
  particle53.display();
  particle54.display();
  particle55.display();
  particle56.display();
  particle57.display();
  particle58.display();
  particle59.display();
  particle60.display();
  ground.display();
  fill("blue");
  division8.display();
  division9.display();
  drawSprites();
}
function mousePressed(){
  if(gameState!=="end"){
    count++;
    particle=new Particles(mouseX,10,10,10)
  }
}