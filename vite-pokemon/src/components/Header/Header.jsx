import { useContext, useState, useEffect } from 'react'
import AppContext from '../../AppContext'
import useDebounce from '../../hooks/useDebounce'

export default function Header() {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [pokemon, setPokemon] = useState(null)
  let { inputText, setInputText } = useContext(AppContext)
  let debouncedText = useDebounce(inputText)
  useEffect(() => {
    if (debouncedText.trim().length === 0) {
      setError(null)
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
          throw new Error(`Error, no such Pokemon exists`)
        }
        return r.json()
      })
      .then(data => {
        setPokemon(data)
        setIsLoading(false)
        setError(null)
      })
      .catch((err) => {
        setError(err.message)
        setPokemon(null)
        setIsLoading(false)
      })
  }, [debouncedText]
  )

  return (
    <header>
      <h1>Title</h1>
      <input type='search' placeholder='Search for a Pokemon...' value={inputText} onChange={(e) => setInputText(e.target.value)}></input>
      <button>Search</button>
    </header>
  )
}