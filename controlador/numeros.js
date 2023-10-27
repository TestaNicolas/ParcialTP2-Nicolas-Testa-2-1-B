import ServicioNumeros from "../servicio/numeros.js"

class ControladorNumeros {

    constructor() {
        this.servicioNumeros = new ServicioNumeros()
    }

    obtenerNumeros = async (req,res) => {
        try {
            const numeros = await this.servicioNumeros.obtenerNumeros()
            res.json(numeros)
        }
        catch(error) {
            console.log(`Error al intentar obtener los numeros... ${error}`)
        }
    }

    agregarNumero = async (req,res) => {
        const body = req.body
        try {
            await this.servicioNumeros.agregarNumero(body)
            res.redirect('/')
        }
        catch(error) {
            console.log(`Error al intentar agregar un nuevo numero... ${error}`)
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const promedio = await this.servicioNumeros.obtenerPromedio()
            res.json(promedio)
        }
        catch(error) {
            console.log(`Error al intentar obtener el promedio de los numeros... ${error}`)
        }
    }

    obtenerMinMax = async (req, res) => {
        try {
            const MinMax = await this.servicioNumeros.obtenerMinMax()
            res.json(MinMax)
        }
        catch(error) {
            console.log(`Error al intentar obtener el numero Min y Max... ${error}`)
        }
    }

    obtenerCantidad = async (req, res) => {
        try {
            const cant = await this.servicioNumeros.obtenerCantidad()
            res.json(cant)
        }
        catch(error) {
            console.log(`Error al intentar obtener la cantidad de numeros... ${error}`)
        }
    }

}

export default ControladorNumeros
