class gato{
    constructor(nome) {
        this._nome = nome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome
    }

    static criarGato(nome){
        return new gato(nome);
    }

    getInfo(){
        return `${this.nome} é um felino`;
    }
}

let cat = new gato("john");
console.log(`Gato: ${cat.nome}`);

cat.nome = "Doe";
console.log(`Gato: ${cat.nome}`);

let newClasse = gato.criarGato("Joao");
console.log(`Gato2: ${newClasse.nome}`);

class cachorro extends gato{
    constructor(nome, raca){
        super(nome);
        this._raca = raca;
    }

    get raca(){
        return this._raca;
    }

    set raca(raca){
        this._raca = raca;
    }

    getInfo(){
        return `${this.nome} é um cão`
    }
}

let dog = new cachorro("Steve", "Pastor");
console.log(`Cão: ${dog.nome}, Raça: ${dog.raca}`);

console.log(`${dog.getInfo()}`);
console.log(`${cat.getInfo()}`);