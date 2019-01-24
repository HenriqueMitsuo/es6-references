const informacao = {
    nome: "John",
    sobrenome: "Doe",
    cidade: "São Paulo",
    bairro: "Centro"
};

// const { nome, sobrenome } = informacao;
// console.log(`${nome} ${sobrenome}`);

const { nome: nm, sobrenome: snm } = informacao;
console.log(`${nm} ${snm}`);