var hero, enemy, scene, bullet;

var heroImage, sceneImage, bulletImage, enemyImage

var score = 0;



function preload(){


sceneImage = loadImage("Volcano Background.jpg");
enemyImage = loadImage("Enemy.png")
heroImage = loadImage("Hero.png")
bulletImage = loadImage("bullet.png")

}





function setup() {
createCanvas(800, 800);

//ground = createSprite(100,700,1400,10);

scene = createSprite(350,300,1400,800);
scene.addImage(sceneImage);
scene.scale = 1;

hero = createSprite(100,500,10,10);
hero.addImage(heroImage);
hero.scale = 0.3;
//hero.setCollider("circle", 0,0,100,200);

enemy = createSprite(600,500,20,20)
enemy.addImage(enemyImage);
enemy.scale = 0.7

//enemyGroup = createGroup;


//score = 0;


  
}

function draw() {
  background(0);

  //background.velocityX = -3;


//hero.velocityY = hero.velocityY + 0.8;

 //hero.collide(ground);


drawSprites();
  
}

//function spawnEnemies(){

  //if(frameCount % 100 === 0) {
    //var enemy = createSprite(600,350,20,20)
    //enemy.addImage(enemyImage);
    //enemy.velocityX = -6;
    
    //enemy.lifetime = 160;
    //enemyGroup.add(enemy);

 //}
//}

//function spawnBullets(){

  //if(keyDown("space")){
    //var bullet = createSprite(100,200,20,20);
    //bullet.addImage(bulletImage);
    //bullet.velocityX = 7;
  //}

  //if(bullet.isTouching(enemy)){

    //bullet.destroyEach();
    //enemy.destroy();
  //}
//}