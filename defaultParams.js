function soma(numeros = []) {
    let total = 0;
    numeros.forEach((element) => {
        total += element;
    });
    console.log(total);
}

soma();