import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
  background-image: url('/img/fondo.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  font-family: 'Segoe UI', sans-serif;
  color: white;
  text-shadow: 0 0 5px rgba(0,0,0,0.7);
}
`;

export default GlobalStyles;
