//vokabeln.html
let addVocabulary = document.getElementById('add');
addVocabulary.addEventListener('click',addElement);
function addElement(event){
    //if id>0, also wenn vokabel bereits gespeichert--> inset before?
    let mainTag = document.getElementById('vocabulary_main');
    let div = document.createElement("div");
    div.id=new Date().valueOf();
    div.className="vocab";
    mainTag.append(div);

    let buttonDelete = document.createElement("button");
    buttonDelete.textContent="Löschen";
    buttonDelete.className="vocab_edit";
    buttonDelete.addEventListener('click',deleteElement);
    div.append(buttonDelete);

    let buttonSave = document.createElement("button");
    buttonSave.textContent="Speichern";
    buttonSave.className="vocab_edit";
    buttonSave.addEventListener('click',saveElement);
    div.append(buttonSave);

    let inputVocabulary =document.createElement("input");
    inputVocabulary.className="vocab_input";
    inputVocabulary.type="text";
    inputVocabulary.placeholder="Vokabel eingeben...";
    div.append(inputVocabulary);
    //autofocus

    let inputTranslation=document.createElement("input");
    inputTranslation.className="vocab_input";
    inputTranslation.type="text";
    inputTranslation.placeholder="Übersetzung eingeben...";
    div.appent(inputTranslation);
    //doesn't work for 2 :/

   //hier sollen 2 neue textfelder erzeugt werden, 
   //in die Vokabel und Übersetzung eingetragen werden können.
   //bestätigung soll mit Button funktionieren
}
function saveElement(event){
    //eingegebene Vokabel und Übersetzung sollen gespeichert und nicht mehr bearbeitet werden können (nur durch button edit)
    //->disabled
    let isVocabulary =document.createElement("input");
    isVocabulary.className="vocab_input";
    isVocabulary.type="text";
    isVocabulary.id=event.target.parentNode.id;//nötig?
    div.append(isVocabulary);

    let isTranslation =document.createElement("input");
    isTranslation.className="vocab_input";
    isTranslation.type="text";
    isTranslation.id=event.target.parentNode.id;//nötig?
    div.append(isTranslation);
}
function editElement (event){
    //hier soll Vokabel und Übersetzung bearbeitet und neu gespeichert werden können
    console.log(event.target.parentNode.id); //id aufrufen
    //isVocabulary und isTranslation nichtmehr disabled machen 
}
function deleteElement(event){
    //hier soll Vokabel und Übersetzung gelöscht werden können
    console.log(event.target.parentNode.id);
    
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
*/