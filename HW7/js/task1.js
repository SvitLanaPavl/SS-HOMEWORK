const btn = document.querySelector('button');
function numGame() {
let fnum = prompt('Input your first number');
let snum = prompt('Input your second number');
const list = [];
for(let i = fnum; i<snum; i++) {
    if(i>fnum) {
        list.push(i);
    }
}
if (fnum < snum) { 
    alert(`First number: ${fnum}
    Second number: ${snum}
    Numbers between: ${list}`);
} 


else {
    alert('Invalid input data')
}
}

btn.addEventListener('click', numGame);
