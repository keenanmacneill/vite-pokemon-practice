import { useEffect, useState } from "react";

export default function useRecents(pokemon) {
  let [recents, setRecents] = useState([])
  useEffect(() => {
    if (pokemon) {
      let newPokemon = {
        id: pokemon.id,
        name: pokemon.name,
        sprite: pokemon['sprites']['other']['official-artwork']['front_default']
      }
      setRecents(prev => {
        return [newPokemon,
          ...prev.filter((poke) => poke.name !== newPokemon.name
          ).slice(0, 9)]
      })
    }
  }, [pokemon])
  return { recents }
}