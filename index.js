export const determineWinner = (gameBoard) => {
    let winner;
    gameBoard.forEach(row => {
        if (checkHorizontal(row)) {
            winner = row[0];
            return winner;
        } else {
            const verticalResults = checkVertical(gameBoard);
            if (verticalResults && verticalResults[0]) {
                winner = verticalResults[1];
                return winner;
            } else {
                const diagonalResults = checkDiagonal(gameBoard);
                if (diagonalResults && diagonalResults[0]) {
                    winner = diagonalResults[1];
                    return winner;
                }
            }
        }
    })
    return winner;
}

export const checkHorizontal = (row) => {
    return row[0] === row[1] && row[1] === row[2];
}

export const checkVertical = (gameBoard) => {
    for(let index = 0; index < 3; index++) {
        if (gameBoard[0][index] === gameBoard[1][index] && gameBoard[1][index] === gameBoard[2][index]) {
            return [true, gameBoard[0][index]];
        }
    }
}

export const checkDiagonal = (gameBoard) => {
    if (gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2] ||
        gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0]) {
            return [true, gameBoard[1][1]];
        }
}