export type SudokuGrid = number[][];

function isValid(grid: SudokuGrid, row: number, col: number, num: number): boolean {
    for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) {
            return false;
        }
    }

    const startRow = row - row % 3;
    const startCol = col - col % 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (grid[i + startRow][j + startCol] === num) {
                return false;
            }
        }
    }

    return true;
}

function cloneGrid(grid: SudokuGrid): SudokuGrid {
    return grid.map(row => [...row]);
}

function solveSudoku(grid: SudokuGrid): SudokuGrid | null {
    const currentGrid = cloneGrid(grid);
    if (solve(currentGrid)) {
        return currentGrid;
    } else {
        return null;
    }
}

function solve(grid: SudokuGrid): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (grid[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (isValid(grid, row, col, num)) {
                        grid[row][col] = num;
                        if (solve(grid)) {
                            return true;
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

export default solveSudoku;