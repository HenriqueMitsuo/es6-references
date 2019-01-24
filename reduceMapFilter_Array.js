let values = [1, 2, 3, 4, 5];
console.log(values);

let soma = values.reduce((a, b) => a + b);
console.log(soma);

let impar = values.filter(v => v % 2 != 0);
console.log(impar);

let par = values.filter(v => v % 2 == 0);
console.log(par);

let dobro = values.map(v => v * 2);
console.log(dobro);