async function getPost() {
    const resposta = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    const data = await resposta.json();

    let output = '';
    for(let post of data){
        output += `
            <li>
                <h4>Title: ${post.title}</h4>
                <h5>ID: ${post.id}</h5>
                <p>body: ${post.body}</p>
            </li>
        `;
    }

    document.getElementById('lista').innerHTML = output;
}

getPost();