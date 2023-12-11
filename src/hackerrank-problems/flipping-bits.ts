/*
    Problem:
    You will be given a list of 32 bit unsigned integers. Flip all the bits 
    (1 -> 0 and 0 -> 1) and return the result as an unsigned integer.
*/

function flippingBits(n: number): number {
    return (2**32)-1-n
}

console.log(flippingBits(2147483647))