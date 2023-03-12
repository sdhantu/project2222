var knife, knifeImage;
var ombie, ombieImage;
var background, backgroundImage;
var player, playerImage;
var player_one, player_oneImage;

function preload(){

 backgroundImage = loadImage ("background.jpg");
 knifeImage = loadImage("knife.png");
 ombieImage = loadImage("ombie.png");
 playerImage = loadImage("player.png");
 player_oneImage = loadImage("player_one.png");
}

function setup(){
  createCanvas(1500,800)

  

 //create player sprite

 player = createSprite(1100,700);
 player.addImage(playerImage);
 player.scale = 0.9;
 //player.debug = true;
}


function draw(){
  background(backgroundImage);

  player.x = mouseX
  player.y - mouseY

 
  spawnOmbie()

drawSprites()
}
function spawnOmbie(){
  if(World.frameCount % 60 === 0){
    ombie = createSprite(600, 630);
    ombie.addImage(ombieImage);
    ombie.scale = 0.5;
    ombie.x = random(10, 1000)
    ombie.velocityY = 3
  }
}