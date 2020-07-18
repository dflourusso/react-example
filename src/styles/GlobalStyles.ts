import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --primary: #2BA189;
    --secondary: #1B5EB1;
    --error: #D84654;
    --text: #fff;
    --background: #777;
    --background-light: #555;
    --background-dark: #333;
  }
`