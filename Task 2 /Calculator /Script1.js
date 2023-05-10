
        topScreen.innerHTML += ` ${record[value].replace(".", ",")}`;
    }

    if (total !== "error") {bottomScreen.innerHTML = total.replace(".", ",")}
}


function processValue(sym) {

    if (resultValue.slice(-1) === ",") {resultValue = resultValue.slice(0, -1)}
    record.push(resultValue.replace(",", "."), calcValues[sym]);

    if (record.slice(-2)[0] === "0" && record.slice(-1)[0] !== "=" && record.length === 2) {
        record = record.slice(0, -3);
        record.push(calcValues[sym]);
    }


    screenModification(calculateValues(record));


    if (["1/", "!", "√", "∛", "²", "="].includes(calcValues[sym]) === false) {
        resultValue = "0"}
    skullPosition();
}


function givenResultCheck(sym) {

    if (givenResult && sym !== "negate" && [0, 3].includes(record.length)) {
        givenResult = false;
        resultValue = "0";
        record = [];
        topScreen.innerHTML = "";
    }
}


function bottomScreenPrint(sym) {

    givenResultCheck(sym);

    if (["clear", "ce"].includes(sym) || ["del1", "del2"].includes(sym)
    && resultValue.length === 1 || sym === "num0"
    && (resultValue === "" || resultValue === "0")) {
        resultValue = "0";
    }

    if (sym === "clear") {
        topScreen.innerHTML = "";
        record = [];
    }

    else if (sym.includes("num") || sym === "comma"
    && resultValue.includes(",") === false) {
        if (resultValue === "0" && sym !== "comma") {resultValue = ""}
        resultValue += calcValues[sym];
    }

    else if (["pi", "euler"].includes(sym)) {
        resultValue = calcValues[sym];
    }

    else if (sym === "negate" && resultValue !== "0") {
        if      (resultValue[0] !== "-") {resultValue = "-" + resultValue}
        else if (resultValue[0] === "-") {resultValue = resultValue.slice(1)}
    }

    else if (["del1", "del2"].includes(sym) && resultValue.length > 1) {
        resultValue = resultValue.slice(0, -1);
    }


    bottomScreen.innerHTML = resultValue;
    skullPosition();
}


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
