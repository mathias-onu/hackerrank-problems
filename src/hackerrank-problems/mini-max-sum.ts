/*
    Problem:
    Given five positive integers, find the minimum and maximum 
    values that can be calculated by summing exactly four of 
    the five integers. Then print the respective minimum and 
    maximum values as a single line of two space-separated 
    long integers.
*/

function miniMaxSum(arr: number[]): void {
    let arrSum = 0
    let minNum = arr[0]
    let maxNum = arr[0]
    
    for(let i = 0; i < arr.length; i++) {
        if(maxNum < arr[i]) {
            maxNum = arr[i]
        } 
        if(minNum > arr[i]) {
            minNum = arr[i]
        }
        arrSum += arr[i]
    }
    
    console.log(arrSum - maxNum, arrSum - minNum)
}

miniMaxSum([1, 2, 3, 4, 5])