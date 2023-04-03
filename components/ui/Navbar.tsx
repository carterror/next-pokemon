import { Spacer, Text, useTheme, Link } from "@nextui-org/react"
import Image from "next/image"
import NextLink from "next/link"

export const Navbar = () => {

    const {theme} = useTheme()

  return (
    <div style={{
        display: 'flex',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        padding: '0px 20px',
        backgroundColor: theme?.colors.gray100.value
    }}>

        <Image src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" alt="logo" width={70} height={70}/>
        
        <NextLink href='/' passHref >
          <>
            <Text css={{float: 'left', padding: '10px 1px'}} color="white" h2>P</Text>
            <Text css={{float: 'left', padding: '15px 1px'}} color="white" h3>okemon</Text>
          </>
        </NextLink>
        <Spacer css={{flex: 1}}/>

        <NextLink href="/favorites">
          <>
            <Text color="white" h3>Favoritos</Text>
          </>
        </NextLink>
    </div>
  )
}

