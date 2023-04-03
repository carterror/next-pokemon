import { Pokemon } from "@/interfaces";
import { Card, Grid, Row, Text } from "@nextui-org/react";
import { useRouter } from 'next/router';

interface Props {
    pokemon: Pokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
 
    const router = useRouter()
    const onClick = () => {
        router.push(`/name/${pokemon.name}`)
    }

    return (
        <Grid key={pokemon.id} xs={6} sm={3} md={2} xl={1}>
            <Card isPressable isHoverable onClick={ onClick }>
              <Card.Body css={{ p: 0 }}>
                <Card.Image
                  src={pokemon.image}
                  width="100%"
                  height={200}
                  alt={pokemon.name}
                />
              </Card.Body>
              <Card.Footer css={{ justifyps: "flex-start" }}>
                <Row wrap="wrap" justify="space-between" align="center">
                  <Text b transform='capitalize'>{pokemon.name}</Text>
                  <Text css={{ color: "$accents7", fontWeight: "$semibold", fontSize: "$sm" }}>
                    #{pokemon.id + 1}
                  </Text>
                </Row>
              </Card.Footer>
            </Card>
          </Grid>
    )
}