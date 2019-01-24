// function criarEndereco(endereco) {
//     const novoEndereco = {
//         cidade: endereco.cidade,
//         estado: endereco.estado,
//         pais: 'Brasil'
//     }
//     console.log(novoEndereco);
// }

// criarEndereco({cidade: 'Registro', estado: 'São Paulo'});

function criarEndereco(endereco) {
    // OBJECT DESTRUCTURING
    const {cidade, estado} = endereco;
    // OBJECT LITERAL
    const novoEndereco = {
        cidade,
        estado,
        pais: 'Brasil'
    }
    // TEMPLATE LITERALS
    console.log(`Cidade: ${novoEndereco.cidade}, Estado: ${novoEndereco.estado}, Pais: ${novoEndereco.pais}`);
}

criarEndereco({ cidade: 'Registro', estado: 'São Paulo' });