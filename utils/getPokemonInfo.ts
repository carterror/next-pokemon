import { pokeApi } from '@/api'
import { PokemonDetails } from '@/interfaces';

export const getPokemonInfo = async(id: string) => {
    
    try {
        const { data } = await pokeApi.get<PokemonDetails>(`pokemon/${id}`)// your fetch function here 
        
        return {
            id: data.id,
            name: data.name,
            sprites: data.sprites
        }

    } catch (error) {
        return null;        
    }

}
