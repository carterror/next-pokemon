import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

interface MyProps {
   children?: ReactNode;
   title?: string
}

export const Layouts: FC<MyProps> = ({children, title}) => {

    const origin = (typeof window ! == 'undefined') ?? '';
    
    return (
    <>
        <Head>
            <title>{ title || "Pokemon App"}</title>
            <meta name="author" content="Carlos Brayan" />
            <meta name="description" content={`Info about pokemon ${title}`} />
            <meta name="keywords" content={`Pokemon, pokedex, ${title}`} />
            <meta property="og:title" content={`Info about pokemon ${title}`} />
            <meta property="og:description" content="This pages about info the pokemons" />
            <meta property="og:image" content={`${origin}/img/banner.png`} />
        </Head>
        <Navbar />
        <main style={{
            padding: '0px 20px'
        }}>
            {children}
        </main>
    </>
  )
}
