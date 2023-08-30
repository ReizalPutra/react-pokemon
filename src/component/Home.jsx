import { useContext } from "react";
import { PokemonPoke } from "../contetxt/PokeContext";
// import PokeList from "./PokeList";
import { PokeCard } from "./PokeCard";
import SearchPoke from "./SearchPoke";
import ButtonPoke from "./ButtonPoke";
import LoadingPoke from "./LoadingPoke";

function Home(
) {
  const pokeData= useContext(PokemonPoke);
  const { nextPageUrl, prevPageUrl, setCurrentPage, currentPage, setCurrentPageUrl  } = useContext(PokemonPoke);
  // console.log(nextPageUrl);
const nextPage = () => {
  setCurrentPage(currentPage + 1);
  setCurrentPageUrl(nextPageUrl);
};

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
    setCurrentPageUrl(prevPageUrl);
  };

  return (
    <>
      <SearchPoke />
      {pokeData.loading ? (
        <LoadingPoke />
      ) : (
        <div className="flex flex-wrap justify-center">
          {pokeData.pokemonData.map((pokemon, index) => (
            <PokeCard key={index} pokemon={pokemon} />
          ))}
        </div>
      )}
      
     
      <div className="flex flex-wrap justify-center my-4 gap-4">
       <ButtonPoke nextPage = {nextPage} prevPage = {prevPage} currentPage = {currentPage}/>
      </div>
    </>
  );
}

export default Home;
