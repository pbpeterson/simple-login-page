import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  *, *::after *::before { 
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  p, h2, button, input {
    color: #18345E;
    font-family: Georgia, 'Times New Roman', Times, serif;
  }
`

export default GlobalStyles
