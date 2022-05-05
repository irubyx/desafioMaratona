function main(params) {
	return new Promise((resolve, reject) => {
        setTimeout(() => {
let alerts = []
        
const rooms = ['activity-room', 'refectory', 'room-1', 'bathroom-main', 'garden']
const roomIndex = rooms.indexOf(params.room)
const measures = ["co2","temperature","humidity","sound","illumination"]
const valuesToTest = Object.values(params.values)

const measuresValues = {
    "activity-room": ["0-500","19-22","50-60","0-40","300-750"],
    "refectory":["0-400","20-23","50-70","20-35","200-500"],
    "room-1":["0-300","21-23","50-60","10-30","100-200"],
    "bathroom-main":["0-500","22-25","60-75","20-35","100-200"],
    "garden":["0-500","15-22","50-80","10-35","0-0"]
}

const medicionesActuales = measuresValues[params.room]

for (let i = 0; i < valuesToTest.length; i++) {
    let temp = medicionesActuales[i].split("-")
    if (valuesToTest[i] < temp[0] || valuesToTest[i] > temp[1]) {
        alerts.push(measures[i])
    }
}
        resolve({alerts});
        }, 0);
    });
}