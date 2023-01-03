const gridSelector = document.querySelector("#grid-selector");

const gridContainer = document.querySelector(".grid-container");

const btnGrid = document.querySelector("#btnGrid");
btnGrid.addEventListener("click", createGrid);

const btnReset = document.querySelector("#btnReset");
btnReset.addEventListener("click", resetGrid);

function createGrid() {
  const btnResetDraw = document.querySelector("#btnResetDraw");
  btnResetDraw.addEventListener("click", ResetDraw);

  gridContainer.innerHTML = "";
  const gridValue = gridSelector.value;
  for (let i = 1; i <= gridValue; i++) {
    for (let i = 1; i <= gridValue; i++) {
      const divInGrid = document.createElement("div");
      divInGrid.classList.add("div-grid");
      divInGrid.addEventListener("mouseover", draw);
      gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
      gridContainer.append(divInGrid);
      gridContainer.style.width = `${16 * gridValue}px`;
      gridContainer.style.height = `${16 * gridValue}px`;
    }
  }

  function ResetDraw() {
    gridContainer.innerHTML = "";
    for (let i = 1; i <= gridValue; i++) {
      for (let i = 1; i <= gridValue; i++) {
        const divInGrid = document.createElement("div");
        divInGrid.classList.add("div-grid");
        divInGrid.addEventListener("mouseover", draw);
        gridContainer.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`;
        gridContainer.append(divInGrid);
        gridContainer.style.width = `${16 * gridValue}px`;
        gridContainer.style.height = `${16 * gridValue}px`;
      }
    }
  }
}

function resetGrid() {
  gridSelector.value = "";
  gridContainer.innerHTML = "";
  gridContainer.style.width = "0";
  gridContainer.style.height = "0";
  gridContainer.style.padding = "0";
}

function draw(e) {
  e.target.classList.add("div-grid-colored");
}
