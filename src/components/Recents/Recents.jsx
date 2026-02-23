export default function Recents({ recents, setInputText }) {
  if (!recents || recents.length === 0) return null

  return (
    <section>
      <h2>Recent History</h2>
      {recents.map((poke) => (
        <div key={poke.id}>
          <p onClick={(() => setInputText(poke.name))}>{poke.name}</p>
          <img src={poke.sprite} onClick={(() => setInputText(poke.name))}></img>
        </div>
      ))}
    </section>
  )
}