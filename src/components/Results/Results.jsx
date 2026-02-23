export default function Results({ isLoading, isRefreshing, error, pokemon, toggleFavorite, favorites, cap, query }) {
  if (!query) return
  if (error) return <p>{`${error}`}</p>
  if (isLoading) return <p>Loading...</p>
  if (pokemon) {
    let isFavorite = favorites.some(favedPoke => favedPoke.name === pokemon.name)
    return (
      <div className='results'>
        {isRefreshing ? 'Updating...' : null}
        <img src={`${pokemon['sprites']['other']['official-artwork']['front_default']}`}
        ></img>
        {!isFavorite ? <button onClick={() =>
          toggleFavorite({
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon['sprites']['other']['official-artwork']['front_default']
          })
        }>Click to Add Favorite</button> : null}
        <p key={`${pokemon.name}-types`}> {pokemon.types.length > 1 ? 'Types:' : 'Type:'} {
          pokemon.types.map(
            type => type === pokemon.types[pokemon.types.length - 1] ? `${cap(type.type.name)}` : `${cap(type.type.name)}, `
          )
        }
        </p>
      </div >
    )
  }
}