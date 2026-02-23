export default function Results({ isLoading, error, pokemon, toggleFavorite, favorites, cap, query }) {
  if (!query) {
    return
  }
  if (isLoading) {
    return <p>{'Loading...'}</p>
  } else if (error) {
    return (
      <div className='results'>
        <p>{`${error}`}</p>
      </div>
    )
  } else if (pokemon) {
    let isFavorite = favorites.some(favedPoke => favedPoke.name === pokemon.name)
    return (
      <div className='results'>
        <img src={`${pokemon['sprites']['other']['official-artwork']['front_default']}`}
        ></img>
        <button onClick={() =>
          toggleFavorite({
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon['sprites']['other']['official-artwork']['front_default']
          })
        }>{isFavorite ? 'Click to Remove Favorite' : 'Click to Add Favorite'}</button>
        <p key={`${pokemon.name}-types`}> Types: {
          pokemon.types.map(
            type => type === pokemon.types[pokemon.types.length - 1] ? `${cap(type.type.name)}` : `${cap(type.type.name)}, `
          )
        }
        </p>
      </div >
    )
  }
}