/* eslint-disable jsx-a11y/alt-text */
import { Layouts } from "@/components/layouts"
import { PokemonFavorite } from "@/components/pokemon";
import { NoFavorite } from "@/components/ui";
import { localFavorite } from "@/utils";
import { Card, Container, Grid, Text } from '@nextui-org/react';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { PokemonFavoriteCard } from '../../components/pokemon/pokemonFavoriteCard';

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