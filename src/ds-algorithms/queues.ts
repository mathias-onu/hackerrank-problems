class Queue<T> {
    protected dataStore!: T[]

    constructor(elements?: T[]) {
        this.dataStore = elements !== undefined ? [...elements] : []
    }

    enqueue(element: T): void {
        this.dataStore.push(element)
    }

    dequeue(): T | undefined {
        return this.dataStore.shift()
    }

    front(): T | undefined {
        return this.dataStore[0]
    }

    back(): T | undefined {
        return this.dataStore[this.dataStore.length-1]
    }

    toArray(): T[] | undefined {
        return this.dataStore
    }

    isEmpty() {
        if (this.dataStore.length === 0) {
            return true
        } else {
            return false
        }
    }

    clear() {
        this.dataStore = []
    }
}

// EXAMPLE: radix sort of 2 sets of numbers using queues
const nums: number[] = [35, 91, 46, 76, 11, 99]
const queues: Queue<number>[] = []

// initialize queue for each digit
for (let i = 0; i < 10; i++) {
    queues.push(new Queue<number>())
}

// distribute the nums into respective queues
/** 
    * @param nums - the array of numbers to be sorted
    * @param queues - queues for each digit
    * @param digit - 1s or 10s decimal based 
**/
function distribute(nums: number[], queues: Queue<number>[], digit: number) {
    for (let i = 0; i < nums.length; i++) {
        // sort the 1s queue
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i])
        } else {
            // sort the 10s queue
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
        }
    }
}

// collect and join the distributed digits back into a nums array
function collect(queues: Queue<number>[], nums: number[]) {
    let j = 0
    for (let i = 0; i < queues.length; i++) {
        while (!queues[i].isEmpty()) {
            nums[j++] = queues[i].dequeue()!
        }
    }
}

// sort by 1st position
distribute(nums, queues, 1)
collect(queues, nums)

// sort by 10th position
distribute(nums, queues, 10)
collect(queues, nums)
// console.log(nums)


// EXAMPLE: hospital patients queue using priority queues

class Patient {
    name!: string
    code!: number

    constructor(name: string, code: number) {
        this.name = name
        this.code = code
    }
}

class PriorityQueue extends Queue<Patient> {
    protected dataStore!: Patient[]

    constructor() {
        super()
    }

    dequeue(): Patient | undefined {
        let priority = this.dataStore[0].code
        let index = 0
        for (let i = 1; i < this.dataStore.length; i++) {
            if (this.dataStore[i].code < priority) index = i
        }

        return this.dataStore.splice(index, 1)[0]
    }
}

const patients = new PriorityQueue()
patients.enqueue(new Patient('Edu', 2))
patients.enqueue(new Patient('Somebody', 2))
patients.enqueue(new Patient('Deni', 5))
patients.enqueue(new Patient('Sebi', 4))
patients.enqueue(new Patient('David', 1))
patients.enqueue(new Patient('Filip', 3))
console.log(patients.toArray())
patients.dequeue()
console.log(patients.toArray())
patients.dequeue()
console.log(patients.toArray())
patients.dequeue()
console.log(patients.toArray())
patients.dequeue()
console.log(patients.toArray())
