//lernmodus_karteikarten.html
let mainTag = document.getElementById('flash_main');

let div = document.createElement("div");
div.className = "learning_questionare";
mainTag.append(div);

let count = 0;

//vokabel
let word = document.createElement("span");
word.textContent = JSON.parse(localStorage.getItem(localStorage.key(count))).vocabulary;
div.append(word);

//breaks
let someSpace = document.createElement("br");
div.append(someSpace);

//buttons
let buttonPrevious = document.createElement("button");
buttonPrevious.textContent = "Zurück";
buttonPrevious.className = "learning_buttons float_left";
buttonPrevious.addEventListener('click', showPreviousElement);
div.append(buttonPrevious);

let buttonShowTranslation = document.createElement("button");
buttonShowTranslation.textContent = "Übersetzung anzeigen";
buttonShowTranslation.className = "learning_buttons show_translation";
buttonShowTranslation.addEventListener('click', showTranslation);
div.append(buttonShowTranslation);

let buttonNext = document.createElement("button");
buttonNext.textContent = "Weiter";
buttonNext.className = "learning_buttons float_right";
buttonNext.addEventListener('click', showNextElement);
div.append(buttonNext);

function showNextElement(event) {
    if (count == localStorage.length - 1) {
        let output = document.createElement("span");
        output.textContent = "Alle Vokabeln wurden durchgearbeitet! Glückwunsch!";
        mainTag.append(output);
        // Nachricht wieder ausblenden; mit ChatGPT erstellt
        setTimeout(() => {
            output.style.display = 'none';
        }, 3500);
    }
    else {
        count = count + 1;
        word.textContent = JSON.parse(localStorage.getItem(localStorage.key(count))).vocabulary;
        div.replaceChild(word, word);
        div.replaceChild(buttonShowTranslation, div.getElementsByTagName('span')[1]);
    }
}

function showTranslation(event) {
    let wordTranslation = document.createElement("span");
    wordTranslation.textContent = JSON.parse(localStorage.getItem(localStorage.key(count))).translation;
    div.replaceChild(wordTranslation, div.getElementsByTagName('button')[1]);
}
function showPreviousElement(event) {
    if (count == 0) {
        let output = document.createElement("span");
        output.textContent = "Das ist die erste Vokabel...";
        mainTag.append(output);
        // Nachricht wieder ausblenden; mit ChatGPT erstellt
        setTimeout(() => {
            output.style.display = 'none';
        }, 4500);
    }
    else {
        count = count - 1;
        word.textContent = JSON.parse(localStorage.getItem(localStorage.key(count))).vocabulary;
        div.replaceChild(word, word);
        div.replaceChild(buttonShowTranslation, div.getElementsByTagName('span')[1]);
    }
}