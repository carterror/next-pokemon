import  { Layouts }  from '../components/layouts'
import { GetStaticProps, NextPage } from 'next'
import { pokeApi } from '@/api';
import { Pokemon, PokemonList } from '@/interfaces';
import { Grid } from '@nextui-org/react';
import { PokemonCard } from '@/components/pokemon';

interface Props {
  pokemons: Pokemon[]
}

const HomePage: NextPage<Props> = ({pokemons}) => {
  
  return (
    <Layouts title="Listado de porkemon">
      <Grid.Container gap={2} justify='flex-start'>

          {pokemons.map((p) =>
            <PokemonCard key={p.id} pokemon={p} />
          )}

      </Grid.Container>
    </Layouts>
  )
}


export const getStaticProps: GetStaticProps = async (ctx) => {
  let pokemons: Pokemon[] = []

  try {
    const {data} = await pokeApi.get<PokemonList>('pokemon?limit=20 ') 
    pokemons = data.results.map((pokemon, id) => {

      return {
        ...pokemon,
        id,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id+1}.svg`
      };
    })
  } catch (error) {
    console.error('No hay conexion con la api');
  }
    
  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;