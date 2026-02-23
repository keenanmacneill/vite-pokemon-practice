import { useEffect, useState, useRef } from "react";

export default function usePokemon(debouncedText) {
  let [isLoading, setIsLoading] = useState(false)
  let [error, setError] = useState('')
  let [pokemon, setPokemon] = useState(null)
  let cacheRef = useRef(new Map())

  useEffect(() => {
    if (!debouncedText) {
      return
    }
    if (cacheRef.current.has(debouncedText)) {
      setPokemon(cacheRef.current.get(debouncedText))
      setIsLoading(false)
      setError('')
      return
    }
    setIsLoading(true)
    let controller = new AbortController()
    fetch(`https://pokeapi.co/api/v2/pokemon/${debouncedText}`, { signal: controller.signal })
      .then(r => {
        if (!r.ok) {
          setPokemon(null)
          setIsLoading(false)
          throw new Error(`No such Pokemon exists.`)
        }
        return r.json()

      })
      .then(data => {
        cacheRef.current.set(data.name, data)
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