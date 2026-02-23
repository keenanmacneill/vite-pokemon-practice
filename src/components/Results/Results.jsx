export default function Results({ isLoading, error, pokemon, toggleFavorite, favorites, query }) {
  if (!query) return
  if (error) return <p>{`${error}`}</p>
  if (isLoading) return <p>Loading...</p>
  if (pokemon) {
    let isFavorite = favorites.some(favedPoke => favedPoke.name === pokemon.name)
    return (
      <div id='results'>
        <img src={`${pokemon['sprites']['other']['official-artwork']['front_default']}`}
        ></img>
        {!isFavorite ?
          <button onClick={() =>
            toggleFavorite({
              id: pokemon.id,
              name: pokemon.name,
              sprite: pokemon['sprites']['other']['official-artwork']['front_default']
            })
          }>Click to Add Favorite
          </button> : null
        }
      </div >
    )
  }
}