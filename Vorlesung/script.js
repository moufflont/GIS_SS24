let button = document.getElementById("add");
//auf button zugreifen
button.addEventListener("click", addElement);

function addElement(event){
    if(event.type==="click"||event.key==="Enter"){
        let textfeld = document.getElementById("text");
        let forumDIV = document.getElementById("forum");
        let p = document.createElement("p");
        p.textContent =textfeld.value;
        p.addEventListener("click",loadElement);
        forumDIV.append(p);
    }
}
//erst in array abspeichern?

function loadElement(event){
    let textfeld = document.getElementById("text");
    textfeld.value=event.currentTarget.textContent;
}