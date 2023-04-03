/* eslint-disable jsx-a11y/alt-text */
import { Layouts } from "@/components/layouts"
import { PokemonFavorite } from "@/components/pokemon";
import { NoFavorite } from "@/components/ui";
import { localFavorite } from "@/utils";
import { useState, useEffect } from 'react';

const FavoritesPages = () => {

  const [favorites, setfavorites] = useState<number[]>([])

  useEffect(() => {
    setfavorites(localFavorite.pokemons)
  }, [])
  

  return (
    <Layouts title="Favoritos">

      {
        favorites.length == 0
        ? <NoFavorite />
        : <PokemonFavorite favorites={favorites}/>
      }
      

    </Layouts>
  )
}

export default FavoritesPages