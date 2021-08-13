song="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;
function preLoad() {
song=loadSound("music.mp3");

}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(Video, modelLoaded);
poseNet.on('pose', gotPoses);

}
function modelLoaded(){
    console.log('posenet is initialized');
}
function gotPoses(results){
if(results.length > 0)
{
    console.log(results);
    leftWristX=resuls[0].pose.leftWrist.x;
    leftWristY=resuls[0].pose.leftWrist.y;
console.log("leftWristX="+leftWristX+"  leftWristY="+leftWristY);
    rightWristX=resuls[0].pose.rightWrist.x;
    rightWristY=resuls[0].pose.rightWrist.y;
console.log("rightWristX="+rightWristX+"  rightWristY="+rightWristY);
}
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}