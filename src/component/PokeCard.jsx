export function PokeCard(pokemon) {
  return (
    <div className="flex justify-center mb-4 flex-wrap px-4 py-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <div className="font-bold text-3xl mb-2 text-gray-700 text-center">
          {pokemon.pokemon.name}
        </div>
        <img
          src={pokemon.pokemon.sprites.other["official-artwork"].front_default}
          className="w-2/3 mx-auto"
        />
        <div className="px-6 py-4">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            #{pokemon.pokemon.id}
          </span>

          <div className="text-gray-700 text-base">
            {pokemon.pokemon.stats.map((stat, id) => (
              <div key={id} className="flex">
                <h3 className="font-bold p-2 w-2/4">
                  {stat.stat.name}: {stat.base_stat}
                </h3>
                <progress
                  value={stat.base_stat}
                  max="255"
                  className="w-2/4 bg-gray-200"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="px-6 pt-4 pb-2">
          {pokemon.pokemon.types.map((type, id) => (
            <span
              key={id}
              className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              {type.type.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
