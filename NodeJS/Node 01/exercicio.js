const express = _____; require('express')
const app = _____; express()

let data = _____; new Date()

_____ { app.get('/', (req, res) =>
    _____; let dia_atual = data.getDate()
    let dia_json = {dia: dia_atual};
    _____; res.json(dia_json)
})

_____ { app.listen(8080, () => )
    console.log("Servidor iniciado")
});