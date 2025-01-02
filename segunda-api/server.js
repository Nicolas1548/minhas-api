import http from 'http'

const port = 3002;

const rotas = {
    '/': 'Bem-vindo ao Auth',
    '/usuarios': 'Lista de usuarios',
    '/grupos': 'Lista de grupos',
    '/programas': 'Lista de programas',
    '/unidades': 'Lista de unidades'
}

const server = http.createServer((req, res) =>{
    res.writeHead(200,{'Content-Type': 'text/plain'});
    res.end(rotas[req.url])
})

server.listen(port,() => {
    console.log(`Servidor esta escutando http://localhost:${port}`)
})
