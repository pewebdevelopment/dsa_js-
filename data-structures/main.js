const myNumbers = [1, 2, 3, 4, 5];

const squaredNumbers = myNumbers.map((value) => {
    return value * value;
})

const greaterThanThree = myNumbers.filter((value) => {
    return value >= 3;
})

console.log(myNumbers.findIndex((value) => {
    return value === 5;
}))

const students = ["zen", "Athang", "Uday"];
const ages = [24, 26, 23, 27];

const studentsAndAges = students.concat(ages)

console.log(myNumbers.reduce((acc, value, i) => value + acc, 0))
console.log(ages.reduce((acc, value) => acc + value, 100))

const message = "Zen Athang"
