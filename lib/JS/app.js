
let kiResult = 0;
let taskCounter = 0;
let maxTasks = 10;
let playerName = "";
let playerScore = 0;
let calculus = "Addieren";
let richtige = 0;
let isPlus = true;
let isMinus = false;
let isMulti = false;
let minNumber = 0;
let maxNumber = 500;
let calculusArray = [];

function gotoGame() {
    playerName = document.getElementById("txtName").value;
    if(playerName == "") {
        alert("Bitte trage einen Spielername ein.");
    } else{
        $.mobile.navigate( "#p4");
        setSettings();
        resetGame();
        showNextButton();
    }
}


function setPlus() {if(isPlus == false) {isPlus = true;}else{isPlus = false;}setSettings();}
function setMinus() {if(isMinus == false) {isMinus = true;}else{isMinus = false;}setSettings();}
function setMulti() {if(isMulti == false) {isMulti = true;}else{isMulti = false;}setSettings();}


function setSettings() {
    if(isPlus == true && isMinus == true && isMulti == true) {
        maxTasks = 15;
    }
    if (isMinus == false && isMulti == false){
        maxTasks = 10;
        isPlus = true;
    }

     minNumber = parseInt(document.getElementById("txtMin").value);
     maxNumber = parseInt(document.getElementById("txtMax").value);

    console.log(`Min ${minNumber} / Max${maxNumber} // Plus: ${isPlus} // Multi ${isMulti} // Minus ${isMinus}`);
}


function resetGame() {
    kiResult = 0;
    taskCounter = 0;
    richtige = 0;
    $("#btnNext").text("Los geht´s");
    $("#btnCheck").hide();
    $("#ausg").hide();
    $("#calculus").hide();
    $("#number-pattern").hide();
    $("#task").hide();
}



function showNextButton() {
        $("#btnNext").text("Nächste Aufgabe");
        $("#btnCheck").hide(500);
        $("#number-pattern").val("");
        $("#number-pattern").hide(500);
        $("#btnNext").show(500);
}



function newTask() {
   
        taskCounter ++;
        document.getElementById("ausg").innerHTML = `Aufgabe ${taskCounter} / ${maxTasks}`;
        document.getElementById("calculus").innerHTML = calculus;
        $("#task").show();
        $("#btnCheck").show();
        $("#ausg").show();
        $("#calculus").show();
        $("#number-pattern").show();
        $("#btnNext").hide();
    
        let x = parseInt(Math.random() * maxNumber);
        if((x + minNumber) < maxNumber) {x = x + minNumber};

        let y = parseInt(Math.random() * maxNumber);
        if((y + minNumber) < maxNumber) {y = y + minNumber};
        
        kiResult = x + y;
    
        document.getElementById("task").innerHTML = `${x} + ${y}`;

}

function checkResult() {
    const result = document.getElementById("number-pattern").value;
    if(result != "") {
        if(result == kiResult) {
            document.getElementById("ausg").innerHTML = `${result} ist richtig 😀`;
            richtige ++;
        }else{
            document.getElementById("ausg").innerHTML = `${result} ist Falsch. <br> Richtig wäre ${kiResult} 😞`;
            result.innerHTML = "";
        }
        if(taskCounter < maxTasks) {
            showNextButton();
        }else{
            // Stopp Zeit
            $("#number-pattern").hide(500);
            $("#btnCheck").hide(500);
            $("#btnNext").hide(0);
            document.getElementById("ausg").innerHTML = `${result} ist richtig 😀 <br> <br> ${playerName}, du hast ${richtige}/${maxTasks} Aufgaben richtig gelöst `;
            // Save Score
        }

    }else{
        alert("Bitte trage ein Ergebnis ein");
    }
}
