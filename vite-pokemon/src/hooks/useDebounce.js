import { useEffect, useState } from 'react'

export default function useDebounce(text) {
  const [debText, setDebText] = useState('')
  useEffect(() => {
    const timeout = setTimeout(() => setDebText(text), 1000);
    return () => {
      clearTimeout(timeout)
    }
  }, [text]);
  return debText
}