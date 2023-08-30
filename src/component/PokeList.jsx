
function PokeList(pokemon) {

  return (
    <div>
      <h1>{pokemon.pokemon.name}</h1>
      <img src={pokemon.pokemon.sprites.front_default} />
    </div>
  );
}

export default PokeList;
