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

    //buttons
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

    let inputTranslation=document.createElement("input");
    inputTranslation.className="vocab_input";
    inputTranslation.type="text";
    inputTranslation.placeholder="Übersetzung eingeben...";
    div.append(inputTranslation);
}
function saveElement(event){
    let divSaved = document.createElement("div");
    divSaved.className="vocab";
    divSaved.id=div.id;
    mainTag.appendChild(divSaved);

    //buttons
    let buttonDelete = document.createElement("button");
    buttonDelete.textContent="Löschen";
    buttonDelete.className="vocab_edit";
    buttonDelete.addEventListener('click',deleteElement);
    divSaved.append(buttonDelete);

    let buttonEdit = document.createElement("button");
    buttonDelete.textContent="Bearbeiten";
    buttonDelete.className="vocab_edit";
    buttonDelete.addEventListener('click',editElement);
    divSaved.append(buttonEdit);
    //input fields disbled
    let isVocabulary=document.createElement("input");
    isVocabulary.className="vocab_input";
    isVocabulary.type="text";
    isVocabulary.disabled=true;
    isVocabulary.value=document.getElementById(event.target.parentNode.id).value;
    divSaved.append(isVocabulary);

    let isTranslation =document.createElement("input");
    isTranslation.className="vocab_input";
    isTranslation.type="text";
    isTranslation.disabled=true;
    divSaved.append(isTranslation);
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


    isTranslation.id=event.target.parentNode.id;

*/