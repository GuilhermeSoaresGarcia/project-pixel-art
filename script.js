const h1Title = document.getElementById('title');

function createDivColorPalette() {
  tagDiv = document.createElement('div');
  h1Title.parentElement.appendChild(tagDiv);
  tagDiv.id = 'color-palette';
}
createDivColorPalette();

function createColorsOfPalette() {
  palette = document.getElementById('color-palette');
  arrayColors = ['red', 'green', 'blue', 'black',];
  for (i = 0; i < arrayColors.length; i += 1) {
    tagDiv = document.createElement('div');
    palette.appendChild(tagDiv);
    tagDiv.className = `color ${arrayColors[i]}`;    
  }
}
createColorsOfPalette();