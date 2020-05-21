import React from 'react'
import Pokemon from './Pokemon'

function Pokedex(props) {
    const pokemonMap = props.caughtPokemon.map((pokemon) => (
        <Pokemon key={pokemon.id} 
                 saveName={props.saveName} 
                 releasePokemon={props.releasePokemon} 
                 data={pokemon}
        />
    ))
    return(
        <div>
            Pokedex.js
                {pokemonMap}
        </div>
    ) 
}

export default Pokedex;