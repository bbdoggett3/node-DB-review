const express = require('express')
const app = express()
const wildCtrl = require('./controllers/wildPokemonController')
const caughtCtrl = require('./controllers/caughtPokemonController')
const SERVER_PORT = 4232

app.use(expres.json())

app.listen(SERVER_PORT, () => console.log(`catching em all on port ${SERVER_PORT}`))