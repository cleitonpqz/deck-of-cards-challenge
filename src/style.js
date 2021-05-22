import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  html {
    background: #16785C;
  }

  body {
    height: 100%;
    margin: 20px 80px;
  }

  .App {
    display: flex;
    flex-direction: column;
  }
`

export default GlobalStyles
