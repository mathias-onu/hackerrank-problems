function divisibleSumPairs(n: number, k: number, ar: number[]): number {
    let countOfPairs: number = 0

    for (let i = 0; i < n; i++) {
        for (let j = i+1; j < n; j++) {
            if (i < j && (ar[i] + ar[j]) % k == 0) {
                countOfPairs += 1
            }
        }
    }

    return countOfPairs
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]))
