
function skullPosition() {

 

    let bottomWidth = (bottomScreen.innerHTML.length - 21) * 24;

    let topWidth = (topScreen.innerHTML.length - 51) * 8;

    let greaterWidth = topWidth;

    if (bottomWidth >= topWidth) {greaterWidth = bottomWidth}

    switch (greaterWidth <= 0) {

        case true:

            let transition = 0.2;

            skull.style.transition = `${transition}s ease-in-out 0s`;

            calculator.style.transition = `${transition}s ease-in-out 0s`;

            calculatorInterface.style.transition = `${transition}s ease-in-out 0s`;

            calculatorScreen.style.transition = `${transition}s ease-in-out 0s`;

            footer.style.transition = `${transition}s ease-in-out 0s`;

            skull.style.left = "calc(50% + 300px)";

            skull.src = "imgs/limit-screen.png";

            calculator.style.width = "600px";

            calculatorInterface.style.width = "560px";

            calculatorScreen.style.width = "504px";

            footer.style.width = "100%";

            break;

        case false:

            skull.src = "imgs/over-limit-screen.png";

            skull.style.left = `calc(50% + 300px + ${greaterWidth}px)`;

            calculator.style.width = `calc(600px + ${greaterWidth}px)`;

            calculatorInterface.style.width = `calc(560px + ${greaterWidth}px)`;

            calculatorScreen.style.width = `calc(504px + ${greaterWidth}px)`;

            footer.style.width = `calc(100% + ${greaterWidth}px)`;

            break;

    }

}

function keyboardButtons(event) {

    /*

    Function to use the numbers and some symbols of

    the keyboard as calculator buttons.

    */

    let bottomValues = Object.keys(keyboardSymbols).slice(0, 13);

    let topValues = Object.keys(keyboardSymbols).slice(13);

    if (bottomValues.includes(event.key)) {

        bottomScreenPrint(keyboardSymbols[event.key]);

    }

    

    else if (topValues.includes(event.key)) {

        processValue(keyboardSymbols[event.key]);

    }

}

window.addEventListener('load', setUp, false);  
