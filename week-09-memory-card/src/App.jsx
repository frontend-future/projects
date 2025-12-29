import "./App.css";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

const BASE_POKEMON_API_URL = "https://pokeapi.co/api/v2/pokemon/";

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [pokemonCards, setPokemonCards] = useState([]);
  const [alreadyClickedPokemon, setAlreadyClickedPokemon] = useState(new Set());

  useEffect(() => {
    fetchPokemonData();
  }, []);

  const handleCardClick = (pokemonName) => {
    if (alreadyClickedPokemon.has(pokemonName)) {
      endGame();
    } else {
      setAlreadyClickedPokemon((prevSet) => new Set(prevSet).add(pokemonName));
      setCurrentScore(currentScore + 1);
    }

    fetchPokemonData();
  };

  const fetchPokemonData = async () => {
    const result = await fetch(`${BASE_POKEMON_API_URL}?limit=30`);
    const pokemonData = await result.json();

    const shuffledPokemon = [...pokemonData.results].sort(
      () => Math.random() - 0.5
    );
    const firstTwelvePokemon = shuffledPokemon.slice(0, 12).map((pokemon) => {
      const arr = pokemon.url.split("/");
      const pokemonIndex = arr[arr.length - 2];

      return {
        id: pokemon.url,
        title: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndex}.png`,
      };
    });
    setPokemonCards(firstTwelvePokemon);
  };

  console.log(pokemonCards);

  function endGame() {
    alert(`Game over! You scored ${currentScore}`);

    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }

    setCurrentScore(0);
    setAlreadyClickedPokemon(new Set());
  }

  return (
    <div className='app-container'>
      <header className='game-header'>
        <div className='header-left'>
          <h1 className='game-title'>Pokemon Memory Card Game</h1>
          <p className='game-subtitle'>Test your memory!</p>
        </div>
        <div className='scoreboard'>
          <div className='score-item'>
            <span className='score-label'>Current Score:</span>
            <span className='score-value'>{currentScore}</span>
          </div>
          <div className='score-item'>
            <span className='score-label'>Best Score:</span>
            <span className='score-value'>{bestScore}</span>
          </div>
        </div>
      </header>

      <main className='game-board'>
        <div className='cards-grid'>
          {pokemonCards.map((card) => (
            <Card
              key={card.id}
              image={card.image}
              title={card.title}
              onClick={() => handleCardClick(card.title)}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
