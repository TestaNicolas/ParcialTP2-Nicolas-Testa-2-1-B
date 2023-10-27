import express from 'express'
import ControladorNumeros from '../controlador/numeros.js'

class RouterNumeros {

    constructor() {
        this.controladorNumeros = new ControladorNumeros()
        this.router = express.Router()
    }

    OnInit() {
        this.router.post('/entrada', this.controladorNumeros.agregarNumero)
        this.router.get('/entrada', this.controladorNumeros.obtenerNumeros)
        this.router.get('/promedio', this.controladorNumeros.obtenerPromedio)
        this.router.get('/minmax', this.controladorNumeros.obtenerMinMax)
        this.router.get('/cantidad', this.controladorNumeros.obtenerCantidad)

        return this.router
    }
}

export default RouterNumeros