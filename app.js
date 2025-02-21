let amigos = []; 
let nomeAmigo;

function adicionarAmigo() {
    nomeAmigo = document.getElementById("amigo").value;

    if (nomeAmigo.trim() === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    
    if (amigos.includes(nomeAmigo)) {
        alert("Este nome já foi adicionado. Por favor, insira um nome diferente.");
        return; 
    }
    
    amigos.push(nomeAmigo);
    document.getElementById("amigo").value = "";
    atualizarListaAmigos();
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; 

    for (let amigo of amigos) {
        let novoItemLista = document.createElement("li");
        novoItemLista.textContent = amigo;
        listaAmigos.appendChild(novoItemLista);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos para realizar o sorteio.");
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];

    document.getElementById("resultado").innerHTML = `O amigo sorteado é: ${amigoSorteado}`;
}
