// Importa o módulo "app" do arquivo localizado em "./src/app.js"
import app from './src/app.js'

// Define a porta que o servidor irá escutar. 
// Ele usa a variável de ambiente PORT, se definida, ou o valor padrão 3003.
const port = process.env.PORT || 3003;

// Inicia o servidor, fazendo-o escutar a porta definida. 
// Quando o servidor começa a escutar, uma função de callback é executada.
app.listen(port,() => {
     // Imprime uma mensagem no console indicando que o servidor está em execução e escutando na porta especificada.
    console.log(`Servidor esta escutando http://localhost:${port}`)
})
