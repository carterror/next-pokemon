import { Card, Grid } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
  id:number
}

export const PokemonFavoriteCard = ({id}: Props) => {
  
  const router = useRouter()

  const routing = () => {
    router.push(`/pokemon/${id}`)
  }

  return (
    <Grid xs={6} sm={3} md={2} xl={1} >
      <Card css={{ padding: "15px" }} isHoverable isPressable onPress={routing}>
        <Card.Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
        />
      </Card>
    </Grid>
  );
}
