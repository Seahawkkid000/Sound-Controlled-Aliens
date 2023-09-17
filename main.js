function start(){
    navigator.mediaDevices.getUserMedia({
        audio: true
    })
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/b6UWX6V2U/model.json", model_loaded)
}
function model_loaded(){
    console.log("Model Is Loaded")
    classifier.classify(got_result)
}
function got_result(error, results){
    if (error) {
        console.log(error) 
    } else {
        console.log(results)
        document.getElementById("result_label").innerHTML="I can hear: "+results[0].label
        document.getElementById("result_confidence").innerHTML="Confidence: "+(results[0].confidence*100).toFixed(2)+"%"
        if(results[0].label=="Background Noise"){
            document.getElementById("alien_1").src="aliens-01.gif"
            document.getElementById("alien_2").src="aliens-02.png"
            document.getElementById("alien_3").src="aliens-03.png"
            document.getElementById("alien_4").src="aliens-04.png"
        }
        if(results[0].label=="Clap"){
            document.getElementById("alien_1").src="aliens-01.png"
            document.getElementById("alien_2").src="aliens-02.gif"
            document.getElementById("alien_3").src="aliens-03.png"
            document.getElementById("alien_4").src="aliens-04.png"
        }
        if(results[0].label=="Snap"){
            document.getElementById("alien_1").src="aliens-01.png"
            document.getElementById("alien_2").src="aliens-02.png"
            document.getElementById("alien_3").src="aliens-03.gif"
            document.getElementById("alien_4").src="aliens-04.png"
        }
        if(results[0].label=="Bump"){
            document.getElementById("alien_1").src="aliens-01.png"
            document.getElementById("alien_2").src="aliens-02.png"
            document.getElementById("alien_3").src="aliens-03.png"
            document.getElementById("alien_4").src="aliens-04.gif"
        }
        
    }
}