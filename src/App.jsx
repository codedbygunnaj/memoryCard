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

  const [score, setScore] = useState(0);
  const [maxScore, setMax] = useState(0);
  const [clicked, setClicked] = useState([]); 
  const [cards, setCards] = useState(pokemonUrls); 
  const [gameStarted, setGameStarted] = useState(false); // New state for homepage

  function handleClick(name){
    if(clicked.includes(name)){
      alert("HAAR GYE! 😭 Same card repeat kar diya... let's see if you can beat my score of 10!");
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setMax(prev => Math.max(newScore, prev));
      setClicked([...clicked, name]);
      
      if(newScore === 12) {
        alert("CHAK DE PHATTE! 🎉 12/12 Pokemons collected! You are a legend! HEHEH");
      }
    }
    setCards([...cards].sort(() => Math.random() - 0.5));
  }

  // --- Homepage Component ---
  if (!gameStarted) {
    return (
      <div className="homepage-container">
        <h1>Welcome to Poké-Memory! ⚡</h1>
        <div className="rules-box">
          <h3>📜 The Rules:</h3>
          <ul>
            <li>Click on a card to collect that Pokémon.</li>
            <li>Don't click the same Pokémon twice, warna <strong>HAAR GYE</strong>!</li>
            <li>Cards shuffle every time you click. Stay sharp!</li>
            <li>Can you collect all 12? Join me and let's see! HEHEH 😈</li>
          </ul>
          <p className="challenge-text">My high score is <strong>10</strong>. Kya tum mujhe hara sakte ho? 😎</p>
        </div>
        <button className="start-btn" onClick={() => setGameStarted(true)}>
          LET'S GO! 🚀
        </button>
      </div>
    );
  }

  // --- Actual Game View ---
  return (
    <div>
      <div className="game-header">
        <button className="back-btn" onClick={() => {setGameStarted(false); setScore(0); setClicked([]);}}>🏠 Home</button>
        <p className="scoreClass">Score: {score} | Best: {maxScore}</p>  
      </div>
      <div className="arrangePokes">
        { cards.map((p)=>(
          <Items url={p} key={p} onClick={handleClick}/>
        ))}
      </div>
    </div>
  );
}