import { useState, useCallback } from 'react'

export default function useNormQuery(initialValue, normalize) {
  const [value, setValue] = useState(initialValue)

  const setNormalizedValue = useCallback((next) => {
    setValue((prev) => {
      const raw = typeof next === 'function' ? next(prev) : next
      return normalize(raw)
    })
  }, [normalize])

  return [value, setNormalizedValue]
}