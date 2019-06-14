const express = require('express')
const massive = require('massive')
require('dotenv/config')

const app = express()
const { SERVER_PORT, CONNECTION_STRING } = process.env

const Ctrl = require('./controllers/houseController')

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db is connected')
})

//ENDPOINTS
app.get('/api/houses', Ctrl.getAllHouses)
app.post('/api/houses', Ctrl.addHouse)
app.delete('/api/houses/:id', Ctrl.deleteHouse)

app.listen(SERVER_PORT, () => {
    console.log('listening on port', SERVER_PORT)
})