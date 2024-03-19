const bubbleSort = (arr: number[]): number[] => {
    let sorted = false

    while (!sorted) {
        sorted = true
        for (let i = 0; i < arr.length; i++) {
            const temp = arr[i]
            if (arr[i] > arr[i + 1]) {
                arr[i] = arr[i + 1]
                arr[i + 1] = temp
            }
        }
    }

    return arr
}
