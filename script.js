const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

//Dit laat alle informatie zien
// for (let person of array) {
//     console.log(person)
// }

// Dit laat naam zien + voorgaande tekst
// for (let person of array) {
//     console.log("Zijn naam is", [person.name])
// }

// Dit laat geboortedatum zien
// for (let person of array) {
//     console.log(2021 - person.age)
// }

// Dit laat naam + 'tekst' + beroep zien
// for (let person of array) {
//     console.log([person.name], " is een ", [person.profession])
// }

// If statement voor alle personen > 50 jaar
for (let person of array) {
    if (person.age >= 50)
        console.log([person.name], [person.age])

}
