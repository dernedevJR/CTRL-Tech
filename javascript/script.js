// Declaração de Variáveis 
const form = document.querySelector(".formulary");
const nome = document.querySelector(".name");
const email = document.querySelector(".email");
const cel = document.querySelector(".cel"); 
const service = document.querySelector(".service");
const msgname = document.querySelector(".msgname");
const msgemail = document.querySelector(".msgemail");
const msgcel = document.querySelector(".msgcel");
const msgservice = document.querySelector(".msgservice");

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
        msgname.classList.remove('erro');
        nome.classList.add('sucesso');
    }
    else{
        nome.classList.remove('sucesso');
        nome.classList.add('erro')
        msgname.classList.add('msgerro');
        msgname.textContent = '⚠ Favor preencha o campo!';
    }

       
    if(validarCampo(email)){
        msgemail.classList.remove('msgerro');
        email.classList.add('sucesso');
    }
    else{
        email.classList.remove('sucesso');
        email.classList.add('erro')
        msgemail.classList.add('msgerro');
        msgemail.textContent = '⚠ Favor preencha o campo!';
    }

       if(validarCampo(cel)){
        msgcel.classList.remove('msgerro');
        cel.classList.add('sucesso');
    }
    else{
        cel.classList.remove('sucesso');
        cel.classList.add("erro")
        msgcel.classList.add('msgerro');
        msgcel.textContent = '⚠ Favor preencha o campo!';
    }

    if(validarCampo(service)){
        service.classList.remove('msgerro');
        service.classList.add('sucesso');
    }
    else{
        service.classList.remove('sucesso');
        service.classList.add('erro');
        msgservice.classList.add('msgerro');
        msgservice.textContent = '⚠ Favor preencha o campo!';
    }
})

nome.addEventListener("input", () => {
    msgname.textContent = '';
})

email.addEventListener("input", () => {
    msgemail.textContent = '';
})

cel.addEventListener("input", () => {
    msgcel.textContent = '';
})

service.addEventListener("input", () => {
    msgservice.textContent = ''; 
})

