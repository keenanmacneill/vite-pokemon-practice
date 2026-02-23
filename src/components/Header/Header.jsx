export default function Header({ inputText, setInputText, setQuery }) {
  const handleChange = (e) => setInputText(e.target.value)
  const handleEnter = (e) => {
    if (e.key !== 'Enter' || !inputText.trim()) return;
    setQuery(inputText)
  }
  const handleSearch = (() => {
    if (!inputText.trim()) return;
    setQuery(inputText)
  })
  const handleRandom = (() => { })

  return (
    <div id='header'>
      <h1 id='header-title'>Pokédex</h1>
      <div id='search'>
        <input
          type='search' placeholder='Search for a Pokemon...'
          value={inputText} onChange={handleChange}
          onKeyDown={handleEnter}>
        </input>
        <button onClick={handleSearch}>Search</button>
        <button onClick={handleRandom}>Random</button>
      </div>
    </div>
  )
}