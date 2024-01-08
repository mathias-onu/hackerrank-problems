/*
    Tasks:
    1. Implement a List data structure 
    2. Test the data structure by building a program that simulates a movie-rental 
       store system (partial - built some functions)

*/

class List<Type> {
    private dataStore: Type[]
    private listSize: number
    private pos: number

    constructor() {
        this.dataStore = []
        this.listSize = 0
        this.pos = 0
    }

    append(element: Type) {
        this.dataStore[this.listSize] = element
        this.listSize++
    }

    find(element: Type): number {
        for (let i = 0; i < this.dataStore.length; i++) {
            if (this.dataStore[i] === element) {
                return i
            }
        }

        return -1
    }

    remove(element: Type): boolean {
        const foundAt = this.find(element)
        
        if (foundAt !== -1) {
            this.dataStore.splice(foundAt, 1)
            this.listSize--
            return true
        }

        return false
    }
    
    length(): number {
        return this.listSize
    }

    toArray(): Type[] {
        return this.dataStore
    }

    insert(element: Type, index: number): boolean {
        if (index !== -1 && index <= this.listSize) {
            this.dataStore.splice(index, 0, element)
            this.listSize++
            return true
        } 
        
        throw Error("Index out of bounds")
    }

    clear() {
        this.dataStore = [] 
        this.listSize = this.pos = 0
    }

    contains(element: Type): boolean {
        return this.dataStore.includes(element)
    }

    front() {
        this.pos = 0
    }

    end() {
        this.pos = this.listSize -1
    }

    prev() {
        if (this.pos > 0) {
            this.pos--
        }
    }

    next() {
        if (this.pos < this.listSize) {
            this.pos++
        }
    }

    currPos(): number {
        return this.pos
    }

    moveTo(pos: number) {
        this.pos = pos
    }

    getElement(index?: number): Type {
        return this.dataStore[index ? index : this.pos]
    }
}

class Customer {
    name!: string
    movies!: string

    constructor(name: string, movie: string) {
        this.name = name
        this.movies = movie
    }
}

/*
    Wrote some functions and code examples just to practice and test my List ADT 
*/

const topRatedMovies = [
    'The Shawshank Redemption',
    'The Lord of the Rings: The Return of the King',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Time Changer',
    'The Good, the Bad and the Ugly',
    '12 Angry Men',
    "Schindler's List",
    'The Dark Knight',
    'The Lord of the Rings: The Two Towers',
    'Star Wars: Episode I - The Phantom Menace',
    'Star Wars: Episode V - The Empire Strikes Back',
    'Star Wars: Episode II - Attack of the Clones',
    'The Creator',
    'Inception',
    'Goodfellas',
    'Star Wars',
    'Seven Samurai',
    'The Matrix',
    'Sound of Freedom',
    'Forrest Gump'
]

const movies = new List<string>()
const customers = new List<Customer>()

// Populate the movies list
for (let i = 0; i < topRatedMovies.length; i++) {
    movies.append(topRatedMovies[i])
}

// Log to the console the elements of a given list
function displayList(list: List<string | Customer>) {
    for (list.front(); list.currPos() < list.length(); list.next()) {
        console.log(list.getElement())
    }
}

// Check-out process
function checkOut(customerName: string, movie: string) {
    if (movies.contains(movie)) {
        movies.remove(movie)
        customers.append(new Customer(customerName, movie))
        displayList(customers)
    } else {
        console.log(`"${movie}" is not available.`)
    }
}
