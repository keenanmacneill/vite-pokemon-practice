import { useState, useEffect } from 'react'
import './App.css'
import Results from './components/Results/Results'
import Details from './components/Details/Details'
import Header from './components/Header/Header'
import useDebounce from './hooks/useDebounce'

function App() {
  const [inputText, setInputText] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [pokemon, setPokemon] = useState(null)
  let debouncedText = useDebounce(inputText)
  useEffect(() => {
    if (debouncedText.trim().length === 0) {
      setError('')
      setPokemon(null)
      setIsLoading(false)
      return
    }
    setIsLoading(true)
    const pokeName = debouncedText.trim().toLowerCase()
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then(r => {
        if (!r.ok) {
          setPokemon(null)
          setIsLoading(false)
          throw new Error(`No such Pokemon exists.`)
        }
        return r.json()
      })
      .then(data => {
        setPokemon(data)
        setIsLoading(false)
        setError('')
      })
      .catch((err) => {
        setError(err.message)
        setPokemon(null)
        setIsLoading(false)
      })
  }, [debouncedText]
  )
  return (
    <>
      <Header inputText={inputText} setInputText={setInputText} />
      <Results inputText={inputText} isLoading={isLoading} error={error} pokemon={pokemon} />
      <Details />
    </>
  )
}

export default App
