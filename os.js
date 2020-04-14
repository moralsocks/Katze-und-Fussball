let globalArray = [];
let globalObjectArray = [];
let lastWord;
let taContent;
let changeArray = ['Hand', 'Kopf', 'Arm'];

function getInput(){ 
    if (event.key == ' '){
        taContent = document.getElementById('ta');
        globalArray = taContent.value.split(" ");
        lastWord = globalArray[globalArray.length - 1];
        console.log("last word added: " + lastWord);
        fetchWordType(lastWord);

        taContent.value = globalArray.join(" ");



        //Regeln:

        if (lastWord == 'sortieren') sortArray();
        if (changeArray.includes(lastWord)) change();
    }
}


function sortArray(){
    globalArray.sort();
    taContent.value = globalArray.join(" ");
    console.log('sortArray works!');
}


function change(){
    let regex1 = /i/g;
    taContent.value = taContent.value.replace(regex1, "you");
    let regex2 = /I/g;
    taContent.value = taContent.value.replace(regex2, "you");
    console.log('Change works!');
}

function fetchWordType(word){
    const apiUrl = "https://www.dwds.de/api/snippet?q=";
    fetch(apiUrl.concat(word))
        .then(res => {
        res.header('Access-Control-Allow-Origin', "*");
        res.header('Access-Control-Allow-Headers', "*");
        return res;
        }).then(res => res.json())
            .then(data => console.log(data));
}


function readFile(){
    let fs = require("fs");
    let text = fs.readFileSync("/files/angstformen.txt");
    let angstArray = text.split("\n");
    console.log(angstArray);
}

function game(){
    /*
    Timer
    virus
        buchstabenpopulation checken und laufend überprüfen
        
        ansteckung
    

    */
}


/*
function change(){
    fetch('https://www.openthesaurus.de/synonyme/​search?q=test&format=application/json')
    .then(res => res.json())
    .then(data => console.log(data));
}*/
               