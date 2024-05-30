//lernmodus_uebersetzen.html
let mainTag = document.getElementById('tanslate_main');

let div = document.createElement("div");
div.className="learning_questionare";
mainTag.append(div);

let count=0;

//vokabel
let word =document.createElement("span");
word.textContent=JSON.parse(localStorage.getItem(localStorage.key(count))).vocabulary;
div.append(word);

//breaks
let someSpace = document.createElement("br");
div.append(someSpace);

//input field
let checkInput =document.createElement("input");
checkInput.className="vocab_input";
checkInput.type="text";
checkInput.placeholder="Übersetzung eingeben..."; 
div.append(checkInput);
checkInput.focus(); 

//buttons
let buttonPrevious = document.createElement("button");
buttonPrevious.textContent="Vorherige";
buttonPrevious.className="learning_buttons";
buttonPrevious.addEventListener('click',showPreviousElement);
div.append(buttonPrevious);

let buttonShowTranslation = document.createElement("button");
buttonShowTranslation.textContent="Antwort Überprüfen";
buttonShowTranslation.className="learning_buttons show_translation";
buttonShowTranslation.addEventListener('click',check);
div.append(buttonShowTranslation);

let buttonNext = document.createElement("button");
buttonNext.textContent="Nächste";
buttonNext.className="learning_buttons";
buttonNext.addEventListener('click',showNextElement);
div.append(buttonNext);

function showNextElement (event){
    if(count==localStorage.length-1){
        let output =document.createElement("span");
        output.textContent="Alle Vokabeln wurden durchgearbeitet! Glückwunsch!";
        mainTag.append(output);
        // Nachricht wieder ausblenden; mit ChatGPT erstellt
        setTimeout(() => {
            output.style.display = 'none';
        }, 3500);
    }
    else{
        count=count+1;
        word.textContent=JSON.parse(localStorage.getItem(localStorage.key(count))).vocabulary;
        div.replaceChild(word, word);
        checkInput.value="";
        checkInput.focus(); 
    }
}
function showPreviousElement (event){
    if(count==0){
        let output =document.createElement("span");
        output.textContent="Das ist die erste Vokabel...";
        mainTag.append(output);
        // Nachricht wieder ausblenden; mit ChatGPT erstellt
        setTimeout(() => {
            output.style.display = 'none';
        }, 4500);
    }
    else{
        count=count-1;
        word.textContent=JSON.parse(localStorage.getItem(localStorage.key(count))).vocabulary;
        div.replaceChild(word, word);
        checkInput.value="";
        checkInput.focus();
    }
}
function check(event){
    let answer =document.createElement("span");
    if(div.getElementsByTagName('input')[0].value==JSON.parse(localStorage.getItem(localStorage.key(count))).translation){
        answer.textContent="Richtig!";
        mainTag.append(answer);
        // Nachricht wieder ausblenden; mit ChatGPT erstellt
        setTimeout(() => {
            answer.style.display = 'none';
        }, 3000);
    }
    else{
        answer.textContent="Leider falsch. Die richtige Antwort lautet: "+ JSON.parse(localStorage.getItem(localStorage.key(count))).translation;;
        mainTag.append(answer);
        // Nachricht wieder ausblenden; mit ChatGPT erstellt
        setTimeout(() => {
            answer.style.display = 'none';
        }, 5000);
    }
}
