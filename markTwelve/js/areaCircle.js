var radius = document.querySelector(".radius");
var submitButtonCircle = document.querySelector("#submit-btn-circle");
var outputText = document.querySelector("#output");

function calculateCircleArea(radius) {
    return ( Math.PI * (radius * radius) );
}

function doCircleOperation() {
    var area = calculateCircleArea(Number(radius.value));
    outputText.style.color = "green";
    outputText.innerHTML = `<h2> Area: ${area.toFixed(2)} </h2>`;
}

submitButtonCircle.addEventListener("click", doCircleOperation);