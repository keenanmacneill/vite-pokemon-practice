import { useState } from "react"

export default function useFavorites() {
  let [favorites, setFavorites] = useState([])
  let toggleFavorite = (pokemon) => {
    if (!pokemon) {
      return
    }
    if (favorites.some(fav => fav.name === pokemon.name)) {
      setFavorites(prev => prev.filter(fav => fav.name !== pokemon.name))
      return
    }
    setFavorites(prev => ([
      pokemon,
      ...prev.filter(favedPoke => favedPoke.name !== pokemon.name)
    ]))
  }

  return { favorites, toggleFavorite }
}