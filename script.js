const imagem = ['#img-1', '#img-2', '#img-3', '#img-4']
const nome = ['#nome-1', '#nome-2', '#nome-3', '#nome-4']

gerarValorAleatorio = () => {
    return Math.floor(Math.random()*671);
}

pegarPersonagem = async (personagem) => {
    const Response = await fetch(`https://rickandmortyapi.com/api/character/${personagem}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "content-type": 'application/json'
        }
    });
    const data = await Response.json(); 
    return data;
}

exibirPersonagem = async () => {
    for (let index = 0; index <= 3; index++) {
        const elementIMG = document.querySelector(imagem[index]);
        const elementNome = document.querySelector(nome[index]);
        let personagem = gerarValorAleatorio();
        let resposta = await pegarPersonagem(personagem);
        elementIMG.src = resposta.image;
        elementNome.innerHTML = resposta.name;
    }
}

exibirPersonagem()



