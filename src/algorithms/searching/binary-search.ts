const nums: number[] = [-5, 2, 3, 4, 6, 10, 15]

// Iterative approac
const binarySearch = (nums: number[], n: number): number => {
    let l = 0
    let r = nums.length - 1
    let mid!: number

    while (r >= l) {
        mid = l + Math.floor((r - l) / 2)

        if (n === nums[mid]) return mid
        else if (n < nums[mid]) r = mid - 1
        else if (n > nums[mid]) l = mid + 1
    }
    
    return -1
}

// Recursive approach
const recBinarySearch = (nums: number[], l: number, r: number, n: number): number => {
    while (r >= l) {
        let mid = l + Math.floor((r - l) / 2)

        if (n === nums[mid]) return mid
        else if (n < nums[mid]) return recBinarySearch(nums, l, mid - 1, n)
        else if (n > nums[mid]) return recBinarySearch(nums, mid + 1, r, n)
    }   
    
    return -1
}

console.log(recBinarySearch(nums, 0, nums.length - 1, -5))