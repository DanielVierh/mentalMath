
var kiResult = 4;
var taskCounter = 1;


function checkResult() {
    const result = document.getElementById("number-pattern").value;
    if(result != "") {
        if(result == kiResult) {
            document.getElementById("ausg").innerHTML = "Richtig 😀";
        }else{
            document.getElementById("ausg").innerHTML = "Falsch. Richtig wäre " + kiResult + " 😞";
            result.innerHTML = "";
        }
    }else{
        alert("Bitte trage ein Ergebnis ein");
    }
}


