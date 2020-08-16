import React from 'react';

import './pokecard.css';

export const Pokecard = ({ id, name,sprite ,handleClick}) => {
        return(
        <div className = "pokecard" onClick = {() => handleClick(name)} >
            
           <img className = "pokecard-sprite" alt = "pokemon" src = {sprite} />
           <p>{name}</p>
        </div>
    )
}