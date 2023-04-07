import React, { HTMLAttributes, HtmlHTMLAttributes } from 'react'
import { Grid, Input, Container, Button } from '@nextui-org/react';
import {Search as SearchIcon} from 'react-iconly'
import { useState } from 'react';
import { redirect } from 'next/dist/server/api-utils';
import { useRouter } from 'next/router';
const Search = () => {

    const [busca, setbusca] = useState("")


    const router = useRouter()

    const buscar = () => {
        router.push(`/name/${busca.toLocaleLowerCase()}`)
    }

    const changebusca = (ev:string) => {
        setbusca(ev);
    }

  return (
    <Grid.Container gap={0} css={{margin: '50px', width: '100%'}}>
      <Grid >
        <Input 
          size='xl'
          labelPlaceholder="Search" 
          status="default" 
          onChange={ev => changebusca(ev.target.value)}
        />
        </Grid>
        <Grid>
        <Button
        onPress={() => buscar()}
        css={{marginTop: '5px'}}
        auto
        color="error"
        icon={<SearchIcon />}
      />
      </Grid>
      
    </Grid.Container>
  )
}

export default Search