export default {
	draw,
	highlight
};

// var origBoardEl;
var tiles = [];

// ****************************

function draw(boardEl) {
	// TODO: draw the chessboard, 8 rows (divs)
	// of 8 tiles (divs) each, inserting all DOM
	// elements into `boardEl` div
	// origBoardEl = boardEl;
	for (let i = 0; i < 8; i++) {
		let rowEl = document.createElement('div');
		let rowArr = [];
		for (let j = 0; j < 8; j++) {
			let tileEl = document.createElement('div');
			tileEl.dataset.row = i;
			tileEl.dataset.col = j;
			rowEl.appendChild(tileEl)
			// tileEl.setAttribute('data-row', i);
			// tileEl.setAttribute('data-col', j);
			rowArr.push(tileEl);
		}
		boardEl.appendChild(rowEl);
		tiles.push(rowArr);
	}
	// tiles = boardEl.querySelectorAll('div > div');
}

function highlight(tileEl) {
	// TODO: clear previous highlights (if any) and
	// then find the tiles in the two diagonals
	// (major and minor) that `tileEl` belongs to,
	// to highlight them via CSS class "highlighted"

	// var tiles = origBoardEl.querySelectorAll('div > div');

	//clear all currently highlighted tiles
	for (let row of tiles) {
		for (let el of row) {
			el.classList.remove('highlighted');
		}
	}

	if (tileEl) {
		// let rowEl = tileEl.parentNode;
		// let boardEl = rowEl.parentNode;
		// let tileRowIdx = [...boardEl.childNodes].indexOf(rowEl);
		// let tileColIdx = [...rowEl.childNodes].indexOf(tileEl);
		let tileRowIdx = Number(tileEl.dataset.row);
		let tileColIdx = Number(tileEl.dataset.col);

		console.log('row: ', tileEl.getAttribute('data-row'));
		console.log('col: ', tileEl.getAttribute('data-col'));

		for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
			let el = tiles[i][j];
			// let el = findTile(i,j);
			el.classList.add('highlighted');
		}
		for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j < 8; i--, j++) {
			let el = tiles[i][j]
			// let el = findTile(i,j);
			el.classList.add('highlighted');
		}
		for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--) {
			let el = tiles[i][j]
			// let el = findTile(i,j);
			el.classList.add('highlighted');
		}
		for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++) {
			let el = tiles[i][j]
			// let el = findTile(i,j);
			el.classList.add('highlighted');
		}
	}
}

// function findTile(row, col) {
// 	// return document.querySelector(`#board > div:nth-child(${row + 1}) > div:nth-child(${col + 1})`);
// 	for (let el of tiles) {
// 		if (el.dataset.row == row && el.dataset.col == col) {
// 			return el
// 		}
// 	}

	// return document.querySelector(`[data-row="${row}"], [data-col="${col}"]`); <--did not work
// }
