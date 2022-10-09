
var currentDate = moment().format("dddd, MMMM Do");
var currentTime = moment().format("hA");
var $pEl = $("#currentDay");
var timeArray = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];
var hourArray = ["hour-9", "hour-10", "hour-11", "hour-12", "hour-1", "hour-2", "hour-3", "hour-4", "hour-5"];

$pEl.text(currentDate);

function colorDisplay(){
    var index = 0;
    for(var i = 0; i < timeArray.length; i++){
        if(currentTime == timeArray[i]){
            index = i;
        }
    }
    
    for (var i = 0; i < index; i++){
        $("#"+timeArray[i]).css("background-color", "#D3D3D3");
    }
    
    $("#"+timeArray[index]).css("background-color", "#FF0000");
    
    for (var i = index + 1; i < timeArray.length; i++){
        $("#"+timeArray[i]).css("background-color", "#00FF00");
    }
}

function displayMessage(){
    for(var i = 0; i < timeArray.length; i++){
        var value = localStorage.getItem(timeArray[i]);
        $("#"+timeArray[i]).val(value);
    }
}

function displayConfirm(){
    $("#add-message").css("display", "block");
    $("#add-message").fadeOut(3000);
}

colorDisplay();

document.addEventListener("click", function(event){
    var child = event.target;
    console.log(child);
    for(var i = 0; i < hourArray.length; i++){
        if(child.matches("#"+hourArray[i])){
            var $text = $("#"+timeArray[i]).val();
            if($text.length != 0){
                localStorage.setItem(timeArray[i], $text);
                displayConfirm();
            }
        }
    }
});

displayMessage();