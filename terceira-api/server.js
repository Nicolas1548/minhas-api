import app from './src/app.js'

const port = process.env.PORT || 3003;

app.listen(port,() => {
    console.log(`Servidor esta escutando http://localhost:${port}`)
})
