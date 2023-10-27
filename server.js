import express from 'express'
import RouterNumeros from './router/numeros.js'

const app = express()
const PORT = 8080

// APP USE
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// RUTAS
app.use('/numeros', new RouterNumeros().OnInit())

// APP LISTEN
const server = app.listen(PORT, () => console.log(`Servidor escuchado en el puerto ... ${PORT}`))
server.on('error', error => console.log('Error al levantar el servidor:', error) )
