// Hash Table - Hash Map (Java) - Map - Dictionary (Python) - Associative Array (C++)
// Hash Table is a collection of key value pairs
// Time complexity for getting any value is O(1)

const myObj = {
    name: "Zen",
    name: "Umair"
}

console.log(myObj.name)

const person = {}

const myMap = new Map()

myMap.set("name", "Zen");
myMap.set("name", "Umair")
myMap.set(person, "empty obj");

console.log(myMap.get(person))


// KEY =======> HASHING FUNCTION =========> VALUE
// NAME =======> MAKE A HASH ========> MEMORY ADDRESS FOR NAME VALUE


// Some times, hashing function can generate same hash for two different keys and this phenomena is called collision

// For handling collisions, we have two methods. 1- Separate Chaining   2- Open Addressing

// ___  ["Umair", 23]