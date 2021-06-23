var canvas;
var music;
var surface1, surface2, surface3, surface4
var box, edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite (100, 500, 200, 20)
    surface1.shapeColor ="blue"

    surface2 = createSprite (300, 500, 200, 20)
    surface2.shapeColor ="orange";

    surface3 = createSprite (500, 500, 200, 20)
    surface3.shapeColor ="red";

    surface4 = createSprite (700, 500, 200, 20)
    surface4.shapeColor ="green";

    box=createSprite(random(20, 750))
    box.shapeColor="white"
    box.velocityX = 3;
    box.velocityY = 3;




function draw(){
    edges = createEdgeSprites();
    box.bounceOff(edges);

    if(surface1.isTouching(box) && box.bounceOff(surface1)){
        box.shapeColor ="blue"
    }

    if(surface2.isTouching(box) && box.bounceOff(surface2)){
        box.shapeColor ="orange"
    }

    if(surface3.isTouching(box) && box.bounceOff(surface3)){
        box.shapeColor ="red"
    }

    if(surface4.isTouching(box) && box.bounceOff(surface4)){
        box.shapeColor ="green"
    }

}

    box.bounceOff(surface1);
    box.bounceOff(surface2);
    box.bounceOff(surface3);
    box.bounceOff(surface4);

    createEdgeSprites();

    drawSprites();

}





   

