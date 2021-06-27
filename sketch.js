var bullet,wall,weight,speed,thickness,lwall,lbullet;


function setup(){
  createCanvas(1600,400);
  
 bullet =  car1 = createSprite(50,150,75,15);
  
 thickness = Math.round(random(22,83));
  wall = createSprite(1200,200,thickness,height/2);
  speed = Math.round(random(233,321));
  weight = Math.round(random(30,52));
  
}

function draw(){
  background("white");
  bullet.velocityX=speed/10;
  if (hasCollided(bullet,wall)){
    
    bullet.velocityX=0;
    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
        
        }
    
   if (damage>10){
     wall.shapeColor=color(255,0,0);
    
   }
  
   if (damage<10){
     wall.shapeColor=color(0,255,0);
    
   }
  drawSprites();
}


function hasCollided(bullet,wall){
  
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
  
}



