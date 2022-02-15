function createDivColorPalette() {
  tagDiv = document.createElement('div');
  document.body.appendChild(tagDiv);
  tagDiv.id = 'color-palette';
}
createDivColorPalette();

function createColorsOfPalette() {
  palette = document.getElementById('color-palette');
  arrayColors = ['black', 'red', 'green', 'blue'];
  for (i = 0; i < arrayColors.length; i += 1) {
    tagDiv = document.createElement('div');
    palette.appendChild(tagDiv);
    tagDiv.className = `color ${arrayColors[i]}`;    
  }
}
createColorsOfPalette();