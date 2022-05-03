const fs = require("fs")
const evaluar = require("./tabla")

// Convierto el dato en objeto
const buffer = fs.readFileSync("datos.json")
const datosJSON = buffer.toString()
const datos = JSON.parse(datosJSON)

// Consigo el nombre del cuarto y los valores que vienen
const room = datos.room
const values = datos.values

// Separo en dos arrays uno con los nombres y otro con los valores
let nombresValores = Object.keys(values)
let valores = Object.values(values)

// Busco con los valores 
const alertas = evaluar(room, valores)

console.log("Estado actual en: " + room)
// Si alertas está vacio, está todo bien :)
if (alertas.length !== 0) {
    console.log("Cuidado con: ")
    console.log(alertas)
} else {
    console.log("Todo esta bien por ahora :)")
}