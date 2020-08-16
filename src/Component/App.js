import React ,{Component} from 'react';
import {pokemonData} from './../data/pokemonData';
import { Pokedex } from './pokedex/Pokedex';
import './App.css';


/*
function App() {
  return (
    <div className="App">
      <h1>Pokedex</h1>
    </div>
  );
}
*/

class App extends Component {
  constructor()
  {
    super();

    this.state = {
      searchField: '',
      pokemon : [],
      selectedPokemon : null, 
    }
  }

  componentDidMount()
  {
    this.setState ({ pokemons : pokemonData });
  }

  handlePokeSearch = (searchValue) => {
    this.setState({ searchField : searchValue }) 
  }

  handleClick = (name) => {
    const {pokemons} = this.state;
    let selectedPokemon = pokemons.find(pokemon => pokemon.name === name);
    this.setState({selectedPokemon});
  }

    render() {
      const { pokemons , searchField } = this.state;
      let foundPokemons = pokemons && pokemons.filter(pokemon => {
        return pokemon.name
        ? pokemon.name.toLowerCase().includes(searchField.toLowerCase())
        : false
      })

      return(
        <div className = "App">
          <h1>Pokedex</h1>
          <Pokedex 
          handlePokeSearch = {this.handlePokeSearch}
          pokemons = {foundPokemons}
          handleClick = {this.handleClick}
          selectedPokemon = {this.state.selectedPokemon}
          />
        </div>
      );
    }
  }
export default App;