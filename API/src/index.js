import express from "express";
import mongoose from "mongoose";

mongoose.connect('mongodb+srv://nicolasgabriel069:wRssyT7FNt9xutgo@api.uay4t.mongodb.net/?retryWrites=true&w=majority&appName=API');

const app = express();
app.use(express.json())
const port = 3010;

const User = mongoose.model('User', {
    nome: String,
    email: String,
    idade: Number
});

app.get('/', async (req, res) => {
    const users = await User.find()
    res.status(200).send(users)
})


app.post('/', async (req, res) => {
    const user = new User({
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    })
    await user.save()
    res.send(user)
})

app.put('/:id', async(req,res) => {
    const user = await User.findByIdAndUpdate(req.params.id,{
        nome: req.body.nome,
        email: req.body.email,
        idade: req.body.idade
    })
    return res.send("alterado com sucesso")
})

app.delete('/:id', async (req,res) => {
    const user = await  User.findByIdAndDelete(req.params.id)
    res.send("Removido com sucesso!")
    
})

app.listen(port, () => {
    console.log(`Servidor esta escutando http://localhost:${port}`)
})

export default app