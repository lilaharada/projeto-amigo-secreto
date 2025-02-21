//teste 0

let amigos = [];

function adicionarAmigo(){
    const inputNome = document.getElementById('amigo');
    const nome = inputNome.value.trim();

    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    else if (amigos.includes(nome)) {
        alert("Este nome já foi adicionado à lista.");
        return;
    } 
    
    else {
        amigos.push(nome);
        atualizarListaAmigos();
        inputNome.value = "";
    }
    
function atualizarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    let novoItem = document.createElement('li');
    novoItem.textContent = nome;
    lista.appendChild(novoItem);
    limparCampo();        
    }
}

function exibirTexto(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirNomes(){
    exibirTexto('p', amigos.join("<br>"));
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value="";
}

function sortearAmigo(){
    if(amigos.length > 2) {
        alert("Adicione pelo menos dois amigos para realizar o sorteio");
        return;

    } else {
        let sorteado = Math.floor(Math.random() * amigos.length);
        return mostrarSorteado(sorteado);
    }
}

function mostrarSorteado(sorteado) {
    let lista = document.getElementById('resultado');
    let novoItem = document.createElement('li');
    novoItem.textContent = `O sorteado foi: ${amigos[sorteado]}`;
    lista.appendChild(novoItem);
    
}
