//vokabeln.html
let addVocabulary = document.getElementById('add');
addVocabulary.addEventListener('click',addElement);
function addElement(event){
   //hier sollen 2 neue textfelder erzeugt werden, 
   //in die Vokabel und Übersetzung eingetragen werden können.
   //bestätigung soll mit Button oder enter funktionieren
}

let editVocabulary = document.getElementsByClassName('edit');
editVocabulary.addEventListener('click', editElement);
function editElement (event){
    //hier soll Vokabel und Übersetzung bearbeitet und neu gespeichert werden können
}

let deleteVocabulary =document.getElementsByClassName('delete');
deleteVocabulary.addEventListener('click', deleteElement);
function deleteElement(event){
    //hier soll Vokabel und Übersetzung gelöscht werden können
}

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