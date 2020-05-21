import React, { Component } from 'react'
import Grass from './Grass';

class Finder extends Component {
constructor() {
    super()

    this.state = {
        wildPokemon: []
    }
}

componentDidMount() {}   //this will fetch a wild pokemon

    render() {
        return(
            <div>
                Finder.js
                <Grass catchPokemon={this.props.catchPokemon} />
            </div>

        )
    }
}

export default Finder;