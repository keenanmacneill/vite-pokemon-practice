import { useEffect, useState } from 'react'

export default function useDebounce(text) {
  let [debText, setDebText] = useState(null)
  useEffect(() => {
    let timeout = setTimeout(() => setDebText(text), 1000);
    return () => {
      clearTimeout(timeout)
    }
  }, [text]);
  return debText
}