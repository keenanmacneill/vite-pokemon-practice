import { useState } from 'react'
import './App.css'
import Results from './components/Results/Results'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Recents from './components/Recents/Recents'
import Favorites from './components/Favorites/Favorites'
import useDebounce from './hooks/useDebounce'
import usePokemon from './hooks/usePokemon'
import useRecents from './hooks/useRecents'
import useFavorites from './hooks/useFavorites'

function App() {
  let [inputText, setInputText] = useState('')
  let debouncedText = useDebounce(inputText)
  let { pokemon, error, isLoading } = usePokemon(debouncedText)
  let { recents } = useRecents(pokemon)
  let { favorites, toggleFavorite } = useFavorites()
  return (
    <>
      <Header inputText={inputText} setInputText={setInputText} />
      <Results pokemon={pokemon} error={error} isLoading={isLoading} favorites={favorites} toggleFavorite={toggleFavorite} />
      <Details pokemon={pokemon} />
      <Recents recents={recents} setInputText={setInputText} />
      <Favorites favorites={favorites} />
    </>
  )
}

export default App