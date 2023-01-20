const people = [
    { name: 'Важа', age: 25, budget: 40000 },
    { name: 'Олюшка', age: 17, budget: 3400 },
    { name: 'Игорь', age: 49, budget: 50000 },
    { name: 'Михаил', age: 15, budget: 1800 },
    { name: 'Василиса', age: 24, budget: 25000 },
    { name: 'Виктория', age: 38, budget: 2300 }
];


// const Olga = people.find(person => person.name === 'Олюшка');
// console.log(Olga)

// 1)  for let i (КЛАСИКА)
//
//   for (let i = 0; i < people.length; i++) {
//     console.log(people[i]);
// }

// 2) for  of
//
//
// for (const person of people) {
//     console.log(person);
// }
//
//
// 3) forEach  (просто перебрать без прерівания)
//

//    people.forEach(function (person, index, peopleArray) {
//      console.log(person);
    
//    console.log(index);           //  редко

//    console.log(peopleArray);     //  очень редкоб єтот же масив "people" повторили столько раз,

//    });

// people.forEach(person => console.log(person))
//
//4) Map   ( когда надо вернуть масив обьектов, елементов чего угодно)
//  flatMap тоже масив но ещ' разглаживает

// Map
// "(Имя и возраст)  в масиве
// const newPeople = people.map(person => {
//     return person.name;
// });

// console.log(newPeople);


// [
//     ' имя Важа возраст 25 ',
//     ' имя Олюшка возраст 17 ',
//     ' имя Игорь возраст 49 ',
//     ' имя Михаил возраст 15 ',
//     ' имя Василиса возраст 24 ',
//     ' имя Виктория возраст 38 '
// ];

// const ageMultiplyThree = people.map(person => person.age * 3);
// console.log(ageMultiplyThree);

// [75, 51, 147, 45, 72, 114]
//
//
// 5) Filter

//  класика
// let adults = [];
// for (let i = 0; i < people.length; i++) {
//     if (people[i].age >= 18) {
//         adults.push(people[i]);
//     }
    
// };
//  короче
// const adults = people.filter(person => {
//     if (person.age >= 18) {
//         return true
//     }
// })

// лучший вариант
// const adults = people.filter(peron => peron.age >= 18);


// console.log(adults);
// 6) Reduce    надо всегда ставить начальное значение
// Класика подсумировать бюджет всех работников
// let total = 0;
// for (let i = 0; i < people.length; i++) {
//     total += people[i].budget;
    
// }
// console.log(total);


// const total = people.reduce((acc, person) => acc + person.budget, 0);

// console.log(total);

// 6) Find
 
// const Olga = people.find(person => person.name === 'Олюшка');
// console.log(Olga)

// 7) FindIndex

 
// const OlgaIndex = people.findIndex(person => person.name === 'Олюшка');
// console.log(OlgaIndex)

// 8) sort() Method
// сортирует (масив обьектов, числа или строки),
//  мутирует єлемент, всегда лучше спред вначале накинуть
// 1) Масив объектов в алфавитном порядке по его именам
// const sortedPeople = [...people]
//   .sort((firstPerson, secondPerson) => firstPerson.name.localeCompare(secondPerson.name))
// console.log(sortedPeople)
// 2) Масив объектов по ворзрастанию свойства age 
// const sortedPeople = [...people]
//   .sort((firstPerson, secondPerson) => firstPerson.age - secondPerson.age)
//   console.log(sortedPeople)

// =========================================================== //

// Цепоочка //
// const amount = 
// people
//     .filter(person => person.budget > 3000)
//     .map(person => {
//       return {
//         info: `${person.name} (${person.age})`,
//         budget: Math.sqrt(person.budget)
//       }
//     })
//     .reduce((acc, person) => acc + person.budget, 0)

//     console.log(amount)






