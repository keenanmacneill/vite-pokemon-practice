export default function Recents({ recents, setInputText, cap }) {
  if (!recents || recents.length === 0) return null

  return (
    <div>
      <h2>Recent History</h2>
      {recents.map((poke) => (
        <div key={poke.id}>
          <img src={poke.sprite} onClick={(() => setInputText(poke.name))}></img>
          <p onClick={(() => setInputText(poke.name))}>{cap(poke.name)}</p>
        </div>
      ))}
    </div>
  )
}