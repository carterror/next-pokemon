import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'
import { darkTheme } from '../themes'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  )
}
