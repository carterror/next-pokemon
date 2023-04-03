import { Layouts } from '@/components/layouts';
import { getPokemonInfo, localFavorite } from '@/utils';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import confetti from 'canvas-confetti';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useState } from 'react';
import { pokeApi } from '@/api';
import { PokemonList, PokemonDetails, Sprites } from '@/interfaces';

interface Props {
    pokemon: PokemonDetails;
}

const PokemonName:  NextPage<Props> = ({pokemon}) => {
    const [isFavorite, setisFavorite] = useState(localFavorite.isFavorite(pokemon.id))
    // console.log(pokemon);
    
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
                <Card.Header>
                    <Grid.Container css={{display: 'flex', justifyContent: 'flex-end'}} gap={2}>
                    <Grid xs={12} sm={6} >
                        <Text transform='capitalize' h1>{pokemon.name}</Text>
                    </Grid>
                    <Grid xs={12} sm={6} css={{display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start'}}>
                        <Button color="gradient" ghost={!isFavorite} onPress={onToggleFavorite}>
                            {isFavorite ? "Favorite" : "Add Favorite"}
                        </Button>
                    </Grid>
                    </Grid.Container>
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
    // console.log('asd', ctx.locales);
    const {data} = await pokeApi.get<PokemonList>('pokemon?limit=20 ') 

    const pokemon151: string[] = data.results.map((value) => `${value.name}`)
    
    return {
        paths: pokemon151.map(name => ({
            params: { name }
        })),
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({params}) => {


    const {name} = params as { name:string }


    return {
        props: {
            pokemon: await getPokemonInfo(name)
        }
    }
}

export default PokemonName