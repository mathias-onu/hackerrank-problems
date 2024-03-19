const numbers: number[] = [-5, 2, 10, 4, 6]

// Linear time complexity - O(n)
const linearSearch = (nums: number[], n: number): number => {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === n) return i
    }
    return -1
}

console.log(linearSearch(numbers, 4))