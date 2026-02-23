import useLocalStorage from "./useLocalStorage";

export default function useFavorites() {
  let [favorites, setFavorites] = useLocalStorage('favorites', [])
  let toggleFavorite = (pokemon) => {
    if (!pokemon) {
      return
    }
    if (favorites.some(fav => fav.name === pokemon.name)) {
      setFavorites(prev => prev.filter(fav => fav.name !== pokemon.name))
      return
    }
    setFavorites(prev => [...prev, pokemon].sort((a, b) => a.name.localeCompare(b.name)))
  }

  return [favorites, toggleFavorite]
}