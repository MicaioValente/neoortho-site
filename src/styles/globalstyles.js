import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-display: swap;
    scroll-behavior: smooth;
    scroll-margin-top: 90px;
  }

  a {
    text-decoration: none;
  }

  html, body {
    background-color: ${({ theme }) => theme.colors.col4};
  }
`

export default GlobalStyle