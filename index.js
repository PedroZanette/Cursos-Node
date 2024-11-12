const express = require('express'); //express foi instalado e está sendo chamado;

const app = express(); //renomeia função express para app

app.use(express.json())//minha aplicação vai utilizar Json

const users = [
    {
        name: 'Karien',
        email: 'Karien.barbosa@edu.sc.senai.br',
        idade: 34,
        sexo: 'feminino'
    },
]

app.get('/usuarios', (req, res) => {//retorna as requisições
    res.json(users)//retorna os usuários, envia respostas em formato json
})

app.post('/usuarios', (req,res) => {//cria aplicações web e API'S
    console.log(req.body)//retorna o corpo da requisição
    users.push(req.body)//envia mensagens para o array (users)
    res.status(201).json(users)//retorna o status 201 e os usuários
})

app.listen(3000, () => console.log("Servidor rodando"));//escuta as requisições  vindas da porta 3000