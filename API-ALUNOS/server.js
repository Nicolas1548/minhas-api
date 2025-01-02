import app from './src/app.js'

const port = 3020 ;

app.listen(port,() => {
    console.log(`Servidor rodando http://localhost:${port}`)
})