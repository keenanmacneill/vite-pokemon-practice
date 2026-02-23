import { useEffect, useState } from "react";

export default function useRecents(pokemon) {
  let [recents, setRecents] = useState([])
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