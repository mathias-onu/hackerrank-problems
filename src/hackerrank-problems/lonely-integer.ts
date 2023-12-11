/*
    Problem:
    Given an array of integers, where all elements but one occur twice, 
    find the unique element.
*/

function lonelyinteger(a: number[]): number {
    for(let i: number = 0; i < a.length; i++) {
        if(a.indexOf(a[i]) == a.lastIndexOf(a[i])) {
            return a[i]
        }
    }

    // Returns 0 if not lonely integers present
    return 0
}

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]))
