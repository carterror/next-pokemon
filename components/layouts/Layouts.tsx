import { NextPage } from 'next';
import Head from 'next/head';

import { FC, ReactNode } from 'react';
import { Navbar } from '../ui';

interface MyProps {
   children?: ReactNode;
   title?: string
}

export const Layouts: FC<MyProps> = ({children, title}) => {
    return (
    <>
        <Head>
            <title>{ title || "Pokemon App"}</title>
            <meta name="author" content="Carlos Brayan" />
            <meta name="description" content={`Info about pokemon ${title}`} />
            <meta name="keywords" content={`Pokemon, pokedex, ${title}`} />
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
