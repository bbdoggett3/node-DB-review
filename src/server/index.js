const express = require('express')
const app = express()
const wildCtrl = require('./controllers/wildPokemonController')
const caughtCtrl = require('./controllers/caughtPokemonController')
const SERVER_PORT = 4232

app.use(express.json())

//Wild Pokemon endpoints 
app.get('/api/wild-pokemon', wildCtrl.getThreeRandomPokemon)

//Caught pokemon endpoint
app.get('/api/pokemon', caughtCtrl.getCaughtPokemon)
app.post('/api/pokemon', caughtCtrl.catchPokemon)
app.put('api/pokemon/:pokemon_id', caughtCtrl.editPokemonName)
app.delete('/api/pokemon/:pokemon_id', caughtCtrl.deletePokemon)

//listening port
app.listen(SERVER_PORT, () => console.log(`catching em all on port ${SERVER_PORT}`))