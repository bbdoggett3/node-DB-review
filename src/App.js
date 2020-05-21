import React, {Component} from 'react';
import Header from './components/Header';
import Finder from './components/Finder';
import Pokedex from './components/Pokedex';
import axios from 'axios'
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      caughtPokemon: [],
    }

    this.catchPokemon = this.catchPokemon.bind(this)
    this.saveName = this.saveName.bind(this)
    this.releasePokemon = this.releasePokemon.bind(this)
  }

  componentDidMount() {
    axios.get('/api/pokemon').then(response => {
      this.setState({caughtPokemon: response.data})
    })
  }

  catchPokemon(name, image) {
    const body = {name, image}
    axios.post('/api/pokemon', body).then(response => {
      this.setState({caughtPokemon: response.data})
    })
  }

  saveName(id, newName) {
    const body = {newName}
    axios.put(`/api/pokemon/${id}`, body).then(response => {
      this.setState({caughtPokemon: response.data})
    })
  }

  releasePokemon(id) {
    axios.delete(`/api/pokemon/${id}`).then(response => {
      this.setState({caughtPokemon: response.data})
    })
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Finder catchPokemon= {this.catchPokemon} />
          <Pokedex 
              caughtPokemon={this.state.caughtPokemon}
              saveName={this.saveName}
              releasePokemon={this.releasePokemon}/>
      </div>
    );
  }

}

export default App;
