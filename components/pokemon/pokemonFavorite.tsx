import { Grid } from "@nextui-org/react"
import { PokemonFavoriteCard } from './pokemonFavoriteCard';

interface Props {
  favorites: number[]
}

export const PokemonFavorite = ({favorites}: Props) => {
  
  return (
    <Grid.Container gap={2} direction="row" justify="flex-start">
      {favorites.map((id) => (
        <PokemonFavoriteCard key={id} id={id} />
      ))}
    </Grid.Container>
  );
}
