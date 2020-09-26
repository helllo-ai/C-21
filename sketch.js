var bullet ,wall
var speed,wieght
var thickness


function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  wieght=random(30,52)
  thickness=random(22,83)
  bullet =createSprite(50, 100, 20, 20);
  bullet .velocityX=speed;
  bullet.shapeColor=("white")
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  
}

function draw() {
  hasCollided(bullet,wall)
  /*if (wall.x-car.x<(car.width+wall.width)/2)
  {
car.velocityX=0;
var deformation=0.5*wieght*speed*speed/thickness*thickness*thickness;
if(deformation>180)
{
car.shapeColor=color(225,0,0);
}
if(deformation<180 && deformation>100)
{
  car.shapeColor=color(230,230,0)
}
if(deformation< 100)
{
  car.shapeColor=color(0,255,0)
}
  }*/
  if(hasCollided(bullet,wall))
  {
    bulet.velocityX=0;
    var damage =0.5*wieght*speed*speed/(thickness*thickness*thickness);
    if (damage>10)
      {
wall.shapeColor=color(255,0,0)
      }
      ig (damage<10)
      {
        wall.shapeColor=color(0,255,0);

      }
  }
  background(255,255,255);  
  drawSprites();
}
function hasCollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}