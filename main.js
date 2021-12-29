Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function Take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="emotion"src="'+data_uri+'">';

    });

}
console.log('ml5.version',ml5.version);
classifier=ml5.imageClassfier('',modelLoaded);
function modelLoaded(){
console.log('modelLoaded&');
}

Prediction1="";
Prediction2="";
function speak(){
    var synth=window.speechSynthesis;
    speak1="The first prediction is "+Prediction1;
    speak2="The second prediction is "+Prediction2;
    var utter_this=new SpeechSynthesisUtterance(speak1+speak2);
    synth.speak(utter_this);
}