var y = [];
var steps;


var listaImagenes = [];

var listaSonidos = [];


var boton;

//imagenes
var imagen0;
var imagen1;
var imagen2;
var imagen3;
var imagen4;
var imagen5;

//sonidos
var sonido0;
var sonido1;
var sonido2;
var sonido3;
var sonido4;
var sonido5;


function preload()
{
  boton = loadImage("boton.png");
  
  //imagenes
  imagen0 = loadImage("imagen0.jpg");
  imagen1 = loadImage("imagen1.jpg");
  imagen2 = loadImage("imagen2.jpg");
  imagen3 = loadImage("imagen3.jpg");
  imagen4 = loadImage("imagen4.jpg");
  imagen5 = loadImage("imagen5.jpg");
  
  //sonidos
  sonido0 = loadSound("sonido0.mp3");
  sonido1 = loadSound("sonido1.mp3");
  sonido2 = loadSound("sonido2.mp3");
  sonido3 = loadSound("sonido3.mp3");
  sonido4 = loadSound("sonido4.mp3");
  sonido5 = loadSound("sonido5.mp3");
  
  //lista Imagenes
  listaImagenes = append(listaImagenes,imagen0);
  listaImagenes = append(listaImagenes,imagen1);
  listaImagenes = append(listaImagenes,imagen2);
  listaImagenes = append(listaImagenes,imagen3);
  listaImagenes = append(listaImagenes,imagen4);
  listaImagenes = append(listaImagenes,imagen5);
  
  ///Lista sonidos
  listaSonidos = append(listaSonidos,sonido0);
  listaSonidos = append(listaSonidos,sonido1);
  listaSonidos = append(listaSonidos,sonido2);
  listaSonidos = append(listaSonidos,sonido3);
  listaSonidos = append(listaSonidos,sonido4);
  listaSonidos = append(listaSonidos,sonido5);

}

function setup() {
  createCanvas(1200, 600);
  
   steps = height/6; //Aumentar la cantidad de botones
 
  for(var i = steps/2; i<height; i+=steps){
      y = append(y,i);
  }
  
}

function draw() {
  background(220);
  
  
  for(var i = 0; i<y.length; i++)
  {
    imageMode(CENTER);
    
    var x= 1100;
    image(boton,1100,y[i], steps,steps);
    
    
    var d= dist(mouseX, mouseY,x,y[i]);
    
    if(d<=steps/2)
      {
        if(mouseIsPressed)
          {
            image(listaImagenes[i],width/2,height/2,400,400);
    
              if (listaSonidos[i].isPlaying())
              
            {} else {
            listaSonidos[i].play();
      }
    }
  }  
}

}