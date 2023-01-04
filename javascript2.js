const divCounter = document.querySelector('#divCounter');
const paraCounter = document.createElement('p');
divCounter.appendChild(paraCounter);

const counter = document.querySelector('#slider');

paraCounter.textContent = `${counter.value} X ${counter.value}`

counter.oninput = function(){
    paraCounter.textContent = `${this.value} X ${this.value}`;
}


const divContainer = document.querySelector('.container')