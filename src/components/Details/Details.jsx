export default function Details({ pokemon, cap, query, error, isLoading }) {
  if (!query) return
  if (error) return <p>{`${error}`}</p>
  if (isLoading) return <p>Loading...</p>
  if (pokemon) {
    return (
      <div id='details'>
        <p key={`${pokemon.name}-types`}> {pokemon.types.length > 1 ? 'Types:' : 'Type:'} {
          pokemon.types.map(
            type => type === pokemon.types[pokemon.types.length - 1] ? `${cap(type.type.name)}` : `${cap(type.type.name)}, `
          )
        }
        </p>
      </div>
    )
  }
}