let p1 = Promise.resolve("Resolve");
p1.then((res) => console.log(`${res}`));

let p2 = new Promise(function (resolve, reject){
    setTimeout(() => resolve(`Resolve 2`), 2000);
});

p2.then((res) => console.log(`${res}`));

let value = 10;

let p3 = new Promise(function (resolve, reject){
    if (value == 5) {
        resolve("Valor correto");
    }
    else{
        reject("Valor incorreto");
    }
});

p3.then((val) => console.log(`${val}`),
(err) => console.log(`${err}`));

let idade = 15;

let p4 = new Promise((resolve, reject) => {
    if (idade <= 17) {
        reject('Não pode entrar!');
    } else {
        resolve('Pode entrar');
    }
});

p4.then((val) => console.log(`${val}`),(err) => console.log(`${err}`));
