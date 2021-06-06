var SpeechRecognition= window.webkitSpeechRecognition;
var recogntiton= new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recogntiton.start();
}
recogntiton.onresult=function(event){
    console.log(event);
    var Content=event.results[0][0].transcript;
    console.log(Content);
    document.getElementById("textbox").innerHTML=Content;
    if(Content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
    
}
function speak(){
var synth = window.speechSynthesis;
speak_data = "taking your selfie in 5 seconds";
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
Webcam.attach( '#my_camera' );
setTimeout(function() {
    take_snapshot();
    save();
}, 5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
camera = document.getElementById("camera");
function take_snapshot(){
webcam.snap(function(data_url){
    document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_url+'">';
})    
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_image").src;
    link.href=image;
    link.click();
}