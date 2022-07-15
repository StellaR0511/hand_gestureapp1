
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

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,gotResult);
}
function gotResult(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_name2").innerHTML=results[1].label;
        prediction1 = results[0].label;
        prediction2 = results[1].label;
        speak();
        if(prediction1=="Ok"){
            document.getElementById("result_emoji").innerHTML="&#128076";
        }
        if(prediction1=="Victory"){
            document.getElementById("result_emoji").innerHTML="&#9996";
        }
        if(prediction1=="Thumbs Up"){
            document.getElementById("result_emoji").innerHTML="&#128077";
        }
        if(prediction1=="Thumbs Down"){
            document.getElementById("result_emoji").innerHTML="&#128078";
        }
        if(prediction1=="Fist"){
            document.getElementById("result_emoji").innerHTML="&#128548";
        }
        if(prediction1=="Palm"){
            document.getElementById("result_emoji").innerHTML="&#9995";
        }
        if(prediction1=="Shaka"){
            document.getElementById("result_emoji").innerHTML="&#129305";
        }
        if(prediction2=="Ok"){
            document.getElementById("result_emoji2").innerHTML="&#128076";
        }
        if(prediction2=="Victory"){
            document.getElementById("result_emoji2").innerHTML="&#9996";
        }
        if(prediction2=="Thumbs Up"){
            document.getElementById("result_emoji2").innerHTML="&#128077";
        }
        if(prediction2=="Thumbs Down"){
            document.getElementById("result_emoji2").innerHTML="&#128078";
        }
        if(prediction2=="Fist"){
            document.getElementById("result_emoji2").innerHTML="&#128548";
        }
        if(prediction2=="Palm"){
            document.getElementById("result_emoji2").innerHTML="&#9995";
        }
        if(prediction2=="Shaka"){
            document.getElementById("result_emoji2").innerHTML="&#129305";
        }
    }
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data1 = "Prediction 1 is "+prediction1; 
    speak_data2 = "And the second prediction is "+prediction2;
    var utterThis = new SpeechSynthesisUtterance(speak_data1+speak_data2);
    synth.speak(utterThis);
}