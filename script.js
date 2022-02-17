function createDivColorPalette() {
  palette = document.createElement('div');
  document.body.appendChild(palette);
  palette.id = 'color-palette';
}
createDivColorPalette();

function createButtonClear() {
  let button = document.createElement('button');
  document.body.appendChild(button);
  button.id = 'clear-board'
  button.innerText = 'Limpar'
  button.addEventListener('click', function () {
    for (i = 0; i < 25; i += 1) {
      document.getElementsByClassName('pixel')[i].className = 'pixel white';
    };
  }
  );
}
createButtonClear();

function createColorsOfPalette() {
  palette = document.getElementById('color-palette');
  arrayColors = ['black', 'red', 'green', 'blue'];
  for (i = 0; i < arrayColors.length; i += 1) {
    color = document.createElement('div');
    palette.appendChild(color);
    color.className = `color ${arrayColors[i]}`;
    if (arrayColors[i] === 'black') {
      color.className = `color ${arrayColors[i]} selected`;
    };
  };
};
createColorsOfPalette();

function createPixelBoard() {
  board = document.createElement('div')
  document.body.appendChild(board);
  board.id = 'pixel-board';
}
createPixelBoard();

function createPixelsOfBoard() {
  board = document.getElementById('pixel-board');
  for (i = 0; i < 25; i += 1) {
    pixel = document.createElement('div');
    board.appendChild(pixel);
    pixel.className = 'pixel white';
  };
};
createPixelsOfBoard();

function selectAColorFromPalette() {
  color = document.getElementById('color-palette').childNodes;
  document.addEventListener('click', function () {

    if (event.target.classList.contains('color')) {
      for (i = 0; i < color.length; i += 1) {
        if (color[i].classList.contains('selected')) {
          color[i].classList.remove('selected');
        };
      };
      if (!event.target.classList.contains('selected')) {
        event.target.classList.toggle('selected');
      };
    };
  }
  );
};
selectAColorFromPalette()

function fillPixelWithSelectedColor() {
  palette = document.getElementById('color-palette').childNodes;
  // selectedColor = document.querySelector('.selected').classList[1]
  pixel = document.querySelector('.pixel');
  selectedColor = '';

  addEventListener('click', function () {
    if (event.target.classList.contains('pixel')) {

      for (i = 0; i < color.length; i += 1) {
        if (palette[i].classList.contains('selected')) {
          selectedColor = palette[i].classList[1];
        }
      }
      if (event.target.classList[1] !== selectedColor) {
        event.target.classList.remove(event.target.classList[1]);
        event.target.classList.add(selectedColor);
      } else {
        event.target.classList.remove(event.target.classList[1]);
        event.target.classList.add('white');
      };
    };
  }
  );
};
fillPixelWithSelectedColor()
