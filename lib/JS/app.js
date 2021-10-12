
let kiResult = 0;
let taskCounter = 0;
const maxTasks = 3;
let playerName = "";
let playerScore = 0;
let calculus = "Addieren";

function gotoGame() {
    playerName = document.getElementById("txtName").value;
    if(playerName == "") {
        alert("Bitte trage einen Spielername ein.");
    } else{
        $.mobile.navigate( "#p4");
        resetGame();
        showNextButton();
    }
}



function resetGame() {
    kiResult = 0;
    taskCounter = 0;
    $("#btnCheck").hide();
    $("#ausg").hide();
    $("#calculus").hide();
    $("#number-pattern").hide();
}



function showNextButton() {
    
        $("#btnCheck").hide(500);
        $("#number-pattern").val("");
        $("#number-pattern").hide(500);
        $("#btnNext").show(500);
}



function newTask() {
   
        taskCounter ++;
        document.getElementById("ausg").innerHTML = `Aufgabe ${taskCounter} / ${maxTasks}`;
        document.getElementById("calculus").innerHTML = calculus;
        $("#btnCheck").show();
        $("#ausg").show();
        $("#calculus").show();
        $("#number-pattern").show();
        $("#btnNext").hide();
    
        const x = parseInt(Math.random() * 100);
        const y = parseInt(Math.random() * 100);
        kiResult = x + y;
    
        document.getElementById("task").innerHTML = `${x} + ${y}`;

}

function checkResult() {
    const result = document.getElementById("number-pattern").value;
    if(result != "") {
        if(result == kiResult) {
            document.getElementById("ausg").innerHTML = `${result} ist richtig 😀`;
        }else{
            document.getElementById("ausg").innerHTML = `${result} ist Falsch. <br> Richtig wäre ${kiResult} 😞`;
            result.innerHTML = "";
        }
        if(taskCounter < maxTasks) {
            showNextButton();
        }else{
            $("#number-pattern").hide(500);
            $("#btnCheck").hide(500);
            $("#btnNext").hide(0);
            document.getElementById("ausg").innerHTML = `${result} ist richtig 😀 <br> <br> ${playerName}, du hast das Spiel Beendet`;
            // 
            // Save Score
        }

    }else{
        alert("Bitte trage ein Ergebnis ein");
    }
}
