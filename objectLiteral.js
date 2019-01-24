function criarEndereco(cidade, estado) {
  // const novoEndereco = {novaCidade: cidade, novoEstado: estado};
  return {
    cidade,
    estado,
    getInfo() {
      return console.log(`Cidade: ${this.cidade}, Estado: ${this.estado}`);
    }
  };
}

var local = criarEndereco("Registro", "São Paulo");
local.getInfo();

console.log(criarEndereco('Jacupiranga', 'São Paulo'));
