/*
    Problem:
    Given a list of integers, count and return the number of times each value 
    appears as an array of integers (using counting sort 1 algorithm).
*/

function countingSort(arr: number[]): number[] {
    // Write your code here
    const countOfNumbers = new Array(100).fill(0, 0)
    
    for(let i = 0; i < arr.length; i++) {
        countOfNumbers[arr[i]]++
    }
    
    return countOfNumbers
}

console.log(countingSort([1, 1, 3, 2, 1]))