class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const hashBoard = new Set()
        for (const r of board) {
            for (const n of r) {

                if (n === '.') continue;

                if (hashBoard.has(n)) {
                    return false
                }
            
                hashBoard.add(n)
            }

            hashBoard.clear()
        }


        for (let i = 0; i < board.length; i++) {
            
            for (let j = 0; j < board.length; j++) {
                const columnN = board[j][i]
                
                if (columnN === '.') continue;

                if (hashBoard.has(columnN)) {
                    return false
                }

                hashBoard.add(columnN)
            }

            hashBoard.clear()
        }


        for (let rowStart = 0; rowStart < 9; rowStart += 3) {

            for (let colStart = 0; colStart < 9; colStart += 3) {

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        const xy = board[rowStart + i][colStart + j]

                        if (xy === '.') {
                            continue;
                        }

                        if (hashBoard.has(xy)) {
                            return false
                        }

                        hashBoard.add(xy)
                    }
                }

                hashBoard.clear()
            }
        }


        return true    
    }
}
