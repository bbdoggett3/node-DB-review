import React, {Component} from 'react'

class Pokemon extends Component {
constructor() {
    super();

    this.state = {
        isEditing: false,
        userInput: ''
    }
}

toggleEdit() {}
handleChange(e) {}
handleSaveName() {}

    render() {
        return(
        <div>
            <img src ={this.props.data.image} alt={this.props.data.name} />
            <p>{this.props.data.name}</p>
            <button onClick={() => this.props.releasePokemon(this.props.data.id)}>Release</button>
        </div>
        )
    }
}

export default Pokemon;