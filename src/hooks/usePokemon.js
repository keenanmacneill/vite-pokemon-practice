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
      setIsLoading(false)
      setIsRefreshing(true)
    } else {
      setIsLoading(true)
      setIsRefreshing(false)
    }

    let controller = new AbortController()
    let fetchData = async () => {
      try {
        let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`, { signal: controller.signal })

        if (!res.ok) {
          if (hasCache) return
          throw new Error(`No such Pokemon exists.`)
        }

        let data = await res.json()

        if (!data) return
        cacheRef.current.set(query, data)
        setPokemon(data)
      }

      catch (err) {
        if (err.name === 'AbortError') return
        if (!hasCache) setPokemon(null)
        setError(err.message)
      }

      finally {
        setIsLoading(false)
        setIsRefreshing(false)
      }
    }
    fetchData()
    return () => controller.abort()
  }, [query])
  return { pokemon, error, isLoading, isRefreshing }
}