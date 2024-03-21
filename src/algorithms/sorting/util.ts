export const generateArray = (maxLength: number): number[] => {
    const arr: number[] = []
    
    for (let i = 0; i < maxLength; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    
    return arr
}
