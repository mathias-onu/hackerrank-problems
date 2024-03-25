const recursiveFibonacci = (n: number): number => {
    if (n < 2) return n
    else return recursiveFibonacci(n-1) + recursiveFibonacci(n-2)
}

const dynamicFibonacci = (n: number): number => {
    const values: number[] = []

    for (let i = 0; i < n + 1; i++) values[i] = 0

    if (n === 1 || n === 2) return n
    else {
        values[1] = 1
        values[2] = 1
        
        for (let i = 3; i < values.length; i++) {   
            values[i] = values[i - 1] + values[i - 2]
        }
    }
    
    return values[n]
}
