import Servicio from '../servicio/libroServicio.js'

class Controlador {

    #servicio

    constructor() {
        this.#servicio = new Servicio()
    }

    obtenerLibros = async (req, res) => {
        const { id } = req.params
        const libro = await this.#servicio.obtenerLibros(id)
        res.json(libro)
    }

    guardarLibros = async (req, res) => {
        const libro = req.body
        const libroGuardado = await this.#servicio.guardarLibros(libro)
        res.json(libroGuardado)
    }

    modificarLibros = async (req, res) => {
        const { id } = req.params
        const libro = req.body
        const libroModificado = await this.#servicio.modificarLibros(id, libro)
        res.json(libroModificado)
    }

    eliminarLibros = async (req, res) => {
        const { id } = req.params
        const libroEliminado = await this.#servicio.eliminarLibros(id)
        res.json(libroEliminado)
    }

    porError = (req, res) => {
        const { url: ruta, method: metodo } = req
        res.status(404).send(`<h1 style= "color:red;"> Error al buscar ${metodo} ${ruta}, recurso no encontrado</h1>`)
    }


}
export default Controlador