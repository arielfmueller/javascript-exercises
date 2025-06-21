const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear()

    let sortedArray = arr
        .map(person => ({
            name: person["name"], 
            age: (person["yearOfDeath"] || currentYear) - person["yearOfBirth"]
        }))
        .sort((a, b) => 
            b.age - a.age
        )
    return sortedArray[0]
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log(findTheOldest(people))



// Do not edit below this line
module.exports = findTheOldest;
