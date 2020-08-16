import React from 'react';
import { Pokelist } from '../pokelist1/Pokelist';
import { PokeSearchResult } from '../PokeSearcchResult/PokeSearchResult';
import './pokedex.css';



export const Pokedex = ({pokemons , handlePokeSearch , handleClick , selectedPokemon}) =>{
    
     return(
        <div className = "pokedex-container ">
            <div className ="pokelist-container">
           
                <Pokelist
                handlePokeSearch = {handlePokeSearch}
                pokemons = {pokemons}
                handleClick = {handleClick}
            
                />
            
            </div>
            <div className= "pokesearchresult-container">
                {
            selectedPokemon
            ?<PokeSearchResult
                showResult = {true}
                sprite = {JSON.parse(selectedPokemon.sprites).animated}
                id = {selectedPokemon.id}
                height = {selectedPokemon.height}
                weight = {selectedPokemon.weight}
                name = {selectedPokemon.name} />
                :<PokeSearchResult
                 showResult = {false} />
                }
            </div>
        </div>
    )
}