//lernmodus_karteikarten.html
//localStorage.clear();
let mainTag = document.getElementById('vocabulary_main');
let item = {};
let json=JSON.parse(item);
for (let i = 0; i < localStorage.length; i++) {
    console.log(localStorage.key(i));
}

let word =document.createElement("a");
word.value=localStorage.getItem(localStorage.key(0));
word.value=JSON.parse(json.vocabulary);
mainTag.replaceChild(word,getElementsByTagName('a'));
let count=0;

let next =document.getElementsByClassName('next');
next.addEventListener('click', showNextElement);
function showNextElement (event){
    count=count+1;
    word.value=localStorage.getItem(localStorage.key(count));
    word.value=JSON.parse(json.vocabulary);
    mainTag.replaceChild(word,getElementsByTagName('a'));
}
let translate=document.getElementsByClassName('show_translation');
translate.addEventListener('click', showTranslation);
function showTranslation (event){
    word.value=localStorage.getItem(event.target.parentNode.id);
    word.value=JSON.parse(json.translation);
    mainTag.append(word);
}
