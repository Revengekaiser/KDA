let nome = document.querySelector('.nome');
let personagem = document.querySelector('.personagem');

function escolherPersonagem(nomePersonagem, imagemPersonagem, corPersonagem) {
    nome.innerHTML = nomePersonagem;
    personagem.src = imagemPersonagem;
    nome.style.color = corPersonagem;
}

