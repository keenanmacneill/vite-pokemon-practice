import { useEffect, useState, useRef } from "react";

export default function usePokemon(query) {
  let [isLoading, setIsLoading] = useState(false)
  let [isRefreshing, setIsRefreshing] = useState(false)
  let [error, setError] = useState('')
  let [pokemon, setPokemon] = useState(null)
  let cacheRef = useRef(new Map())

  useEffect(() => {
    if (!query) return
    let hasCache = cacheRef.current.has(query)
    if (hasCache) {
      setPokemon(cacheRef.current.get(query))
      setError('')
      setIsRefreshing(true)
    } else {
      setIsLoading(true)
      setIsRefreshing(false)
    }
    let controller = new AbortController()
    fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, { signal: controller.signal })
      .then(r => {
        if (!r.ok) {
          setIsLoading(false)
          setIsRefreshing(false)
          if (hasCache) return null
          throw new Error(`No such Pokemon exists.`)
        }
        return r.json()
      })
      .then(data => {
        if (!data) return
        cacheRef.current.set(query, data)
        setPokemon(data)
        setIsLoading(false)
        setIsRefreshing(false)
        setError('')
      })
      .catch((err) => {
        if (err.name === 'AbortError') return
        if (!hasCache) setPokemon(null)
        setIsLoading(false)
        setIsRefreshing(false)
        setError(err.message)
      })
    return () => controller.abort()
  }, [query])
  return { pokemon, error, isLoading, isRefreshing }
}