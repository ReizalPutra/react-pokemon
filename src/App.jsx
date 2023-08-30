// import { useState, useEffect } from "react";
// // import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { getAllPokemon, getPokemon } from "./service/pokeService";

import PokemonContextProvider from "./contetxt/PokeContext";
import Home from "./component/Home";

function App() {
  return (
    <>
      <PokemonContextProvider>
        <Home />
      </PokemonContextProvider>
    </>
  );
}
{
  /* <div className='gridContainer'>
      {loading ? <h1>Loading...</h1> : (
        <h1>
        {pokemonData.map((pokemon, index) => {
          return <div key={index}>{pokemon.name}
          <img src={pokemon.sprites.front_default} />
          </div>
        })}
      </h1>
        )}
      </div> */
}
export default App;
