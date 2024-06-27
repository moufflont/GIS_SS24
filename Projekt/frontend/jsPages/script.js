//beautifying code: Shift + Alt + F

// für übergabe in url bspw. schreiben: ?itemId=1&itemV=cat&itemT=Katze

//parameters to be added with urleditVoc+=...
let urlgetVoc = "http://127.0.0.1:3000/getVocabulary";
let urlselectVoc = "http://127.0.0.1:3000/selectVocabulary?itemId=";
let urladdVoc = "http://127.0.0.1:3000/addVocabulary?";
let urldeleteVoc = "http://127.0.0.1:3000/deleteVocabulary?itemId=";
let urleditVoc = "http://127.0.0.1:3000/editVocabulary?itemId=";

//vokabeln.html
let mainTag = document.getElementById('vocabulary_main');
loadVocabulary(urlgetVoc);

async function loadVocabulary(url) { //await muss in funktion sein; for auch drin, da das erst passieren kann, wenn vokabeln geladen haben

    let response = await fetch(url);
    let data = await response.text();
    console.log("data" + data);
    let text = JSON.parse(data);
    console.log("text" + text);

    for (let i = 0; i < text.length; i++) { 
        let div = document.createElement("div");
        div.id = text[i].id; // id an stelle i in db
        div.className = "vocab";
        mainTag.append(div);

        //buttons
        let buttonEdit = document.createElement("button");
        buttonEdit.textContent = "Bearbeiten";
        buttonEdit.className = "vocab_edit";
        buttonEdit.addEventListener('click', editElement);
        div.append(buttonEdit);

        let buttonDelete = document.createElement("button");
        buttonDelete.textContent = "Löschen";
        buttonDelete.className = "vocab_edit";
        buttonDelete.addEventListener('click', deleteElement);
        div.insertBefore(buttonDelete, buttonEdit);

        //input fields
        let inputVocabulary = document.createElement("input");
        inputVocabulary.className = "vocab_input";
        inputVocabulary.type = "text";
        inputVocabulary.value = text[i].vocabulary;
        inputVocabulary.disabled = true;
        div.append(inputVocabulary);

        let inputTranslation = document.createElement("input");
        inputTranslation.className = "vocab_input";
        inputTranslation.type = "text";
        inputTranslation.value=text[i].translation;
        inputTranslation.disabled = true;
        div.append(inputTranslation);
    }
}

let addVocabulary = document.getElementById('add');
addVocabulary.addEventListener('click', addElement);
function addElement(event) {
    let div = document.createElement("div");
    //E-Mail-Frage
    div.id;
    div.className = "vocab";
    mainTag.insertBefore(div, mainTag.getElementsByTagName('div')[0]);

    //button
    let buttonSave = document.createElement("button");
    buttonSave.textContent = "Speichern";
    buttonSave.className = "vocab_edit";
    buttonSave.addEventListener('click', saveElement);
    div.append(buttonSave);

    //input fields
    let inputVocabulary = document.createElement("input");
    inputVocabulary.className = "vocab_input";
    inputVocabulary.type = "text";
    inputVocabulary.placeholder = "Vokabel eingeben...";
    div.append(inputVocabulary);
    inputVocabulary.focus();

    let inputTranslation = document.createElement("input");
    inputTranslation.className = "vocab_input";
    inputTranslation.type = "text";
    inputTranslation.placeholder = "Übersetzung eingeben...";
    div.append(inputTranslation);
}
function saveElement(event) {
    let div = event.target.parentNode;

    //buttons
    let buttonEdit = document.createElement("button");
    buttonEdit.textContent = "Bearbeiten";
    buttonEdit.className = "vocab_edit";
    buttonEdit.addEventListener('click', editElement);
    div.replaceChild(buttonEdit, div.getElementsByTagName('button')[0]);

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent = "Löschen";
    buttonDelete.className = "vocab_edit";
    buttonDelete.addEventListener('click', deleteElement);
    div.insertBefore(buttonDelete, buttonEdit);

    //input fields
    let isVocabulary = div.getElementsByTagName('input')[0];
    isVocabulary.disabled = true;
    isVocabulary.placeholder = "";

    let isTranslation = div.getElementsByTagName('input')[1];
    isTranslation.disabled = true;
    isTranslation.placeholder = "";

    //vokabel zu db hinzufügen via urladdVoc mit übergebenen vokabel-und übersetzungswerten
    fetch(urladdVoc+"itemV="+isVocabulary.value+"&itemT="+isTranslation.value);
}
function editElement(event) {
    let div = event.target.parentNode;

    //buttons
    //bearbeiten entfernen
    div.removeChild(div.getElementsByTagName('button')[0]);
    console.log(div.id);

    let buttonSave = document.createElement("button");
    buttonSave.textContent = "Speichern";
    buttonSave.className = "vocab_edit";
    buttonSave.addEventListener('click', saveElement);
    div.replaceChild(buttonSave, div.getElementsByTagName('button')[0]);

    //input fields
    let isVocabulary = div.getElementsByTagName('input')[0];
    isVocabulary.disabled = false;

    let isTranslation = div.getElementsByTagName('input')[1];
    isTranslation.disabled = false;

    fetch(urleditVoc+div.id+"&itemV="+isVocabulary.value+"&itemT="+isTranslation.value);
}
function deleteElement(event) {
    let div = event.target.parentNode;
    console.log(div.id);

    //buttons
    div.removeChild(div.getElementsByTagName('button')[0]);
    div.removeChild(div.getElementsByTagName('button')[0]);
    //input fields
    div.removeChild(div.getElementsByTagName('input')[0]);
    div.removeChild(div.getElementsByTagName('input')[0]);
    //div
    div.parentNode.removeChild(div);
    //db
    fetch(urldeleteVoc+div.id);
}