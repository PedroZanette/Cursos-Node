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

app.get('/usuarios/name', (req,res) => {//cria aplicações web e API'S
    const { nome } = req.params
    const usuarios = usuarios.find(v => v.name === nome);
    if(usuarios) {
        res.json(usuarios);
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
})

app.put('/usuarios/:email', (req,res) => {//cria aplicações web e API'S
    const { email } = req.params;
    const { idade, sexo } = req.body;
    const usuarios = usuarios.find(v => v.email === email);
    if (usuarios) {
        usuarios.idade = idade || usuarios.idade;
        usuarios.sexo = sexo || usuarios.sexo;

        res.json({ message: 'Informações do usuário atualizadas com sucesso.'});
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
})

app.delete('/usuarios/:email', (req,res) => {//cria aplicações web e API'S
    const { email } = req.params;
    const usuariosIndex = usuarios.find(v => v.email === email); 
    if (usuariosIndex !== -1) { //findIndex: retorna o índice de um elemento em um array que atenda uma determinada condição
        usuarios.splice(usuariosIndex,1); //splice remover ou substituir elementos
        req.json({message: 'Usuário excluído com sucesso.'})
    } else {
        res.status(404).json({ message: 'Usuário não encontrado' });
    }
})

app.listen(3000, () => console.log("Servidor rodando"));//escuta as requisições  vindas da porta 3000