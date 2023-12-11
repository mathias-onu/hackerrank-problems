/*
    Problem:
    There are two n element arrays of integers A and B . Permute them into some A' and
    B' such that the relation A'[i] + B'[i] >= k holds for all i where 0 <= i < n.

    There will be q queries consisting of A, B, and k. For each query, return YES 
    if some permutation A', B' satisfying the relation exists. Otherwise, return NO.
*/

function twoArrays(k: number, A: number[], B: number[]): string {
    A.sort((a, b) => a - b)
    B.sort((a, b) => b - a)
    
    for(let i = 0; i < A.length; i++) {
        if(A[i] + B[i] < k) {
            return "NO"
        }
    }
    
    return "YES"
}

console.log(twoArrays(10, [2, 1, 3], [7, 8, 9]))
console.log(twoArrays(5, [1, 2, 2, 1], [3, 3, 3, 4]))