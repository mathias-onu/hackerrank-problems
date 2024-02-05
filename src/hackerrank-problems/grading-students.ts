function gradingStudents(grades: number[]): number[] {
    const roundedGrades: number[] = grades.map(grade => {
        return grade >= 38 && grade % 5 >= 3 ? grade += (5 - (grade % 5)) : grade
    })

    return roundedGrades
}

console.log('before: ', [4, 73, 67, 38, 33])
console.log('rounded: ', gradingStudents([4, 73, 67, 38, 33]))