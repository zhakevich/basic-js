const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let minesField = [];
  for (let i = 0; i < matrix.length; i++) {
    minesField.push([]);
    for (let j = 0; j < matrix[i].length; j++) {
      let coords = getNeighboringCellsCoords(j, i);
      let mines = 0;
      for (let k = 0; k < coords.length; k++) {
        if (coords[k][0] < 0 || coords[k][1] < 0) continue;
        if (
          coords[k][0] > matrix[0].length - 1 ||
          coords[k][1] > matrix.length - 1
        )
          continue;
        if (matrix[coords[k][1]][coords[k][0]]) mines++;
      }
      minesField[i].push(mines);
    }
  }
  return minesField;
}

function getNeighboringCellsCoords(x, y) {
  return [
    [x - 1, y - 1],
    [x - 1, y],
    [x - 1, y + 1],
    [x, y - 1],
    [x, y + 1],
    [x + 1, y - 1],
    [x + 1, y],
    [x + 1, y + 1],
  ];
}

module.exports = {
  minesweeper,
};
