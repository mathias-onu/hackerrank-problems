import { generateArray } from "./util"

const selectionSort = (arr: number[]): number[] => {
    for (let i = 0; i < arr.length; i++) {
        let min: number = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        if (i !== min) {
            const temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }

    return arr
}

console.log(selectionSort(generateArray()))
