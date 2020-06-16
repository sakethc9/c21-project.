var bullet ;

var speed, weight;

var  wall , thickness ;



function setup() {
  createCanvas(1600,400);
  
  speed = random(203,312);
  weight = random(27,55);
  thickness = random(15,78);
  
  
  bullet = createSprite(50, 200, 60, 10);
  bullet.velocityX = speed ;

  

  wall = createSprite(1500, 200, thickness, height/2);
}

function draw() {
  background(200,200);  

 if(hasCollided(bullet,wall)){

bullet.velocityX = 0;

var damage = 0.5 * weight* speed * speed/(thickness * thickness * thickness)


if(damage>10){

  wall.shapeColor = color(255,0,0);

}

if(damage<10){

  wall.shapeColor = color(0,255,0);

}
 }



  drawSprites();


}

function hasCollided(lbullet ,lwall){

bulletRightEdge =  lbullet.x + lbullet.width ; 
wallLeftEdge = lwall.x;
if(bulletRightEdge>=wallLeftEdge){

return true

}

return false;

}