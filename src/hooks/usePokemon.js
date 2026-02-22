import { useEffect, useState } from "react";

export default function usePokemon(debouncedText) {
  let [isLoading, setIsLoading] = useState(false)
  let [error, setError] = useState('')
  let [pokemon, setPokemon] = useState(null)

  useEffect(() => {
    let pokeName = (debouncedText ?? '').trim().toLowerCase()
    if (pokeName.length === 0) {
      setError('')
      setPokemon(null)
      setIsLoading(false)
      return
    }
    let controller = new AbortController()
    setIsLoading(true)
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeName}`, { signal: controller.signal })
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
        if (err.name === 'AbortError') {
          return
        }
        setIsLoading(false)
        setError(err.message)
        setPokemon(null)
      })
    return () => controller.abort()
  }, [debouncedText])
  return { pokemon, error, isLoading }
}