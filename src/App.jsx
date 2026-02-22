import { useState } from 'react'
import './App.css'
import Results from './components/Results/Results'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Recents from './components/Recents/Recents'
import useDebounce from './hooks/useDebounce'
import usePokemon from './hooks/usePokemon'
import useRecents from './hooks/useRecents'

function App() {
  let [inputText, setInputText] = useState('')
  let debouncedText = useDebounce(inputText)
  let { pokemon, error, isLoading } = usePokemon(debouncedText)
  let { recents } = useRecents(pokemon)
  return (
    <>
      <Header inputText={inputText} setInputText={setInputText} />
      <Results pokemon={pokemon} error={error} isLoading={isLoading} />
      <Details pokemon={pokemon} />
      <Recents recents={recents} onSelect={setInputText} />
    </>
  )
}

export default App