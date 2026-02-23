export default function Recents({ recents, setQuery, cap }) {
  if (!recents || recents.length === 0) return null

  return (
    <div id='recents'>
      <h2 id='favorite-title'>Recent Searches</h2>
      <div id='recent-pokemon'>
        {recents.map((poke) => (
          <div key={poke.id} id={`${poke.name}`}>
            <img src={poke.sprite} onClick={(() => setQuery(poke.name))}></img>
            <p onClick={(() => setQuery(poke.name))}>{cap(poke.name)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}