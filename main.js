function setup(){
    video = createCapture(VIDEO);
    video.size(700,500);
    video.position(100, 400);
    canvas = createCanvas(700, 500);
    canvas.position(900, 400);
    canvas.background("#2E2A64");
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
    leftWristx = "";
    leftWristy = "";
    rightWristx = "";
    rightWristy = "";
    poses = [];
}
function modelLoaded(){
    console.log("posenet is on");
    console.log(poses);
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        leftWristx = results[0].pose.leftWrist.x;
        rightWristx = results[0].pose.rightWrist.x;
        }}

function draw(){
    background("#2E2A64");
    difference = leftWristx - rightWristx;
    Math.floor(difference);
    textSize(difference);
    fill("#BCF960");
    text("Adway", 200, 400);
}