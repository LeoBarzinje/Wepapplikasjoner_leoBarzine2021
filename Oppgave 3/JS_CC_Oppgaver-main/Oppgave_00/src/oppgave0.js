// Oppgave 1
const removeText = document.getElementById("remove");
const textRemover = document.getElementById("remove-btn");

textRemover.onclick = function deleteText(){
    removeText.innerHTML = null;
}

// Oppgave 2
const changeText = document.getElementById("change");
const textChanger = document.getElementById("change-btn");

textChanger.onclick = function changeTextFunction(){
    changeText.innerHTML = "kopierte funksjonen over og limte inn her";
}

// Oppgave 3
const inputText = document.getElementById("input");
const textPara = document.getElementById("input-text");

inputText.onkeyup = function copyText(){
    textPara.innerHTML = inputText.value;
}


// Oppgave 4
const myList = ['item one', 'item two', 'item three'];
const btnWriter = document.getElementById("write-list");
btnWriter.onclick = function writeList(){


const liste = document.getElementById("ul");
for (let i = 0; i < myList.length; i++) {
    liste.innerHTML += "<li> "+myList[i] +"</li> "
    
}
}


// Oppgave 5
const inputTexter = document.getElementById('text');
const btnCreater = document.getElementById('create');
const selecter = document.getElementById('select');
const  placeholdForHtml= document.getElementById("placeholder");

btnCreater.onclick = function createHtml(){
    const makeHtmlTags = selecter.value;
    const userText = inputTexter.value;
console.log(makeHtmlTags);
console.log(userText);
    placeholdForHtml.innerHTML += "<"+ makeHtmlTags +">" + userText +"</"+ makeHtmlTags +">"
    
}

// Oppgave 6
 const getList = document.getElementById("list");
 const btnRemover = document.getElementById("remove-li");
 // denne her klarte jeg ikke å løse selv, denne oppgaven
 // gjrode jeg ved å se på løsningforslaget. 
 btnRemover.onclick = function removeLiElements(){
     const getLastLiElement = getList.lastElementChild;

    if(getLastLiElement){
        getList.removeChild(getLastLiElement);
    }

 }

// Oppgave 7

const boks = document.getElementById("name");

const btnBorder = document.getElementById("order");

boks.onkeyup = function borderChange(){
    const lengthOfBox = boks.value;
    if( lengthOfBox.length >= 4){
        btnBorder.style ="border: 2px solid red"
    }
  console.log(lengthOfBox)
}

// Oppgave 8
//denne oppgaven er også tatt fra løsningsforslaget, jeg klarte å sette på
//border på siste element, men ikke på alle ved å gjøre det jeg gjorde på oppg6
//Array.from og forEach er nytt for meg så kan ikke så mye om dette. 
const listeEight = document.querySelector(".children");
const liElementsFromEight = listeEight.querySelectorAll("li");
const btnColor = document.getElementById("color");

btnColor.onclick = function addColorBorder(){
    Array.from(liElementsFromEight).forEach((li, index) => {
        if ((index + 1) % 2 === 0) {
            li.style = "border: 2px solid pink;"
          } else {
            li.style = "border: 2px solid green;"
          }
        });
      };
   

