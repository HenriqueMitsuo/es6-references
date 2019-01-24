// FUNÇÂO COMUM
// function soma(...numeros) {
//   let total = numeros.reduce(function (x, y) {
//     return x * y;
//   });
//   console.log(total);
// }

// ARROW FUNCTION
function soma(...numeros) {
    let total = numeros.reduce((x, y) =>  x * y);
    console.log(total);
}

soma(5, 5);
