import { useState } from 'react'
import './App.css'
import Results from './components/Results/Results'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import Recents from './components/Recents/Recents'
import Favorites from './components/Favorites/Favorites'
import usePokemon from './hooks/usePokemon'
import useRecents from './hooks/useRecents'
import useFavorites from './hooks/useFavorites'
import useNormQuery from './hooks/useNormQuery'

function App() {
  let cap = s => s ? s.charAt(0).toUpperCase() + s.slice(1) : ''
  let [inputText, setInputText] = useState('')
  let normalizeQuery = (s) => (s ?? '').trim().toLowerCase()
  let [query, setQuery] = useNormQuery('', normalizeQuery)
  let { pokemon, error, isLoading, isRefreshing } = usePokemon(query)
  let { recents } = useRecents(pokemon)
  let [favorites, toggleFavorite] = useFavorites()

  return (
    <>
      <Header
        inputText={inputText}
        setInputText={setInputText}
        setQuery={setQuery} />
      <Results
        pokemon={pokemon}
        error={error}
        isLoading={isLoading}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
        cap={cap}
        query={query} />
      <Details pokemon={pokemon}
        error={error}
        isLoading={isLoading}
        query={query}
        cap={cap} />
      <Favorites
        favorites={favorites}
        setQuery={setQuery}
        toggleFavorite={toggleFavorite}
        cap={cap} />
      <Recents
        recents={recents}
        setQuery={setQuery}
        cap={cap} />
    </>
  )
}

export default App