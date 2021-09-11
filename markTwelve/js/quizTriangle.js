var submitButton = document.querySelector("#submit-btn");
var outputText = document.querySelector("#output");
var quizForm = document.querySelector(".quiz-form");

var correctAns = ["90°", "right angled"];

function checkScore() {
    let userScore = 0, index = 0;
    const results = new FormData(quizForm);

    for(let ans of results.values()) {
       if(ans === correctAns[index]) {
            userScore += 50;
       }
       index++;
    }

    if(userScore == 100) {
        outputText.style.color = "green";
        outputText.innerHTML = `<h2> Yay! All the answers are correct! <br> Your score: ${userScore} </h2>`;
    }
    else if(userScore == 50) {
        outputText.style.color = "green";
        outputText.innerHTML = `<h2> Your score: ${userScore} 😊 </h2>`;
    }
    else if(userScore == 0) {
        outputText.style.color = "red";
        outputText.innerHTML =  `<h2> Your score: ${userScore} 😢 </h2>`;
    }
}

submitButton.addEventListener("click", checkScore);