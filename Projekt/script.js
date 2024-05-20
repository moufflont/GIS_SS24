//vokabeln.html
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
  }
//localStorage.clear();

let addVocabulary = document.getElementById('add');
addVocabulary.addEventListener('click',addElement);
function addElement(event){
    //if id>0, also wenn vokabel bereits gespeichert--> inset before?
    let mainTag = document.getElementById('vocabulary_main');
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

    let item = {
        vocabulary: isVocabulary.value,
        translation: isTranslation.value,
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
        translation: isTranslation.value,
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
    localStorage.removeItem('event.target.parentNode.id');
    div.removeChild(div.getElementsByTagName('input')[0]);
    div.removeChild(div.getElementsByTagName('input')[0]);
}

/*
//lernmodus_karteikarten.html
let previous = document.getElementsByClassName('previous');
previous.addEventListener('click', showPrevoiusElement);
function showPreviousElement(event){
    //vorherige Vokabel wieder anzeigen
}
let next =document.getElementsByClassName('next'); // auch lernmodus_uebersetzung.html
next.addEventListener('click', showNextElement);
function showNextElement (event){
    //weiter zur nächsten vokabel
}
let translate=document.getElementsByClassName('show_translation');
translate.addEventListener('click', showTranslation);
function showTranslation (ebent){
    //übersetzung anzeigen 
}



 mainTag.innerHTML+=`<div class="vocab">
    <button class="vocab_edit">Löschen</button>
    <button class="vocab_edit">Bearbeiten</button>
    <br>
    <input class="vocab_input" type="text" placeholder="Vokabel eingeben..." autofocus> 
    <br>
    <input class="vocab_input" type="text" placeholder="Übersetzung eingeben...">
    </div>`;


    isTranslation.id=event.target.parentNode.id;

*/