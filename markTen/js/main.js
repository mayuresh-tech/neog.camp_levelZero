const btn = document.getElementById("theme-change");
const billAmountButton = document.getElementById("input-amount-button");
const paidAmountButton = document.getElementById("paid-amount-button");

document.getElementById("input-amount-number").value = null;
document.getElementById("input-cash-given").value = null;

var notes = [2000, 500, 100, 20, 10, 5, 1];

btn.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});

billAmountButton.addEventListener("click", function() {
    if(document.getElementById("input-amount-number").value.trim() === null || document.getElementById("input-amount-number").value.trim() === "" || parseInt(document.getElementById("input-amount-number").value.trim()) === 0) {
        alert("Enter valid Amount");
    }
    else {
        document.querySelector(".check-text-show").style.display = "block";
        document.querySelector(".check-show").style.display = "block";
        document.querySelector(".button-show").style.display = "none";
    }
});

paidAmountButton.addEventListener("click", function() {
    console.log(document.getElementById("input-cash-given").value);
    if(parseInt(document.getElementById("input-cash-given").value.trim()) >= parseInt(document.getElementById("input-amount-number").value.trim())) {
        document.querySelector(".show-currency").style.display = "block";
        document.querySelector(".button-show").style.display = "none";
        var amountToCheckForNotes = document.getElementById("input-cash-given").value.trim() - document.getElementById("input-amount-number").value.trim();
        var result = new Array(7);
        for(var i = 0; i < notes.length; i++) {
            if(amountToCheckForNotes >= notes[i]) {
                result[i] = parseInt(amountToCheckForNotes / notes[i]);
                amountToCheckForNotes = amountToCheckForNotes - ( result[i] * notes[i]);
            }
            else {
                result[i] = 0;
            }
        }

        var x = document.getElementsByClassName("notes");
        for(var i = 0; i < notes.length; i++) {
            x[i].innerHTML = result[i];
        }
    }
    else {
        alert("Cash given should be greator than Bill Amount");
    }
});