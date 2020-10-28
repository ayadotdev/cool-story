//----------------CHAPTER STRUCTURE

const chapter5 = {
    phrase: "You survived!!!",
    img: "https://www.colemanconcierge.com/wp-content/uploads/2017/11/Ghosts-and-Legends-You-Survived.jpg",
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null }
}

const chapter4 = {
    phrase: "You died!!!",
    img: "https://i.kym-cdn.com/entries/icons/facebook/000/029/198/Dark_Souls_You_Died_Screen_-_Completely_Black_Screen_0-2_screenshot.jpg",
    buttonChoice1: { text: "", nextChapter: null },
    buttonChoice2: { text: "", nextChapter: null }
}

const chapter3 = {
    phrase: "The ghost is here right in front of you! You have to choose!",
    img: "https://dnbstories.com/wp-content/uploads/2016/09/Ghosts.jpg",
    buttonChoice1: { text: "Run!", nextChapter: chapter5 },
    buttonChoice2: { text: "Fight!", nextChapter: chapter4 }
}

const chapter2 = {
    phrase: "You entered the room and you see the ghost. What do you do?",
    img: "https://images.unsplash.com/photo-1505599950318-db5a5093ce0c?ixlib=rb-1.2.1&q=50&fm=jpg&crop=entropy&cs=tinysrgb&w=720&fit=max&ixid=eyJhcHBfaWQiOjEyMjZ9",
    buttonChoice1: { text: "Get closer", nextChapter: chapter3 },
    buttonChoice2: { text: "Hide", nextChapter: chapter5 }
}

const chapter1 = {
    phrase: "BLA BLA BLA",
    img: "pictures/club-activities-5.jpg",
    buttonChoice1: { text: "OPTION1", nextChapter: chapter2 },
    buttonChoice2: { text: "OPTION2", nextChapter: chapter5 }
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

let pageNumber = () => {
    document.getElementById("page1").innerHTML = Number(document.getElementById("page1").innerHTML) + Number(2);
    document.getElementById("page2").innerHTML = Number(document.getElementById("page2").innerHTML) + Number(2);
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
    img.height = "400";

    wholestory.appendChild(img);





    //SCROLL TO BOTTOM
    wholestory.scrollTop = wholestory.scrollHeight;




    //if there is a nextChapter in buttonChoice1 we add the button 
    if (chapterToShow.buttonChoice1.nextChapter !== null) {

        const button1 = document.createElement("input");
        button1.className = 'btn'; 
        button1.type = "button";
        button1.value = chapterToShow.buttonChoice1.text;
        button1.addEventListener("click", function () {
            changeChapter(chapterToShow.buttonChoice1.nextChapter);
        }, false);

        document.querySelector("#buttons").appendChild(button1);
    }

    //if there is a nextChapter in buttonChoice2 we add the button 
    if (chapterToShow.buttonChoice2.nextChapter !== null) {


        const button2 = document.createElement("input");
        button2.className = 'btn';
        button2.type = "button";
        button2.value = chapterToShow.buttonChoice2.text;
        button2.addEventListener("click", function () {
            changeChapter(chapterToShow.buttonChoice2.nextChapter);
        }, false);

        document.querySelector("#buttons").appendChild(button2);
    }
}
