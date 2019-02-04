// // PROMESSA 1
// let promessa = Promise.resolve('Foo');

// promessa.then((response) => console.log(response));


// // EXEMPLO 2
// let promessa = new Promise(function(resolve, reject) {
//    setTimeout(() => resolve(4), 2000); 
// });

// promessa
//     .then((response) => {
//         response += 4;
//         console.log(response);
//     });

function getData(method, url) {
    //CRIA UMA NOVA PROMESSA
    return new Promise(function(resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function() {
            if(this.status >= 200 && this.status < 300){
                resolve(xhr.response);
            }
            else{
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
        };
        xhr.onerror = function() {
            reject({
                status: this.status,
                statusText: xhr.statusText
            });
        };
        xhr.send();
    });
}


getData("GET", "https://jsonplaceholder.typicode.com/todos")
    // SÓ IRA CONTINUAR('then') SE O METODO getData() FUNCIONAR 
    .then(function(data){
        let todos = JSON.parse(data);
        let output = '';
        for(let todo of todos){
            output += `
                <li>
                    <h3>${todo.title}</h3>
                    <p>Completed: ${todo.completed}</p>
                </li>
            `;
        }
        document.getElementById('template').innerHTML = output;
    })
    .catch(function(err){
        console.log(err);
    });