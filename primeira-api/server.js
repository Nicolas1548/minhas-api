import http from "http";


const port = 3001;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type' : 'text/plain'});
    res.end('Servidor rodando na porta 3001')
})

server.listen(port, () =>{
    console.log(`Servidor escutando porta http://localhost:${port}`)
})