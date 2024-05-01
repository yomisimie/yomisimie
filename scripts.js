
const visitor = document.querySelector('#visitor-count > span');
let rand = randomInteger(1000, 10000);
visitor.innerHTML = rand;

setInterval(() => {
    visitor.innerHTML = rand++;
}, rand);

function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
