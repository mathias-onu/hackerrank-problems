function marsExploration(s: string): number {
    const sosArr = []
    let letterCount = 0

    for (let i = 0; i < s.length / 3; i++) {
        let currIndex = i
        sosArr.push(s.slice(currIndex*=3, currIndex+3))
    }

    sosArr.forEach(sos => {
        if (sos.charAt(0) !== 'S') letterCount++
        if (sos.charAt(1) !== 'O') letterCount++
        if (sos.charAt(2) !== 'S') letterCount++
    })

    return letterCount
}

console.log(marsExploration('SOSSPSSQSSOR'))
