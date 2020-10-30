//----------------CHAPTER STRUCTURE

// CAN'T ADD MORE CHAPTERS

const chapter8 = {
    phrase: "CHAPTER 8",
    img: ""/* "/* https://www.colemanconcierge.com/wp-content/uploads/2017/11/Ghosts-and-Legends-You-Survived.jpg */" */,
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null }
}


const chapter7 = {
    phrase: "CHAPTER 7",
    img: ""/* "https://www.colemanconcierge.com/wp-content/uploads/2017/11/Ghosts-and-Legends-You-Survived.jpg" */,
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null }
}

const chapter6 = {
    phrase: "CHAPTER 6",
    img: ""/* "https://www.colemanconcierge.com/wp-content/uploads/2017/11/Ghosts-and-Legends-You-Survived.jpg" */,
    buttonChoice1: { text: "", nextChapter: chapter8 },
    buttonChoice2: { text: "", nextChapter: null }
}

const chapter5 = {
    phrase: "All right clearly you are trash and don’t belong here. GET OUT TRASH.",
    img: "img/get-out.jpg",
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null }
}

const chapter4 = {
    phrase: "Aretha and youself decide to investigate. You put Aretha down and she leads the way. The hallway is long and dark.Its lined with a number of candles all of which gyrate to the whims of the wind blowing through the adjacent windows. You arrive at the end of the hallway you are faced with a choice left or right.  The left door sounfs like it there’s meowing, the right door sounfs like there’s moaning. Aretha seems really interested in the dor where there is meowing...but you yourself feel a little more partial to the moaning...You wonder if its only because your husband has been dead for four years and vicarious thrills are all that satiate you...the moment passes MEOW OR MOAN?",
    img: "img/curtains-in-the-wind.jpg",
    buttonChoice1: { text: "ENTER", nextChapter: null },
    buttonChoice2: { text: "CHASE", nextChapter: null }
}

const chapter3 = {
    phrase: "Right you hear women laughing, cackling really. You decide you are going to investigate. You wander down the hallway holding Aretha Frankelmittens, but suddenly she jumps out of your arms. You have to decide do you let her be and go into the kitchen where the laughter is coming or chase after her.",
    img: "img/club-cat.jpg",
    buttonChoice1: { text: "LET ARETHA GO", nextChapter: chapter6 },
    buttonChoice2: { text: "CHASE AFTER HER", nextChapter: chapter7 }
}

const chapter2 = {
    phrase: "You hang up your coat and look around. The building is mostly empty. Its full of marble walls and incredible portraits. You walk further forward until you reach an intersection at the hall way. You have two choices. Left or Right.",
    img: "img/empty-hall-with-sculptures.jpg",
    buttonChoice1: { text: "LEFT", nextChapter: chapter4 },
    buttonChoice2: { text: "RIGHT", nextChapter: chapter3 }
}

const chapter1 = {
    phrase: "You park your car in the lot and wander up the steps. Aretha meows three times which you know means that she either is contemplating the meaning of life or she’s about to throw up. You put her down so she can throw up…She doesn’t, so you figure she’s probably just feeling existential because the moon is out. You knock on the door, no one answers. Aretha meows to say “That’s hella bizarre, they invited us” you nod, thats right Aretha that is hella bizarre. You let yourself in. When you walk in an intercom says “Welcome to the Cougar Country Club…Thank you, for being with us. We are so happy to have you. Would you like to hang up your coat?” You are faced with a decision do you hang up your coat yes? or no?",
    img: "img/ladies-in-the-sun.jpg",
    buttonChoice1: { text: "YES", nextChapter: chapter2 },
    buttonChoice2: { text: "NO", nextChapter: chapter5 }
}





//----------------LOGIC



//remove all existing buttons from the #buttons div
function removePreviousButtons(){
    //document.querySelector("#buttons").innerHTML = "";

    let buttonsDiv = document.getElementById("buttons");
    buttonsDiv.querySelectorAll('*').forEach(button => button.remove());
}
 //remove all text from wholestory div   
function removeText(){

    let textDiv = document.getElementById("wholestory");
    textDiv.querySelectorAll('*').forEach(p => p.remove());

}
//add 2 to a previous number page

let pageNumber = () => {
    document.getElementById("page1").innerHTML = Number(document.getElementById("page1").innerHTML) + Number(2);
    document.getElementById("page2").innerHTML = Number(document.getElementById("page2").innerHTML) + Number(2);
}

//this function creates buttons with css style 

function createButtons (buttonChoice){

    const divButton = document.createElement("div");
    divButton.className = "section__box";

    
    const button = document.createElement("button");
    button.classList.add("r-button" ,"ai-element", "ai-element_type3" ,"ai-element7");
    button.addEventListener("click", function () {
        changeChapter(buttonChoice.nextChapter);
    }, false);
    
    const buttonSpan = document.createElement("span");
    buttonSpan.className = "ai-element__label";
    buttonSpan.innerHTML = buttonChoice.text;
    
    button.appendChild(buttonSpan);
    divButton.appendChild(button);
      
    document.querySelector("#buttons").appendChild(divButton);
    
}

// This function has only the logic to display the chapter in the HTML
// (phrase and img in the #wholestory div  and the buttons in the #buttons div )

function changeChapter(chapterToShow) {

   removePreviousButtons(); 
   removeText();
   pageNumber();

    //append a new <p> to the #wholestory div 
    const wholestory = document.querySelector("#wholestory");
    const paragraph = document.createElement("p");
    const text = document.createTextNode(chapterToShow.phrase);
    paragraph.appendChild(text);
    wholestory.appendChild(paragraph);

    const img = document.createElement("img");
    img.src = chapterToShow.img;
    img.width = "600";
    img.height = "250";

    wholestory.appendChild(img);


    //if there is a nextChapter in buttonChoice1 we add the button 
    if (chapterToShow.buttonChoice1.nextChapter !== null) {
        createButtons(chapterToShow.buttonChoice1);
    }

    //if there is a nextChapter in buttonChoice2 we add the button 
    if (chapterToShow.buttonChoice2.nextChapter !== null) {
        createButtons(chapterToShow.buttonChoice2);
    }
}

        document.querySelector("#buttons").appendChild(button2);
    


document.getElementById("dress").addEventListener("mouseenter", function() { 
document.getElementById("dress-img").style.display = 'block';
})
    
document.getElementById("dress").addEventListener("mouseleave", function() {

document.getElementById("dress-img").style.display = 'none';
})
