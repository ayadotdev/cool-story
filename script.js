
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
    phrase: "You wake up in the very dark and cold room. You open your eyes and you see the door. Would you open that door?",
    img: "https://theroyalliar.files.wordpress.com/2019/05/sv2t3.jpg?w=640",
    buttonChoice1: { text: "Yes", nextChapter: chapter2 },
    buttonChoice2: { text: "No", nextChapter: chapter5 }
}





//----------------LOGIC

// This function has only the logic to display the chapter in the HTML
// (phrase and img in the #wholestory div  and the buttons in the #buttons div )
function changeChapter(chapterToShow) {

    //remove all existing buttons from the #buttons div
    document.querySelector("#buttons").innerHTML = "";
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
        button2.type = "button";
        button2.value = chapterToShow.buttonChoice2.text;
        button2.addEventListener("click", function () {
            changeChapter(chapterToShow.buttonChoice2.nextChapter);
        }, false);

        document.querySelector("#buttons").appendChild(button2);
    }



}
