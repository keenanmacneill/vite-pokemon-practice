export default function Results({ isLoading, error, pokemon }) {

  if (isLoading) {
    return <p>{'Loading...'}</p>
  } else if (error) {
    return (
      <section className='results'>
        <p>{`${error}`}</p>
      </section>
    )
  } else if (pokemon) {
    return (
      <section className='results'>
        <img src={`${pokemon['sprites']['other']['official-artwork']['front_default']}`}></img>
        {pokemon.types.map((type) => <p>{`${type.type.name}`}</p>
        )}
      </section >
    )
  }
}