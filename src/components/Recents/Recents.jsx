export default function Recents({ recents, setQuery, cap }) {
  if (!recents || recents.length === 0) return null

  return (
    <div>
      <h2>Recent History</h2>
      {recents.map((poke) => (
        <div key={poke.id}>
          <img src={poke.sprite} onClick={(() => setQuery(poke.name))}></img>
          <p onClick={(() => setQuery(poke.name))}>{cap(poke.name)}</p>
        </div>
      ))}
    </div>
  )
}