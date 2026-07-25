const form = document.querySelector('.formulary');
const nome = document.querySelector('.name');

form.addEventListener("submit", function (e) {

    valor = nome.value.trim();
    mensagem = document.getElementById('elementoJs')

    if (valor === '') {
        mensagem.classList.remove('sucesso');
        mensagem.classList.add('erro');
        mensagem.innerText = '⚠ Preencha o campo com o seu nome';

    }
    else {
        mensagem.classList.remove('erro');
        mensagem.classList.add('sucesso');
        mensagem.innerText = 'Sucesso!';
    }

    e.preventDefault();
});
nome.addEventListener('input', () => {
    mensagem.innerText = ''
})
