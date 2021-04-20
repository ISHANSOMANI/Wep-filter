function setup(){
    canvas =  createCanvas(400,300);
     canvas.center();
 video = createCapture(VIDEO)
 video.size(400,300)
 video.hide()
 
 noseX = 0
 noseY = 0

 poseNet = ml5.poseNet(video,modeloaded);
 poseNet.on('pose',gotPoses)
 }
 function modeloaded(){
     console.log("PoseNet is initialized");
 }
 
 function takeSnapshot(){
     save("Face.png");
 }
 function gotPoses(results){
     if (results.length > 0){
         console.log(results)
         noseX=results[0].pose.nose.x-10;
         noseY=results[0].pose.nose.y;
     }
 }
 function draw(){
 image(video, 0, 0, 400, 300);
 image(nose,noseX,noseY,30,30)
 }
 
 function preload(){
     muuch = loadImage("https://i.postimg.cc/1RvnpjBV/maustache.png")
 }