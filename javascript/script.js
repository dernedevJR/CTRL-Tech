// Declaração de Variáveis 
const form = document.querySelector(".formulary");
const nome = document.querySelector(".name");
// const email = document.querySelector(".email");
// const cel = document.querySelector(".cel"); 
// const service = document.querySelector(".service");
const mensagem = document.querySelector(".elementoJs");

// Validar o Campo 

function validarCampo(campo){
    const valor = campo.value.trim();

    if(valor === ''){
        return false;
    } 

    else{
        return true;
    }
}

// Validação do Formulário 
form.addEventListener("submit", (e) => {
    e.preventDefault()
    
    if(validarCampo(nome)){
        mensagem.classList.remove('erro');
        mensagem.classList.add('sucesso');
        mensagem.textContent = 'Sucesso!';
    }
    else{
        mensagem.classList.remove('sucesso');
        mensagem.classList.add('erro');
        mensagem.textContent = '⚠ Favor preencha o campo!';
    }
})

