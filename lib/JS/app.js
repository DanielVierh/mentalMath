
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
let auswahlAnzeigen = false;
let minNumber = 0;
let maxNumber = 500;
let calculusArray = [];

function gotoGame() {
    // playerName = document.getElementById("txtName").value;
    // if(playerName == "") {
    //     alert("Bitte trage einen Spielername ein.");
    // } else{

    // }

    $.mobile.navigate( "#p4");
    setSettings();
    resetGame();
    showNextButton();
    $("#btnNext").text("Los geht´s");
}


function setPlus() {if(isPlus === false) {isPlus = true; }else{isPlus = false;}}
function setMinus() {if(isMinus === false) {isMinus = true;}else{isMinus = false;}}
function setMulti() {if(isMulti === false) {isMulti = true;}else{isMulti = false;}}
function setAuswahl() {if(auswahlAnzeigen === false) {auswahlAnzeigen = true;}else{auswahlAnzeigen = false;}}


function setSettings() {
    calculusArray = [];
    if(isPlus){calculusArray.push("Plus");}
    if(isMinus){calculusArray.push("Minus");}
    if(isMulti){calculusArray.push("Mal");}
    if (isPlus == false && isMinus == false && isMulti == false){
        isPlus = true;
        calculusArray.push("Plus");
    }else if(isMinus == false && isMulti == false) {
        isPlus = true;
        calculusArray.push("Plus");
    }

     minNumber = parseInt(document.getElementById("txtMin").value);
     maxNumber = parseInt(document.getElementById("txtMax").value);

     // Auswahlbuttons anzeigen
    auswahlAnzeigen = document.getElementById("checkAuswahl").checked;
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
        for(var i = 1; i <= 4; i++) {
            let btnName = '#btnAnt' + i;
            $(btnName).hide();
        }
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

        // Operator
        const rndNumber = parseInt(Math.random() * calculusArray.length);
        const operator = calculusArray[rndNumber];

        let x = parseInt(Math.random() * maxNumber);
        if((x + minNumber) < maxNumber) {x = x + minNumber};

        let y = parseInt(Math.random() * maxNumber);
        if((y + minNumber) < maxNumber) {y = y + minNumber};

        if(operator === "Plus") {
            kiResult = x + y;
            document.getElementById("task").innerHTML = `${x} + ${y}`;
            document.getElementById("calculus").innerHTML = 'Addition';
        }else if(operator === "Minus") {
            kiResult = x - y;
            document.getElementById("task").innerHTML = `${x} - ${y}`;
            document.getElementById("calculus").innerHTML = 'Subtraktion';
        }else{
            kiResult = x * y;
            document.getElementById("task").innerHTML = `${x} x ${y}`;
            document.getElementById("calculus").innerHTML = 'Multiplikation';
        }


        if(auswahlAnzeigen === true){
            showSelectionButtons();
        }
}

// Wenn Auswahl angezeigt werden soll, werden hier die Button eingeblendet und mit Inhalt befüllt
function showSelectionButtons() {
    // Reihenfolge der Button bestimmen
    let shuffledArray = [];
    let fullArray = 4;
    let arrCounter = 0;
    // Mein Array Shuffle Algotithmus
    while(arrCounter < fullArray) {
        const rndN = parseInt(Math.random() * fullArray + 1)
        if(shuffledArray.includes(rndN)) {
        }else{
            shuffledArray.push(rndN);
            arrCounter ++;
        }
    }

    let rightValIndex = parseInt(Math.random() * fullArray);
    console.log(kiResult);

    // Button einblenden & befüllen
    for(var i = 0; i < fullArray; i++) {
        let btnName = '#btnAnt' + shuffledArray[i];
        $(btnName).show();
        btnName = 'btnAnt' + shuffledArray[i];
        if(i === rightValIndex) {
            document.getElementById(btnName).innerText = kiResult;
        }else{
            document.getElementById(btnName).innerText = kiResult + parseInt(Math.random() * 25);
        }
    }
}

function takeResultFromButton(val) {
    document.getElementById("number-pattern").value = val;
}

function checkResult() {
    const result = document.getElementById("number-pattern").value;
    if(result != "") {
        if(result == kiResult) {
            document.getElementById("calculus").innerHTML = `${result} ist richtig 😀`;
            richtige ++;
        }else{
            document.getElementById("calculus").innerHTML = `${result} ist Falsch. <br> Richtig wäre ${kiResult} 😞`;
            result.innerHTML = "";
        }
        if(taskCounter < maxTasks) {
            showNextButton();
        }else{
            // Stopp Zeit
            $("#number-pattern").hide(500);
            $("#btnCheck").hide(500);
            $("#btnNext").hide(0);
            document.getElementById("calculus").innerHTML = `${result} ist richtig 😀 <br> <br> Du hast ${richtige}/${maxTasks} Aufgaben richtig gelöst `;
            // Save Score
        }

    }else{
        alert("Bitte trage ein Ergebnis ein");
    }
}
