let exemplo1 = [1, 2, 3, 4, 5, 6];
let exemplo2 = [...exemplo1];

exemplo2.push(true);
exemplo1.push(7);

console.log(exemplo1);
console.log(exemplo2);

// let exemplo1 = {
//     nome: 'John'
// };

// let exemplo2 = {
//     ...exemplo1
// }

// exemplo2 = {nome: 'John'}