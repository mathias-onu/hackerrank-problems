/*
    Problem:
    Two children, Lily and Ron, want to share a chocolate bar. Each of the squares 
    has an integer on it.

    Lily decides to share a contiguous segment of the bar selected such that:
    - The length of the segment matches Ron's birth month, and,
    - The sum of the integers on the squares is equal to his birth day.
    
    Determine how many ways she can divide the chocolate.
*/

function birthday(s: number[], d: number, m: number): number {
    let numOfDividedWays: number = 0
    
    for(let i = 0; i < s.length; i++) {
        const subArr = s.slice(i, i+m)
        const subArrSum = subArr.reduce((a, b) => a+b)
        if(subArrSum == d) {
            numOfDividedWays++
        }
    }
    
    return numOfDividedWays
}

console.log(birthday([2, 2, 1, 3, 2], 4, 2))