import React, { useState } from "react";
import Items from "./components/itemCard";
import './App.css'

export default function App(){
  
  let pokemonUrls=[
    "https://pokeapi.co/api/v2/pokemon/pikachu",
    "https://pokeapi.co/api/v2/pokemon/bulbasaur",
    "https://pokeapi.co/api/v2/pokemon/squirtle",
    "https://pokeapi.co/api/v2/pokemon/ditto",
    "https://pokeapi.co/api/v2/pokemon/meowth",
    "https://pokeapi.co/api/v2/pokemon/charizard",
    "https://pokeapi.co/api/v2/pokemon/psyduck",
    "https://pokeapi.co/api/v2/pokemon/mew",
    "https://pokeapi.co/api/v2/pokemon/starly",
    "https://pokeapi.co/api/v2/pokemon/charmander",
    "https://pokeapi.co/api/v2/pokemon/cubone",
    "https://pokeapi.co/api/v2/pokemon/jigglypuff",
  ]

  const [score,setScore]=useState(0);
  const [maxScore,setMax]=useState(0);

  const [clicked, setClicked] = useState([]); 
  const [cards, setCards] = useState(pokemonUrls); 

  function handleClick(name){
    if(clicked.includes(name)){
      setScore(0);
      setClicked([]);
    } else {
      setScore(prev=>prev+1)
      setMax(prev=>Math.max(score+1,prev))
      setClicked([...clicked,name])
    }

    setCards(cards.sort(()=>Math.random()-0.5))
  }
  
  return (
    <div>
      <p className="scoreClass"> Score: {score} | Max Score: {maxScore}</p>  
      <div className="arrangePokes">
        { cards.map((p)=>(
          <Items url={p} key={p} onClick={handleClick}/>
        ))}
      </div>
    </div>
  );
}