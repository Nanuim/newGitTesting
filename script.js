const colorBtn = document.querySelector('.colorBtn');
const colorText = document.querySelector('.hex');
const bodyBcg = document.querySelector('body');
const hexNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F', ];

//const colors = ['yellow', 'red', 'green', '#3b5998'];

colorBtn.addEventListener('click', changeColor);

//Code to change background color
function changeColor() {
    let hexCol = '#';

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexNumbers.length);
        hexCol += hexNumbers[random];
    }
    bodyBcg.style.backgroundColor = hexCol;
    document.getElementById("hex").innerHTML = hexCol;

    //document.bgColor = colors[random];
 }