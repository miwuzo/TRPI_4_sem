type SudokuGrid = number[][];

const standard: SudokuGrid = [
    [5,3,0,0,7,0,0,0,0],
    [6,0,0,1,9,5,0,0,0],
    [0,9,8,0,0,0,0,6,0],
    [8,0,0,0,6,0,0,0,3],
    [4,0,0,8,0,3,0,0,1],
    [7,0,0,0,2,0,0,0,6],
    [0,6,0,0,0,0,2,8,0],
    [0,0,0,4,1,9,0,0,5],
    [0,0,0,0,8,0,0,7,9]
];

function shuffle(array: any[]): any[] {
    let currentIndex: number = array.length, temporaryValue, randomIndex: number;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

function arrangeBy(array: any[], indexes: number[]): any[] {
    let result: any[] = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = array[indexes[i]];
    }
    return result;
}

function pullThird(array: any[], index: number): any[] {
    if (index === 0)
        return array.slice(0,3);
    else if (index === 1)
        return array.slice(3,6);
    else
        return array.slice(6);
}

function generatePuzzle(): SudokuGrid {
    let puzzle: SudokuGrid = standard.slice();

    // Mix rows
    let rowband1 = shuffle(puzzle.slice(0,3)),
        rowband2 = shuffle(puzzle.slice(3,6)),
        rowband3 = shuffle(puzzle.slice(6)),
        allrows = rowband1.concat(rowband2, rowband3),
        roworder = shuffle([0,1,2]);
    rowband1 = pullThird(allrows, roworder[0]);
    rowband2 = pullThird(allrows, roworder[1]);
    rowband3 = pullThird(allrows, roworder[2]);
    puzzle = rowband1.concat(rowband2, rowband3);

    // Mix columns
    let order1 = shuffle([0,1,2]),
        order2 = shuffle([0,1,2]),
        order3 = shuffle([0,1,2]),
        columnorder = shuffle([0,1,2]);
    for (let arr = 0; arr < puzzle.length; arr++) {
        let columnband1 = arrangeBy(puzzle[arr].slice(0,3), order1),
            columnband2 = arrangeBy(puzzle[arr].slice(3,6), order2),
            columnband3 = arrangeBy(puzzle[arr].slice(6), order3),
            allcolumns = columnband1.concat(columnband2, columnband3);
        columnband1 = pullThird(allcolumns, columnorder[0]);
        columnband2 = pullThird(allcolumns, columnorder[1]);
        columnband3 = pullThird(allcolumns, columnorder[2]);
        puzzle[arr] = columnband1.concat(columnband2, columnband3);
    }

    return puzzle;
}

export default generatePuzzle;