import ModelFactory from '../model/DAO/factory.js'
import config from './config.js'

class Servicio {

    #model

    constructor() {
        this.#model = ModelFactory.get(config.MODO_PERSISTENCIA)
    }

    obtenerLibros = async (id) => {
        if (id) {
            const libroBuscado = await this.#model.obtenerLibro(id)
            return libroBuscado || {}
        }
        else {
            return await this.#model.obtenerLibros()
        }
    }

    guardarLibros = async (libro) => {
        const nuevoLibro = await this.#model.guardarLibros(libro)
        return nuevoLibro
    }

    modificarLibros = async (id, libro) => {
        const libroModificado = await this.#model.modificarLibros(id, libro)
        return libroModificado
    }

    eliminarLibros = async (id) => {
        const libroEliminado = await this.#model.eliminarLibros(id)
        return libroEliminado
    }

}

export default Servicio