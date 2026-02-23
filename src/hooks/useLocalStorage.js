import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  let [value, setValue] = useState(() => {
    let storedValue = localStorage.getItem(key);
    try {
      return storedValue ? JSON.parse(storedValue) : defaultValue
    }
    catch {
      return defaultValue
    }
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value]
  )
  return [value, setValue]
}