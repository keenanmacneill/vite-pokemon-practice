import Favorites from "../Favorites/Favorites"

export default function Results({ isLoading, error, pokemon, toggleFavorite, favorites, cap }) {
  if (isLoading) {
    return <p>{'Loading...'}</p>
  } else if (error) {
    return (
      <section className='results'>
        <p>{`${error}`}</p>
      </section>
    )
  } else if (pokemon) {
    let isFavorite = favorites.some(favedPoke => favedPoke.name === pokemon.name)
    return (
      <section className='results'>
        <img src={`${pokemon['sprites']['other']['official-artwork']['front_default']}`}
        ></img>
        <button onClick={() =>
          toggleFavorite({
            id: pokemon.id,
            name: pokemon.name,
            sprite: pokemon['sprites']['other']['official-artwork']['front_default']
          })
        }>{isFavorite ? 'Click to Remove Favorite' : 'Click to Add Favorite'}</button>
        {pokemon.types.map((type) => <p key={type.type.name}>{cap(type.type.name)}</p>
        )}
      </section >
    )
  }
}