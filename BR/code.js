var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["38e745a4-ecb9-4b9a-a465-7a92f2d1778e","e58e888b-344b-413e-a978-92a0de417967"],"propsByKey":{"38e745a4-ecb9-4b9a-a465-7a92f2d1778e":{"name":"sam.png_1","sourceUrl":"assets/v3/animations/N01Qq-EkElFyAehVyTS-1zkp1BYZKMhakEqChX0iBiQ/38e745a4-ecb9-4b9a-a465-7a92f2d1778e.png","frameSize":{"x":13,"y":13},"frameCount":1,"looping":true,"frameDelay":4,"version":"SKyiI0Dy2Srws6Eo8Z7bZgBYQ3sk0ydc","loadedFromSource":true,"saved":true,"sourceSize":{"x":13,"y":13},"rootRelativePath":"assets/v3/animations/N01Qq-EkElFyAehVyTS-1zkp1BYZKMhakEqChX0iBiQ/38e745a4-ecb9-4b9a-a465-7a92f2d1778e.png"},"e58e888b-344b-413e-a978-92a0de417967":{"name":"car.png_1","sourceUrl":null,"frameSize":{"x":10,"y":10},"frameCount":1,"looping":true,"frameDelay":12,"version":"sywmXasLMreM71LUs5KPKRDOG85hca43","loadedFromSource":true,"saved":true,"sourceSize":{"x":10,"y":10},"rootRelativePath":"assets/e58e888b-344b-413e-a978-92a0de417967.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
playSound("assets/94726_growing_on_me.mp3", true);

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.setAnimation("sam.png_1");
  
  
  car1 = createSprite(100,130,10,10);
  car1.setAnimation("car.png_1");
  car2 = createSprite(215,130,10,10);
  car2.setAnimation("car.png_1");
  car3 = createSprite(165,250,10,10);
  car3.setAnimation("car.png_1");
  car4 = createSprite(270,250,10,10);
  car4.setAnimation("car.png_1");
  
 
//adicione velocidade para fazer o carro se mover.(cabo)
car1.velocityY = 8;
car2.velocityY = -8;
car3.velocityY =  8;
car4.velocityY = -8;
createEdgeSprites();
function draw() {

  background("#B6B6FE");
  text("Mortes: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,58,140);
  car1.bounceOff(boundary1);
car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
car4.bounceOff(boundary2);
  sam.bounceOff(boundary1);
sam.bounceOff(boundary2);
  if (keyDown("LEFT_ARROW")) {
    sam.x = sam.x + -5;
  }
    if (keyDown("RIGHT_ARROW")) {
    sam.x = sam.x + 5;
  }
    if (keyDown("UP_ARROW")) {
    sam.y = sam.y + -5;
  }
    if (keyDown("DOWN_ARROW")) {
    sam.y = sam.y + 5;
  }
if (sam.isTouching(car1)|| sam.isTouching(car2) || sam.isTouching(car3) || sam.isTouching(car4)) {
  sam.x = 20;
  sam.y = 190;
  life = life + 1;
}
// crie a função rebater, para fazer o carro rebater nos limites(cabo)
//Adicione a condição para fazer Sam se mover para a esquerda e para a direita(cabo)
//Adicione a condição para reduzir a vida de Sam quando ele encostar no carro(cabo)
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
