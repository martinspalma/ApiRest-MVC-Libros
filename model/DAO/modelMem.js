class ModelMem {
    #libros

    constructor() {

        this.#libros = [
            { id: '1', titulo: 'El nombre de la rosa', autor: 'Umberto Eco', anio: 1980 },
            { id: '2', titulo: 'Crimen y castigo', autor: 'Fiodor Dostoyevvski', anio: 1866 },
            { id: '3', titulo: 'La caverna', autor: 'Jose Saramago', anio: 2000 },
        ]
    }

    obtenerLibro = async (id) => {

        const libroBuscado = this.#libros.find(l => l.id === id)
        return libroBuscado || {}
    }

    obtenerLibros = async () => {
        return this.#libros
    }

    guardarLibros = async (libro) => {
        libro.id = String(parseInt(this.#libros[this.#libros.length - 1]?.id || 0) + 1)
        this.#libros.push(libro)

        return libro
    }

    modificarLibros = async (id, libro) => {
        const index = this.#libros.findIndex(l => l.id === id)

        if (index != -1) {
            const libroAnterior = this.#libros[index]
            const libroActualizado = { ...libroAnterior, ...libro }
            this.#libros.splice(index, 1, libroActualizado)
            return libroActualizado
        }
        else {
            let mensaje = "error en la actualizacion del libro"
            return mensaje
        }
    }

    eliminarLibros = async (id) => {
        const index = this.#libros.findIndex(l => l.id === id)
        if (index != -1) {
            const libroEliminado = this.#libros.splice(index, 1)[0]

            return libroEliminado
        }
        else {
            let mensaje = "error al eliminar el libro"
            return mensaje
        }
    }


}
export default ModelMem 