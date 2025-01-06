import express from "express"
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://nicolasgabriel069:wRssyT7FNt9xutgo@api.uay4t.mongodb.net/?retryWrites=true&w=majority&appName=API');

const app = express();
app.use(express.json());

const Usuario = mongoose.model('Usuario', {
    nome: String,
    idade: Number,
    email: String
})

app.get('/', async (req, res) => {
    res.status(200).send("Bem vindo!!!")
})

app.get('/Usuario', async (req, res) => {
    const users = await Usuario.find()
    res.status(200).send(users)
})

app.post('/Usuario', async (req, res) => {
    const user = new Usuario({
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email
    })
    await user.save()
    res.status(201).send("Usuario registrado!")
})

app.put('/Usuario/:id', async (req, res) => {
    const user = await Usuario.findByIdAndUpdate(req.params.id, {
        nome: req.body.nome,
        idade: req.body.idade,
        email: req.body.email
    })
    res.status(201).send("Usuario alterado com sucesso!")
})

app.delete('/Usuario/:id', async (req, res) => {
    const user = await Usuario.findByIdAndDelete(req.params.id)
    res.status(200).send("Usuario removido com sucesso!")
})

export default app