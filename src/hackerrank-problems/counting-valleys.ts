/* 
    The solution is pretty simple - you just need to keep track of 
   the elevation: every time it returns to 0 (and the next index
   is equal to -1/D) you increase the valley counter
*/

function countingValleys(steps: number, path: string): number {
    const pathArr: string[] = path.split('')
    let elevation: number = 0
    let valleyCounter: number = 0

    for (let i = 0; i < pathArr.length; i++) {
        if (i == 0 && pathArr[i] === 'D') valleyCounter++

        if (pathArr[i] === 'D') elevation--
        else elevation++

        if (elevation == 0 && pathArr[i+1] === 'D') valleyCounter++
    }

    return valleyCounter
}

console.log(countingValleys(12, 'DDUUDDUDUUUD'))
// console.log(countingValleys(8, 'UDDDUDUU'))