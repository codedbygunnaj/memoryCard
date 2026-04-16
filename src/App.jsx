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
  const [gameStarted, setGameStarted] = useState(false);

  function handleClick(name){
    if(clicked.includes(name)){
      alert("Game Over! 😭 You clicked the same card twice. My top score is 10—think you can beat it next time?");
      setScore(0);
      setClicked([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setMax(prev => Math.max(newScore, prev));
      setClicked([...clicked, name]);
      
      if(newScore === 12) {
        alert("PERFECT VICTORY! 🎉 You collected all 12 Pokémons without a single mistake. You're a Memory Master!");
      }
    }
    setCards([...cards].sort(() => Math.random() - 0.5));
  }

  if (!gameStarted) {
    return (
      <div className="homepage-wrapper">
        <div className="homepage-container">
          <h1>Poké-Memory Challenge ⚡</h1>
          <div className="rules-box">
            <h3>📜 Game Rules</h3>
            <ul>
              <li>Click each Pokémon card <strong>only once</strong>.</li>
              <li>If you click the same card twice, <strong>the game resets!</strong> ❌</li>
              <li>The cards shuffle after every click, so watch closely.</li>
              <li>There are 12 unique Pokémons to collect. Can you get them all?</li>
            </ul>
            <p className="challenge-text">The developer's high score is <strong>10</strong>. Are you sharp enough to beat it? 😈</p>
          </div>
          <button className="start-btn-vibe" onClick={() => setGameStarted(true)}>
            GOTTA CATCH 'EM ALL! ⚡
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="game-screen">
      <div className="game-header">
        <button className="back-btn" onClick={() => {setGameStarted(false); setScore(0); setClicked([]);}}>🏠 Home</button>
        <div className="score-board">
          <p className="scoreClass">Current Score: {score}</p>
          <p className="bestScoreClass">Best Score: {maxScore}</p>
        </div>
      </div>
      <div className="arrangePokes">
        { cards.map((p)=>(
          <Items url={p} key={p} onClick={handleClick}/>
        ))}
      </div>
    </div>
  );
}