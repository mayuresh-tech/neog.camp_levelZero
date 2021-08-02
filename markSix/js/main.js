var url = "https://api.funtranslations.com/translate/minion.json";
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

var inputAreaText = document.querySelector("#input-area");
var submitButton = document.querySelector("#click-submit");
var outputAreaText = document.querySelector("#output-area");

inputAreaText.value = "";

function callServer(content) {
    return url + "?text=" + content; 
}

function errorHandler(error) {
    alert('Some error occured. Please try after sometime.');
}

submitButton.addEventListener("click", function() {
    outputAreaText.value = "";
    var content = inputAreaText.value;
    if(content === null || content === "") {
        outputAreaText.value = "Input cannot be empty";
    } else {
    url = callServer(content);
    fetch(url).then(response => response.json()).then(json => outputAreaText.value = json.contents.translated).catch(errorHandler);
    var url = "https://api.funtranslations.com/translate/minion.json";
    //var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json";

    }
});