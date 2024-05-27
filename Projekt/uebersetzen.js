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

//input field
let inputTranslation =document.createElement("input");
inputTranslation.className="vocab_input";
inputTranslation.type="text";
inputTranslation.placeholder="Hier Übersetzung eingeben..."; 
div.insertBefore(inputTranslation, getElementsByTagName('br')[1]);
inputVocabulary.focus(); 

let next=document.getElementsByClassName('next');
next.addEventListener('click', showNextElement);
function showNextElement (event){
    count=count+1;
    word.value=localStorage.getItem(localStorage.key(count));
    word.value=JSON.parse(json.vocabulary);
    mainTag.replaceChild(word, getElementsByTagName('a'));
}
let isCorrect=document.getElementsByClassName('show_translation');
translate.addEventListener('click', testTranslation);
function testTranslation (event){
    if(getElementsByTagName('input').value==localStorage.getItem(event.target.parentNode.id)){
        let answer =document.createElement("a");
        answer.value="Richtig!";
        mainTag.append('answer');
    }
    else{
          let answer =document.createElement("a");
        answer.value="Falsch!";
        mainTag.append('answer');
    }
    word.value=localStorage.getItem(event.target.parentNode.id);
    word.value=JSON.parse(json.translation);
    mainTag.append(word);
}
