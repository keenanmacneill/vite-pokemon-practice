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
    let newFavorite = {
      id: pokemon.id,
      name: pokemon.name,
      sprite: pokemon['sprites']['other']['official-artwork']['front_default']
    }
    setFavorites(prev => ([
      newFavorite,
      ...prev.filter(poke => poke.name !== newFavorite.name)
    ]))
  }

  return { favorites, toggleFavorite }
}