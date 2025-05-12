import express from 'express'
import config from './servicio/config.js'
import Router from './router/libroRouter.js'


const app = express()

//middleware express
app.use('/', express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//api restful
app.use('/api/libros', new Router().inicio())

//listen 
const port = config.PORT
const server = app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`)
})

server.on('error', (error) => {
    console.log(`error en servidor: ${error.message}`)
})



