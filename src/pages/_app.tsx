import { useEffect } from 'react'

import { ThemeProvider } from 'styled-components'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./_app.css"

import GlobalStyle from '../styles/globalstyles'
import theme from '../styles/theme'

import Layout from '../components/Layout'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}