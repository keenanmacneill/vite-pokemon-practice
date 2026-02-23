export default function Header({ inputText, setInputText, setQuery }) {
  const handleChange = (e) => setInputText(e.target.value)
  const handleEnter = (e) => {
    if (e.key !== 'Enter' || !inputText.trim()) return;
    setQuery(inputText)
  }
  const handleClick = (() => {
    if (!inputText.trim()) return;
    setQuery(inputText)
  })

  return (
    <div>
      <h1>Pokédex</h1>
      <input
        type='search' placeholder='Search for a Pokemon...'
        value={inputText} onChange={handleChange}
        onKeyDown={handleEnter}>
      </input>
      <button onClick={handleClick}>Search</button>
    </div>
  )
}