export default function Header({ inputText, setInputText }) {

  return (
    <div>
      <h1>Pokédex</h1>
      <input type='search' placeholder='Search for a Pokemon...' value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
    </div>
  )
}