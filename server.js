const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Middleware para delay
server.use((req, res, next) => {
  setTimeout(next, 1000) // 1000ms = 1 segundo de delay
})

server.use(middlewares)
server.use(router)

server.listen(3333, () => {
  console.log('JSON Server rodando em http://localhost:3333')
})