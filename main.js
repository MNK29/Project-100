var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();
var selfie = 0;

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start();
} 

camera = document.getElementById("camera");

recognition.onresult = function(event) {
    console.log(event);
    var Content = event.results[0][0].transcript;
    document.getElementById("textbox").innerHTML = Content;
    console.log(Content);
    if (Content == "selfie") {
        console.log("Taking selfie");
        speak();
    }
}

Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});

function speak(){
    var synth = window.speechSynthesis;
    Webcam.attach(camera);
    selfie = selfie + 1;

    if (selfie == 1) {
        speak_data = "Taking your Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        setTimeout(function(){
            img_id = "selfie1"
            take_snapshot();
        }, 5000);
    }

    if (selfie == 2) {
        speak_data = "Taking your next Selfie in 10 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        setTimeout(function(){
            img_id = "selfie2"
            take_snapshot();
        }, 10000);
    }

    if (selfie == 3) {
        speak_data = "Taking your next Selfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth.speak(utterThis);
        setTimeout(function(){
            img_id = "selfie3"
            take_snapshot();
        }, 15000);
    }
    
}

function take_snapshot() {
    console.log(img_id);

    Webcam.snap(function(data_uri){

        if(img_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" class="result" src="'+ data_uri +'">';
        }

        if(img_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" class="result" src="'+ data_uri +'">';
        }

        if(img_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" class="result" src="'+ data_uri +'">';
        }
        
    });
}