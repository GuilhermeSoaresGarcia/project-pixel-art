function createDivColorPalette() {
  palette = document.createElement('div');
  document.body.appendChild(palette);
  palette.id = 'color-palette';
}
createDivColorPalette();

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

function createPixels() {
  board = document.getElementById('pixel-board');
  for (i = 0; i < 25; i += 1) {
    pixel = document.createElement('div');
    board.appendChild(pixel);
    pixel.className = 'pixel white';
  };
};
createPixels();

function addRemoveSelected() {
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

addRemoveSelected()

function fillPixelWithSelectedColor() {
  selectedColor = document.querySelector('.selected').classList[1]
  pixel = document.querySelector('.pixel')

  addEventListener('click', function () {
    if (event.target.classList.contains('pixel')) {
      if (event.target.classList[1] !== selectedColor) {
        console.log(selectedColor)
        event.target.classList.remove(event.target.classList[1]);
        event.target.classList.add(selectedColor);
      } else {
        event.target.classList.remove(event.target.classList[1]);
        event.target.classList.add('white');
      }
    };
  }
  );
};
fillPixelWithSelectedColor()

