import fs from 'fs'

class ModelFile {
    #archivoDeLibros

    constructor() {

        this.#archivoDeLibros = 'libros.json'
    }

    #leerArchivo = async ruta => {
        let archivo = []
        try {
            archivo = JSON.parse(await fs.promises.readFile(ruta, 'utf-8'))
        } catch { }
        return archivo
    }

    #escribirArchivo = async (ruta, texto) => {
        await fs.promises.writeFile(ruta, JSON.stringify(texto, null, '\t'))
    }
//-----------------------------------------------------------------------
    obtenerLibro = async (id) => {

        const libros = await this.#leerArchivo(this.#archivoDeLibros)
        const libroBuscado = libros.find(l => l.id === id)
        return libroBuscado || {}
    }

    obtenerLibros = async () => {
        return await this.#leerArchivo(this.#archivoDeLibros) || {}
    }

    guardarLibros = async (libro) => {
        const libros = await this.#leerArchivo(this.#archivoDeLibros)
        libro.id = String(parseInt(libros[libros.length - 1]?.id || 0) + 1)
        libros.push(libro)
        await this.#escribirArchivo(this.#archivoDeLibros, libros)
        return libro
    }

    modificarLibros = async (id, libro) => {
        const libros = await this.#leerArchivo(this.#archivoDeLibros)
        const index = libros.findIndex(l => l.id === id)

        if (index != -1) {
            const libroAnterior = libros[index]
            const libroActualizado = { ...libroAnterior, ...libro }
            libros.splice(index, 1, libroActualizado)
            await this.#escribirArchivo(this.#archivoDeLibros, libros)
            return libroActualizado
        }
        else {
            let mensaje = "error en la actualizacion del libro"
            return mensaje
        }
    }

    eliminarLibros = async (id) => {
        const libros = await this.#leerArchivo(this.#archivoDeLibros)
        const index = libros.findIndex(l => l.id === id)

        if (index != -1) {
            const libroEliminado = libros.splice(index, 1)[0]
            await this.#escribirArchivo(this.#archivoDeLibros, libros)
            return libroEliminado
        }
        else {
            let mensaje = "error al eliminar el libro"
            return mensaje
        }
    }


}
export default ModelFile 