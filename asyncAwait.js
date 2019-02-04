const apiUrl = "https://jsonplaceholder.typicode.com/todos";

// // ASYNC AWAIT
async function getTop100Campers() {
    // FETCH API
    const response = await fetch(apiUrl);
    const json = await response.json();

    console.log(json[0]);
}

// //PROMISES
// function getTop100Campers() {
//     fetch(apiUrl)
//         .then((r) => r.json())
//         .then((json) => {
//             console.log(json[0])
//         })
//         .catch((err) =>{
//             console.log('Falha');
//         });
// }

getTop100Campers();