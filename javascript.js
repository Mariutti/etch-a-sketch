const divCounter = document.querySelector('#divCounter');
const paraCounter = document.createElement('p');
divCounter.appendChild(paraCounter);

const counter = document.querySelector('#slider');

paraCounter.textContent = `${counter.value} X ${counter.value}`

const container = document.querySelector('.container');
counter.oninput = function(){
    paraCounter.textContent = `${this.value} X ${this.value}`;
}

const divContainer = document.querySelector('.container');
const containerStyles = window.getComputedStyle(divContainer);
const containerHeight = containerStyles.getPropertyValue('height').slice(0, -2);
containerHeight.oninput = function(){
    containerHeight = this.value
}

const containerWidth = containerStyles.getPropertyValue('width').slice(0, -2);

containerWidth.oninput = function(){
    containerWidth = this.value
}

const gridBtn = document.querySelector('#gridBtn');
gridBtn.addEventListener('click', createDivs);

function createDivs(){
    divContainer.innerHTML = '';
    for(let i = 1; i <= Math.pow(counter.value, 2); i++){
        const divGrid = document.createElement('div');
        divGrid.className = 'divGrid';
        divContainer.appendChild(divGrid);
        divGrid.style.height = `${containerHeight/counter.value}px`;
        divGrid.style.width = `${containerWidth/counter.value}px`;
        divGrid.addEventListener('mouseover', draw)
    }
}

function draw(e) {
    e.target.classList.add("div-grid-colored");
  }