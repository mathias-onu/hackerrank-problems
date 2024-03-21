import { generateArray } from "./util"

const insertionSort = (arr: number[]): number[] => {
    for (let i = 1; i < arr.length; i++) {
        let elementToInsert = arr[i]
        let j = i - 1
        while (j >= 0 && arr[j] > elementToInsert) {
            arr[j + 1] = arr[j]
            arr[j] = elementToInsert
            j--
        }
    }

    return arr
}

console.log(insertionSort(generateArray(50)))
