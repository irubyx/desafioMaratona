const fs = require("fs")

// Convierto la tabla en objeto
const buffer = fs.readFileSync("tabla.json")
const tablaJSON = buffer.toString()
const tabla = JSON.parse(tablaJSON)

// valoresTabla tiene los valores posibles para cada cuarto segun el dato
// cuartos tiene los cuartos que pueden haber
// nombreValores tiene los nombres de los valores que se miden
const valoresTabla = [Object.values(tabla.co2), Object.values(tabla.temperature), Object.values(tabla.humidity), Object.values(tabla.sound), Object.values(tabla.illumination)]

// Necesito conseguir los nombres de los cuartos, sin tener que escribirlos a mano
const cuartos = ['activity-room', 'refectory', 'room-1', 'bathroom-main', 'garden']
// Con esto, hago que no importa la cantidad de valores que voy a leer, siempre los voy a tener aca
const nombresValores = Object.keys(tabla)

const evaluar = (room, values) => {
    let result = []
    const roomIndex = cuartos.indexOf(room)

    for (let i = 0; i < values.length; i++) {
        const element = values[i];
        const temp = valoresTabla[i][roomIndex].split("-")
        const coso = {
            min: temp[0],
            max: temp[1]
        }
        if ((element < coso.min || element > coso.max) && room === cuartos[roomIndex]) {
            result.push(nombresValores[i])
        }
    }
    return result
}

module.exports = evaluar

// const co2 = tabla.co2
// const temperature = tabla.temperature
// const humidity = tabla.humidity
// const sound = tabla.sound
// const illumination = tabla.illumination