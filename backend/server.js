// Carregar o módulo, que por sua vez retorna uma função.
const express = require('express');
// Recebe a função que vem do módulo 'express'.
const app = express();

// Middleware 
app.use(express.urlencoded({extended:true}))

// Enviar-dados
app.post("/enviar-dados", (req, res) => {
    const nome = req.body.nome
    console.log(`Nome: ${nome}`);
})




// Motorzinho 
app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
})