export default {
	draw,
	highlight
};

var origBoardEl;

// ****************************

function draw(boardEl) {
	// TODO: draw the chessboard, 8 rows (divs)
	// of 8 tiles (divs) each, inserting all DOM
	// elements into `boardEl` div
	origBoardEl = boardEl;
	for (let i = 0; i < 8; i++) {
		let rowEl = document.createElement('div');
		for (let j = 0; j < 8; j++) {
			let tileEl = document.createElement('div');
			rowEl.appendChild(tileEl);
		}
		boardEl.appendChild(rowEl);
	}
}

function highlight(tileEl) {
	// TODO: clear previous highlights (if any) and
	// then find the tiles in the two diagonals
	// (major and minor) that `tileEl` belongs to,
	// to highlight them via CSS class "highlighted"
	var tiles = origBoardEl.querySelectorAll('div > div');

	//clear all currently highlighted tiles
	for (let el of tiles) {
		el.classList.remove('highlighted');
	}

	if (tileEl) {
		let rowEl = tileEl.parentNode;
		let tileRowIdx = [...origBoardEl.childNodes].indexOf(rowEl);
		let tileColIdx = [...rowEl.childNodes].indexOf(tileEl);

		for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
			let el = findTile(i,j);
			el.classList.add('highlighted');
		}
		for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j < 8; i--, j++) {
			let el = findTile(i,j);
			el.classList.add('highlighted');
		}
		for (let i = tileRowIdx, j = tileColIdx; i < 8 && j >= 0; i++, j--) {
			let el = findTile(i,j);
			el.classList.add('highlighted');
		}
		for (let i = tileRowIdx, j = tileColIdx; i < 8 && j < 8; i++, j++) {
			let el = findTile(i,j);
			el.classList.add('highlighted');
		}
	}
}

function findTile(row, col) {
	return document.querySelector(`#board > div:nth-child(${row + 1}) > div:nth-child(${col + 1})`);
}
