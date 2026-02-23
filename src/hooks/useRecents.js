import { useEffect } from "react";
import useLocalStorage from "./useLocalStorage";

export default function useRecents(pokemon) {
  let [recents, setRecents] = useLocalStorage('recents', [])
  useEffect(() => {
    if (pokemon) {
      let recentPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon['sprites']['other']['official-artwork']['front_default']
      }
      setRecents(prev => {
        return [recentPokemon,
          ...prev.filter((poke) => poke.name !== recentPokemon.name
          ).slice(0, 9)]
      })
    }
  }, [pokemon])
  return { recents }
}