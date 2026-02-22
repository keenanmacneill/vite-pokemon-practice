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
        <p>{`${pokemon.name}`}</p>
      </section>
    )
  }
}