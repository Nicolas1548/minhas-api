// Importa o módulo express, que é utilizado para criar o servidor e gerenciar rotas
import express from "express";

// Cria uma aplicação Express
const app = express();

// Configura a aplicação para interpretar requisições com payload JSON
app.use(express.json());

// Define um array inicial de grupos, cada um com um id e descrição
const grupos = [
    { id: 1, "descricao": "Administradores" },
    { id: 2, "descricao": "Gerentes" },
    { id: 3, "descricao": "Usuarios limitados"}
]

// Define um array inicial de unidades, cada uma com um id e descrição
const unidades = [
    { id: 1, "descricao": "Vilhena" },
    { id: 2, "descricao": "Cacoal" },
    { id: 3, "descricao": "Guaruja" }
]

// Define um array inicial de usuários, cada um com um id e descrição
const usuarios = [
    { id: 1, "descricao": "Vicente" },
    { id: 2, "descricao": "Noé" },
    { id: 3, "descricao": "Thomé" }
]

// Define uma rota GET para a raiz ('/'), que responde com uma mensagem de boas-vindas
app.get('/', (rep, res, next) => {
    res.status(200).send('Bem-vindo ao auth');
})

// Define uma rota GET para listar todos os grupos
app.get('/grupos', (req, res) => {
    res.status(200).json(grupos);
})

// Define uma rota GET para buscar um grupo específico pelo id
app.get('/grupos/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Grupo nao encontrado" })
    }
    res.json(grupos[index]);
})

// Define uma rota POST para adicionar um novo grupo
app.post('/grupos', (req, res) => {
    grupos.push(req.body);
    console.log(grupos)
    res.status(201).send('Grupo Cadastrado')
})

// Define uma rota PUT para atualizar completamente um grupo pelo id
app.put('/grupos/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Grupo nao encontrado" })
    }
    grupos[index].descricao = req.body.descricao;
    res.json(grupos[index]);
})

// Define uma rota PATCH para atualizar parcialmente um grupo pelo id
app.patch('/grupos/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Grupo nao encontrado" })
    }
    grupos[index].descricao = req.body.descricao;
    res.json(grupos[index]);
})

// Define uma rota DELETE para remover um grupo pelo id
app.delete('/grupos/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaGrupo(id);
    if (index === -1) {
        return res.status(404).json({ message: "Grupo nao encontrado" })
    }
    grupos.splice(index, 1);
    res.send(`Grupo ${id} removido`);
})

// UNIDADES

app.get('/unidades', (req, res) => {
    res.status(200).json(unidades);
})

app.get('/unidades/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Unidade nao encontrado" })
    }
    res.json(unidades[index]);
})

app.post('/unidades', (req, res) => {
    unidades.push(req.body);
    console.log(unidades)
    res.status(201).send('Unidade cadastrada')
})

app.put('/unidades/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Unidade nao encontrado" })
    }
    grupos[index].descricao = req.body.descricao;
    res.json(unidades[index]);
})

app.patch('/unidades/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Unidade nao encontrado" })
    }
    unidades[index].descricao = req.body.descricao;
    res.json(unidades[index]);
})

app.delete('/unidades/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaGrupo(id);
    if (index === -1) {
        return res.status(404).json({ message: "Unidade nao encontrado" })
    }
    unidades.splice(index, 1);
    res.send(`Unidade ${id} removido`);
})

// USUARIOS

app.get('/usuarios', (req, res) => {
    res.status(200).json(usuarios);
})

app.get('/usuarios/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Usuario nao encontrado" })
    }
    res.json(usuarios[index]);
})

app.post('/usuarios', (req, res) => {
    usuarios.push(req.body);
    console.log(usuarios)
    res.status(201).send('Usuario Cadastrado')
})

app.put('/usuarios/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Usuario nao encontrado" })
    }
    usuarios[index].descricao = req.body.descricao;
    res.json(usuarios[index]);
})

app.patch('/usuarios/:id', (req, res) => {
    let index = buscaGrupo(req.params.id);
    if (index === -1) {
        return res.status(404).json({ message: "Usuario nao encontrado" })
    }
    usuarios[index].descricao = req.body.descricao;
    res.json(usuarios[index]);
})

app.delete('/usuarios/:id', (req, res) => {
    let { id } = req.params;
    let index = buscaGrupo(id);
    if (index === -1) {
        return res.status(404).json({ message: "Usuario nao encontrado" })
    }
    usuarios.splice(index, 1);
    res.send(`Usuario ${id} removido`);
})

// Define uma função para buscar o índice de um grupo pelo id
function buscaGrupo( id) {
    return grupos.findIndex(grupo => grupo.id == id)
}

// Exporta a aplicação para ser utilizada em outros arquivos
export default app