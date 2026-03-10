import React, { useEffect, useState } from "react";
import './itemCard.css'

function Items({url,onClick}){      
    const [pokemon,setPokemon]=useState(null);
    useEffect(()=>{
        async function getPokemon(params) {
            const res=await fetch(url);
            const data=await res.json();
            setPokemon(data)
        }
        getPokemon();
    },[url])
    return (
        <div className="itemCards" onClick={()=>onClick(pokemon.name)}>
            {/* Conditional rendering (pokemon && ...) avoids errors before fetch completes. */}
            {pokemon && (
                <>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="itemImg"></img>
                    <h3 className="itemH3">{pokemon.name}</h3>
                </>
            )}
        </div>
    );
}
// https://pokeapi.co/api/v2/pokemon/ditto
export default Items;

// sprites: {front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"}
