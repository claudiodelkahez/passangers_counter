// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el");
let saveBtn = document.getElementById("save-btn");
let saveEl = document.getElementById('save-el');
let restartBtn = document.getElementById('restart-btn');

let count = 0;

function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {
    let savedValues = count + " - ";
    saveEl.textContent += savedValues;
    countEl.textContent = 0;
    count = 0
}
