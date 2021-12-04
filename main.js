img="";
status1="";
objects=[];

function preload(){
img=loadImage("dog_cat.jpg");
}




function draw(){
image(img,0,0,640,420);

if(status1!=""){
  
  /*  fill("black");
    text("Dog",150,20);
    noFill();
    stroke("grey");
    rect(30,50,350,350);
    
    fill("black");
    text("cat",600,60);
    noFill();
    stroke("grey");
    rect(300,70,350,350);*/
for(i=0;i<objects.length;i++){  
    document.getElementById("status").innerHTML="status:  Object Detected";
    fill("black");
    percent=floor(objects[i].confidence*100)
    text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15);
    noFill();
    stroke("grey");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
}
}



}




function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
objectdetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status:detecting object";
}

function modelloaded(){
    console.log("model is loaded");
    status1=true;
    objectdetector.detect(img,gotresult);
}

function gotresult(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}