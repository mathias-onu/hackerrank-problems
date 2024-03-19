export const generateArray = (): number[] => {
    const arr: number[] = []
    
    for (let i = 0; i < 50; i++) {
        arr.push(Math.floor(Math.random() * 100))
    }
    
    return arr
}
