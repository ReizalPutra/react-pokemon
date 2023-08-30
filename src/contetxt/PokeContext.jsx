import { createContext, useEffect, useState } from "react";
import { getAllPokemon, getPokemon } from "../service/pokeService";

const PokemonContext = createContext();

function PokemonContextProvider({ children }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, isLoading] = useState(true);
  const apiURL = "https://pokeapi.co/api/v2/pokemon";
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon');
  const [currentPage, setCurrentPage] = useState(0);
  const [pokemonPerPage] = useState(20);
  const [nextPageUrl, setNextPageUrl] = useState(null); // State untuk URL halaman berikutnya
  const [prevPageUrl, setPrevPageUrl] = useState(null);

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(currentPageUrl);
      await loadPokemon(response.results);
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
      isLoading(false);
    }
    fetchData();
  }, [currentPageUrl]);

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonGet = await getPokemon(pokemon);

        return pokemonGet;
      })
    );
    // console.log(_pokemonData);
    setPokemonData(_pokemonData);
  };

  const goToPrevPage = () => {
    setCurrentPage(prevPageUrl);
  }
  const goToNextPage = () => {
    setCurrentPage(nextPageUrl);
  }
  return (
    <PokemonContext.Provider
      value={{
        pokemonData,
        loading,
        currentPage,
        nextPageUrl,
        prevPageUrl,
        setCurrentPage,
        setNextPageUrl,
        setPrevPageUrl,
        pokemonPerPage,
        loadPokemon,
        goToNextPage,
        goToPrevPage,
        currentPageUrl,
        setCurrentPageUrl
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
}

export const PokemonPoke = PokemonContext;
export default PokemonContextProvider;
