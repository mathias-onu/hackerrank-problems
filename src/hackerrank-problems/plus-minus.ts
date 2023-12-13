/*  Problem:
    Given an array of integers, calculate the ratios of its 
    elements that are positive, negative, and zero. Print the 
    decimal value of each fraction on a new line with places 
    after the decimal.
*/

function plusMinus(arr: number[]): void {
    const numOfElements = arr.length
    let positiveElements = 0
    let negativeElements = 0
    let zeroElements = 0
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            positiveElements++
        } else if(arr[i] < 0) {
            negativeElements++
        } else {
            zeroElements++
        }
    }
    
    console.log(positiveElements / numOfElements)
    console.log(negativeElements / numOfElements)
    console.log(zeroElements / numOfElements)
}

plusMinus([0, 0, -1, 1, 1])