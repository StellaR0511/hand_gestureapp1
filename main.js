
prediction1 = "";
prediction2 = "";

Webcam.set({
    height:300,
    width:350,
    image_format:'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";
    });
}
console.log("ml5 version: ", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/3TiNyDnfZ/model.json', modelLoaded);

function modelLoaded(){
    console.log("Model Loaded!");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "Prediction 1 is "+prediction1; 
    speak_data2 = "And the second prediction is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}