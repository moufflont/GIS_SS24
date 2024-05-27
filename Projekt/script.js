//vokabeln.html
//localStorage.clear();
let mainTag = document.getElementById('vocabulary_main');
let item = {};

for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));

    let div = document.createElement("div");
    div.id=new Date().valueOf();
    div.className="vocab";
    mainTag.append(div);

    //buttons
    let buttonEdit = document.createElement("button");
    buttonEdit.textContent="Bearbeiten";
    buttonEdit.className="vocab_edit";
    buttonEdit.addEventListener('click',editElement);
    div.append(buttonEdit, div.getElementsByTagName('button')[0]);

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent="Löschen";
    buttonDelete.className="vocab_edit";
    buttonDelete.addEventListener('click',deleteElement);
    div.insertBefore(buttonDelete, buttonEdit);
    
     //input fields
     let json=JSON.parse(item);
     let inputVocabulary =document.createElement("input");
     inputVocabulary.className="vocab_input";
     inputVocabulary.type="text";
     inputVocabulary.value=localStorage.getItem(localStorage.key(i));
     inputVocabulary.value=JSON.parse(json.vocabulary);
     div.append(inputVocabulary);
 
     let inputTranslation=document.createElement("input");
     inputTranslation.className="vocab_input";
     inputTranslation.type="text";
     inputTranslation.value=localStorage.getItem(localStorage.key(i));
     inputTranslation.value=JSON.parse(json.translation);
     div.append(inputTranslation);
}

let addVocabulary = document.getElementById('add');
addVocabulary.addEventListener('click',addElement);
function addElement(event){
    console.log(event.target.parentNode.id);
    let div = document.createElement("div");
    div.id=new Date().valueOf();
    div.className="vocab";
        mainTag.append(div);

    //button
    let buttonSave = document.createElement("button");
    buttonSave.textContent="Speichern";
    buttonSave.className="vocab_edit";
    buttonSave.addEventListener('click', saveElement);
    div.append(buttonSave);

    //input fields
    let inputVocabulary =document.createElement("input");
    inputVocabulary.className="vocab_input";
    inputVocabulary.type="text";
    inputVocabulary.placeholder="Vokabel eingeben..."; 
    div.append(inputVocabulary);
    inputVocabulary.focus(); 

    let inputTranslation=document.createElement("input");
    inputTranslation.className="vocab_input";
    inputTranslation.type="text";
    inputTranslation.placeholder="Übersetzung eingeben...";
    div.append(inputTranslation);
}
function saveElement(event){
    console.log(event.target.parentNode.id);
    let div =event.target.parentNode;
    //input und buttons löschen und extra anzeigen durch local storage?

    //buttons
    let buttonEdit = document.createElement("button");
    buttonEdit.textContent="Bearbeiten";
    buttonEdit.className="vocab_edit";
    buttonEdit.addEventListener('click',editElement);
    div.replaceChild(buttonEdit, div.getElementsByTagName('button')[0]);

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent="Löschen";
    buttonDelete.className="vocab_edit";
    buttonDelete.addEventListener('click',deleteElement);
    div.insertBefore(buttonDelete, buttonEdit);
    
    //input fields
    let isVocabulary=div.getElementsByTagName('input')[0];
    isVocabulary.disabled=true;
    isVocabulary.placeholder="";

    let isTranslation =div.getElementsByTagName('input')[1];
    isTranslation.disabled=true;
    isTranslation.placeholder="";

    item += {
       "vocabulary": isVocabulary.value,
        "translation": isTranslation.value,
        //id: (für Datenbank)
    };

    localStorage.setItem(div.id,JSON.stringify(item));
    //JSON.stringify macht object zu string 
}
function editElement (event){
    console.log(event.target.parentNode.id); //id aufrufen
    let div=event.target.parentNode;

    //buttons
    //bearbeiten entfernen
    div.removeChild(div.getElementsByTagName('button')[0]);

    let buttonSave = document.createElement("button");
    buttonSave.textContent="Speichern";
    buttonSave.className="vocab_edit";
    buttonSave.addEventListener('click', saveElement);
    div.replaceChild(buttonSave, div.getElementsByTagName('button')[0]);

    //input fields
    let isVocabulary=div.getElementsByTagName('input')[0];
    isVocabulary.disabled=false;

    let isTranslation =div.getElementsByTagName('input')[1];
    isTranslation.disabled=false;

    let item = {
        vocabulary: isVocabulary.value,
        translation: isTranslation.value
        //id: (für Datenbank)
    };

    localStorage.setItem(div.id,JSON.stringify(item));
    //JSON.stringify macht object zu string 
}
function deleteElement(event){
    //hier soll Vokabel und Übersetzung gelöscht werden können
    console.log(event.target.parentNode.id);
    let div=event.target.parentNode;

    //buttons
    div.removeChild(div.getElementsByTagName('button')[0]);
    div.removeChild(div.getElementsByTagName('button')[0]);
    //local storage
    localStorage.removeItem(event.target.parentNode.id);
    //input fields
    div.removeChild(div.getElementsByTagName('input')[0]);
    div.removeChild(div.getElementsByTagName('input')[0]);
    //div
    div.parentNode.removeChild(div);
}