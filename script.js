const inputDisplay = document.getElementById("input-display");
const pinDisplay = document.getElementById("pin-display");
const submit = document.getElementById("submit");
const noMatchNotify = document.getElementById("no-match-notify");
const matchNotify = document.getElementById("match-notify");
function numbersClick(number) {
    inputDisplay.value += number;
    if (inputDisplay.value) {
        submit.removeAttribute("disabled");
    }
}
function backSpace() {
    // const inputDisplaySplit = inputDisplay.value.split("");
    // inputDisplaySplit.pop();
    // inputDisplay.value = inputDisplaySplit.join("");
    inputDisplay.value = inputDisplay.value.slice(0, -1);
    if (!inputDisplay.value) {
        submit.setAttribute("disabled", '');
    }
}
function clearNumber() {
    inputDisplay.value = "";
    submit.setAttribute("disabled", '');
}
function generateBtn() {
    const randomNumber = Math.floor(Math.random() * 9000 + 1000);
    pinDisplay.value = randomNumber;
}
function submitBtn() {
    if (inputDisplay.value) {
        if (inputDisplay.value === pinDisplay.value) {
            matchNotify.style.display = "block";
            displayNone(noMatchNotify);
        }
        else {
            noMatchNotify.style.display = "block";
            displayNone(matchNotify);
            remainingAction();
        }
    }
    else {
        displayNone(noMatchNotify);
        displayNone(matchNotify);
    }
}
function remainingAction() {
    const actionLeft = document.getElementById("action-left");
    let actionLeftNumber = parseInt(actionLeft.innerText);
    if (actionLeftNumber > 0) {
        actionLeftNumber--;
        actionLeft.innerText = actionLeftNumber;
    }
    else {
        alert("Please Input The Correct Pin");
        inputDisplay.value = "";
        pinDisplay.value = "";
        actionLeft.innerText = "3";
        displayNone(noMatchNotify);
        displayNone(matchNotify);
        submit.setAttribute("disabled", '');
    }
}
function displayNone(display) {
    display.style.display = "none";
};