class Stack<Type> {
    dataStore!: Type[]

    constructor() {
        this.dataStore = []
    }
    
    push(element: Type): void {
        this.dataStore.push(element)
    }

    pop(): Type | undefined {
        return this.dataStore.pop()
    }

    peek(): Type | undefined {
        return this.dataStore[this.size() - 1]
    }

    size(): number {
        return this.dataStore.length
    }

    clear(): void {
        this.dataStore = []
    }
}

const initialDispenser = new Stack<string>()
const finalDispenser = new Stack<string>()

initialDispenser.push('red')
initialDispenser.push('yellow')
initialDispenser.push('white')
initialDispenser.push('black')

console.log('Initial order: ', initialDispenser.dataStore)

const tempArr = []
while (initialDispenser.peek() !== undefined) {
    if (initialDispenser.peek() !== 'yellow') {
        tempArr.push(initialDispenser.peek()!)
    }
    initialDispenser.pop()
}

for (let i = tempArr.length-1; i >= 0; i--) {
    finalDispenser.push(tempArr[i])
}

console.log('Final dispenser: ', finalDispenser.dataStore)
