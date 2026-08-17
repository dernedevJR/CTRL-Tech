// Carregar o módulo, que por sua vez retorna uma função.
const express = require('express');
// Recebe a função que vem do módulo 'express'.
const app = express();
// Traz a biblioteca para o server
const sqlite3 = require('sqlite3').verbose();
// Conecta o servidor ao Database
const db = new sqlite3.Database('./database/form.db')

// Middleware 
app.use(express.urlencoded({extended:true}))
// Preencher DATABASE 
db.run(`
  CREATE TABLE IF NOT EXISTS solicitacoes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT,
    celular TEXT,
    servico TEXT, 
    descricao TEXT 
  )`
)

// Enviar-dados
app.post("/enviar-dados", (req, res) => {
    const nome = req.body.nome;
    const email = req.body.email;
    const tel = req.body.tel;
    const servico = req.body.servico;
    const descricao = req.body.descricao;
    
    db.run(`
      INSERT INTO solicitacoes (nome,email,celular,servico,descricao) 
      VALUES (?, ?, ?, ? , ?) `,
       [nome, email, tel, servico, descricao],
      function(err){
        if(err){
          console.error(err);
          return;
        } 
        console.log('Solicitação salva');
        console.log('ID: ', this.lastID);
        res.send(`
          <script>
          alert("Operação realizada com sucesso!");
          window.location.href = 'http://127.0.0.1:5500/html/'; // Redireciona após o alerta
          </script>   
        `)
      }
);


})


// Motorzinho 
app.listen(3000, () => {
    console.log('Servidor rodando na url http://localhost:3000')
})