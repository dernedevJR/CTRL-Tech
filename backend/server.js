// Carregar o módulo, que por sua vez retorna uma função.
const express = require('express');
// Recebe a função que vem do módulo 'express'.
const app = express();

// Rotas (caminhos)
app.get("/", (req,res)=>{
    res.send("Olá mundo!");
});






// Coloca o site para rodar 
app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
})
//localhost:3000