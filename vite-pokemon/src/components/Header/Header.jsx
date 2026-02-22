export default function Header({ inputText, setInputText }) {

  return (
    <header>
      <h1>Title</h1>
      <input type='search' placeholder='Search for a Pokemon...' value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
    </header>
  )
}