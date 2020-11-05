
# Cool Story intercative text game :cat2: :older_woman: :cat2:
## Project #1 for Wild code school bootcamp
#### by Nikolai, Yuri, Teiko, Aya.

## Introduction :mage:


> "Life is a matter of choices, and every choice you make makes you." John C. Maxwell.


This is an interactive text game based on user choices while progeressing with a story. There are 2 buttons with 2 choices and the final button in the end of the story bringing the user back to the first chapter.

## Technologies :electric_plug:

1. HTML
2. CSS
3. JavaScript

## Data structure :card_index_dividers:

Our data represents a chapter composed of a text, an image and 2 buttons. The navigation through the chapters is configured directly in the objects.

```javascript
const chapter1 = {
    phrase: "You park your car in the lot and wander up the steps. Aretha meows three times which you know...",
    img: "img/ladies-in-the-sun.jpg",
    buttonChoice1: { text: "YES", nextChapter: chapter2 },
    buttonChoice2: { text: "NO", nextChapter: chapter5 }
}
```
## Sources :bulb:
[Book layout on Codepen](https://codepen.io/erinesullivan/pen/gxdbzp)
