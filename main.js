function setup(){
    canvas =  createCanvas(400,300);
     canvas.center();
 video = createCapture(VIDEO)
 video.size(400,300)
 video.hide()
 
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
         console.log("nose_x "+results[0].pose.nose.x)
         console.log("nose_y "+results[0].pose.nose.y)
     }
 }
 function draw(){
 image(video, 0, 0, 400, 300);
 }