import NumerosFile from "../model/DAO/numeros.js"

class ServicioNumeros {

    constructor() {
        this.numerosFile = new NumerosFile()
    }

    async obtenerNumeros() { 
        const numeros = await this.numerosFile.obtenerNumeros()
        return {numeros: numeros.map(item => item.numero)}
    }

    async agregarNumero(body) { 
        const numeros = await this.numerosFile.agregarNumero(body)
        return numeros
    }

    async obtenerPromedio() {
        const numeros = await this.numerosFile.obtenerNumeros()
        const sumaTotal = numeros.reduce((acc, item) => {
            return acc + item.numero;
        }, 0);
        const cantNumeros = numeros.length
        const promedio = sumaTotal / cantNumeros
        return {promedio: promedio}
    }

    async obtenerMinMax() {
        const numeros = await this.numerosFile.obtenerNumeros()
        const numeroMin = numeros.sort((a,b) => a.numero - b.numero)[0]
        const numeroMax = numeros.sort((a,b) => b.numero - a.numero)[0]
        return {min: numeroMin.numero, max: numeroMax.numero}
    }

    async obtenerCantidad() {
        const numeros = await this.numerosFile.obtenerNumeros()
        return {cantidad: numeros.length}
    }

}

export default ServicioNumeros
