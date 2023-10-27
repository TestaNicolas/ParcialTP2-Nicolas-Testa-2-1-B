import fs from 'fs/promises'
const archivo = 'numeros.json'

class NumerosFile {

    constructor() { }

    leerArchivo = async (archivo) => {
        try {
            const usuarios = await fs.readFile(archivo, 'utf-8')
            const usuariosJson = JSON.parse(usuarios)
            return usuariosJson
        } catch (error) {console.log(`Error al leer el archivo... ${error}`);}
    }

    escribirArchivo = async (archivo, TextoAEscribir) => {
        try {
            await fs.writeFile(archivo, JSON.stringify(TextoAEscribir,null,'\t'))
        } catch(err) {
            console.error("Error al escribir en el archivo");
        }
    }

    obtenerNumeros = async () => {
        try {
            const numeros = await this.leerArchivo(archivo)
            return numeros   
        }
        catch(error) {
            console.log(`Error al intentar obtener los numeros... ${error}`)
            return []
        }
    }

    agregarNumero = async (body) => {
        try {
            const numeros = await this.leerArchivo(archivo)
            body.numero = parseInt(body.numero)
            numeros.push(body)
            return await this.escribirArchivo(archivo, numeros)
        }
        catch(error) {
            console.log(`Error al intentar agregar un nuevo numero... ${error}`)
            return []
        }
    }

}

export default NumerosFile