let enterButtonOne = document.querySelector(".Enter-one");
let fullParagraph = document.querySelector(".result");
let counter = 0;
let counterTimes = document.querySelector(".counter");

enterButtonOne.onclick = function() {
    let answer1 = document.querySelector(".input1").value;
    let answer2 = document.querySelector(".input2").value;

    console.log(answer1);
    console.log(answer2);

    counter = counter + 1;
    counterTimes.innerHTML = "You have taken this quiz " + counter + " times.";

    if (answer1 === "batman" && answer2 === "cool") {
        fullParagraph.innerHTML = "You like " + answer1 + " and you are " + answer2 + " so you must be cool to hand around with";

    } else if (answer1 === "batman" && answer2 === "nice") {
        fullParagraph.innerHTML = "You like " + answer1 + " and you are " + answer2 + " so you must be lonely but also one of the kindest people in the world";

    } else if (answer1 === "spiderman" && answer2 === "cool") {
        fullParagraph.innerHTML = "You chose " + answer1 + "and you think you are " + answer2 + "but You are delusional go get friends buddy ";
    } else if (answer1 === "spiderman" && answer2 === "nice") {
        fullParagraph.innerHTML = "You chose " + answer1 + " and you are " + answer2 + " so you must be innocent 😇";
    } else {
        fullParagraph.innerHTML = " You wrote your first answer or second answer wrong please rewrite you answer as batman or spiderman and your second answer as either cool or nice! ";
    }


};
//Extra Pages



let hatePage = document.querySelector(".Criticize");
let hateButton = document.querySelector(".criticize-button");
let hatePageTwo = document.querySelector(".Hater-land");
let goodPage = document.querySelector(".Happy-rate");
let goodButton = document.querySelector(".Happy-button");
let mainPage = document.querySelector(".main-page");

hateButton.onclick = function() {
    hatePage.style.display = "block";
    hatePageTwo.style.display = "block";
    mainPage.style.display = "none";

};
goodButton.onclick = function() {
    mainPage.style.display = "none";
    goodPage.style.display = "block";
};