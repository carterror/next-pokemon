import { Layouts } from "@/components/layouts"
import { NextPage } from "next"
import { GetStaticPaths, GetStaticProps } from 'next'
import { pokeApi } from '@/api';
import { PokemonDetails } from '@/interfaces';
import { Button, Card, Container, Grid, Text } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { localFavorite, getPokemonInfo } from "@/utils";
import confetti from "canvas-confetti";


interface Props {
    pokemon: PokemonDetails;
}

const PokemonPage: NextPage<Props> = ({pokemon}) => {
        
    const [isFavorite, setisFavorite] = useState(localFavorite.isFavorite(pokemon.id))

    const onToggleFavorite = () => {
        localFavorite.toggleFavorite(pokemon.id);
        setisFavorite(!isFavorite)

        if (!isFavorite) {
            confetti({
                zIndex: 999,
                particleCount: 100,
                angle: -100,
                spread: 160,
                origin: { x: 1, y: 0, } 
            })
        }
    }
        
  return (
    <Layouts title={pokemon.name}>
        <Grid.Container css={{marginTop: '5px'}} gap={2} >
            <Grid xs={12} sm={4} >
                <Card css={{padding: '20px'}} >
                    <Card.Body >
                        <Card.Image
                            src={pokemon.sprites.other?.dream_world.front_default || 'no-image.png'} 
                            alt={pokemon.name}
                            width="100%"
                            height={200}
                        />
                    </Card.Body>
                </Card>
            </Grid>

            <Grid xs={12} sm={8}>
                <Card>
                <Card.Header css={{display: 'flex', justifyContent: 'space-between'}}>
                    <Text transform='capitalize' h1>{pokemon.name}</Text>
                    <Button color="gradient" ghost={!isFavorite} onPress={onToggleFavorite}>
                        {isFavorite ? "Favorite" : "Add Favorite"}
                    </Button>
                </Card.Header>
                <Card.Body>
                    <Text size={30}>Sprites</Text>
                    <Container direction="row" display="flex" gap={1}>
                        <Image 
                        src={pokemon.sprites.front_default} 
                        alt={pokemon.name}
                        width={120}
                        height={120}
                        />
                        <Image 
                        src={pokemon.sprites.back_default} 
                        alt={pokemon.name}
                        width={120}
                        height={120}
                        />
                        <Image 
                        src={pokemon.sprites.front_shiny} 
                        alt={pokemon.name}
                        width={120}
                        height={120}
                        />
                        <Image 
                        src={pokemon.sprites.back_shiny} 
                        alt={pokemon.name}
                        width={120}
                        height={120}
                        />
                    </Container>
                </Card.Body>
                </Card>
            </Grid>
        </Grid.Container>    
    </Layouts>
  )
}

export const getStaticPaths: GetStaticPaths = async (ctx) => {
    // const { data } = await  // your fetch function here 
    const pokemon151 = [...Array(20)].map((value, index) => `${index+1}`)
    
    return {
        paths: pokemon151.map(id => ({
            params: { id }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {

    const {id} = params as { id:string }

    const { data } = await  pokeApi.get<PokemonDetails>(`pokemon/${id}`)// your fetch function here 

    const pokemon = {
        id: data.id,
        name: data.name,
        sprites: data.sprites
    }

    return {
        props: {
            pokemon: await getPokemonInfo(id)
        }
    }
}

export default PokemonPage;