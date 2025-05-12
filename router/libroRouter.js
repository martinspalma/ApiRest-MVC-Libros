import express from 'express'
import Controlador from '../controlador/libroControlador.js'


class Router {

    #cb = null
    constructor() {
        this.#cb = new Controlador()
    }

    inicio() {
        const router = express.Router()

        router.get('/:id?', this.#cb.obtenerLibros)
        router.post('/', this.#cb.guardarLibros)
        router.put('/:id', this.#cb.modificarLibros)
        router.delete('/:id', this.#cb.eliminarLibros)
        router.use(this.#cb.porError)
        

        return router
    }

}

export default Router