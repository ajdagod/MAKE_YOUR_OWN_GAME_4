const World=Matter.World;
const Engine=Matter.Engine;
const Bodies=Matter.Bodies;
var engine,world;
var backimg;

function preload(){
backimg=loadImage("background.jpeg");


}

function setup(){
engine=Engine.create();
world=engine.world;
canvas=createCanvas(700,450);
enemy1=new enemy(300,200);
person1=new person(200,200,200,200);
grounds=new ground(200,380);
}

function draw(){    
background(backimg);

person1.display();
enemy1.display();
}






