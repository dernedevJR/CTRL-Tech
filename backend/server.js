// Carregar o módulo, que por sua vez retorna uma função.
const express = require('express');
// Recebe a função que vem do módulo 'express'.
const app = express();

// Rota POST 

app.post("/enviar-dados", (req , res) => {
    res.send("Olá mundo!!")
});

// Motorzinho 
app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
})