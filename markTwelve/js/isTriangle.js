var angleInputs = document.querySelectorAll(".angle-input");
var submitButton = document.querySelector("#submit-btn");
var outputText = document.querySelector("#output");

function sumOfAngles(a, b, c) {
    return  a + b + c;
}

function checkTraingle() {
    let sum = sumOfAngles(Number(angleInputs[0].value), Number(angleInputs[1].value), Number(angleInputs[2].value));
    if(sum == 180) {
        outputText.style.color = "green";
        outputText.innerHTML = "<h2> Yay! The angles form a Traingle!! 😊 </h2>";
    }
    else {
        outputText.style.color = "red";
        outputText.innerHTML = "<h2> Uh oh, these angles don't form a Triangle. 😢 <h2>";
    }
}

submitButton.addEventListener("click", checkTraingle);