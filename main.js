function setup(){
    createCanvas(400, 400);
    video= createCapture(VIDEO);
    video.size(400,400)
    
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('Posenet is Initialized!');
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
}
}