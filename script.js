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



document.addEventListener('click', createSelectedClass);

function createSelectedClass() {  
  // if (event.target.className == )
  console.log(event.target.className)
};


// createSelectedClass();