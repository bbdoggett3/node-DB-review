import React, {Component} from 'react'

class Grass extends Component {
    constructor() {
        super();

        this.state = {
            grassClicked: false
        }
    }

    checkGrass() {
        const {data} =this.props
        this.props.catchPokemon(data.map, data.sprites.font_default)
        this.props.refreshFn()
    }


    render() {
        return(
            <div>
                <img src={this.props.data.sprites.front_default} 
                 alt={this.props.data.name} 
                 onClick ={() => this.checkGrass()}/>
            <div><p>{this.props.data.name}</p></div>
            </div>
        )
    }
}

export default Grass;
