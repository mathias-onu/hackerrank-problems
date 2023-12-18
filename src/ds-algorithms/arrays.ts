/*  EXERCISE 1:

    Create a "grades" object that stores a set of student grades in an object.
    Provide a function for adding a grade and a function for displaying the student's
    grade average. 
*/

class Grades {
    grades!: number[]

    constructor(grades: number[]) {
        this.grades = grades
    }

    add(grade: number) {
        this.grades.push(grade)
    }

    average(): number {
        let total: number = 0

        for(let i = 0; i < this.grades.length; i++) {
            total += this.grades[i]
        }

        return total / this.grades.length
    }
}

const studentGrades = new Grades([90, 90])
studentGrades.add(30)
// console.log(studentGrades.average())


/*  EXERCISE 2:

    Store a set of words in an array and display the contents 
    both forward and backward. 
*/

const words = ["apple", "orange", "banana", "mango"]

// displays the contents foward
// console.log(words)

// displays the contents (words) backwards
// console.log(words.map(word => reverseString(word)))

// displays both the contents (words) backwards and reverses the order
// console.log(words.map(word => reverseString(word)).reverse())

// didn't quite understand the prompt so I also created a function to reverse a string
function reverseString(string: string) {
    return string.split('').reverse().join('')
}


/*  EXERCISE 3:

    Modify the "weekTemps" object in the chapter so that it stores a month's worth
    of data using a two-dimensional array. Create functions to display the monthly
    average, a specific week's average, and all the week's averages.

    NOTE: we assume that we're working with months containing 4 weeks of 7 days
          and the input data respects these constraints.
*/

class MonthTemps {
    data!: number[][]

    constructor(monthData: number[][]) {
        this.data = monthData
    }

    monthAverage(): number {
        let total = 0
        let average = 0
        let weekNum = this.data.length
        let dayNum = this.data[0].length

        for(let week = 0; week < this.data.length; week++) {
            for(let day = 0; day < this.data[week].length; day++) {
                total += this.data[week][day]
            }
        }

        average = total / (weekNum * dayNum)

        return Number(average.toFixed(2))
    }

    weekAverage(weekIndex: number): number {
        let total = 0
        let average = 0
        const week = this.data[weekIndex]

        for(let day = 0; day < week.length; day++) {
            total += week[day]
        }

        average = total / week.length

        return Number(average.toFixed(2))
    }

    allWeeksAverage(): number {
        let allWeekTemps = 0
        let average = 0
        
        for(let week = 0; week < this.data.length; week++) {
            allWeekTemps += this.weekAverage(week)
        }

        average = allWeekTemps / this.data.length

        return Number(average.toFixed(2))
    }
}

const decemberTemps = new MonthTemps([[0, 5, 3, 1, 1, 4, 6], [2, 1, 3, 4, 6, 0, 0], [3, 1, 1, 0, 1, 3, 4], [4, 6, 4, 3, 2, 1, 0]])
decemberTemps.monthAverage()
decemberTemps.weekAverage(3)
decemberTemps.allWeeksAverage()


/*  EXERCISE 4:

    Create an object that stores individual letters in an array and has a function
    for displaying the letters as a single word.
*/

class Letters {
    letters!: string[]

    constructor(word: string) {
        this.letters = word.split('')
    }

    singleWord(): string {
        return this.letters.join('')
    }
}

const animal = new Letters('dog')
animal.singleWord()