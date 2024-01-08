/*
    Problem:
    Given a square matrix, calculate the absolute difference between the sums 
    of its diagonals.
*/

function diagonalDifference(arr: number[][]): number {
    const matrixLength = arr.length
    let firstDiagonalSum = 0
    let secondDiagonalSum = 0
    
    for(let i = 0; i < matrixLength; i++) {
        for(let j = 0; j < matrixLength; j++) {
            if(i == j) {
                firstDiagonalSum += arr[i][j]
            } 
            
            if(i + j == matrixLength - 1) {
                secondDiagonalSum += arr[i][j]
            }
        }
    }
    
    return Math.abs(firstDiagonalSum - secondDiagonalSum)
}

console.log(diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]))