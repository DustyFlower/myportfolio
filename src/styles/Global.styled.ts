import {createGlobalStyle} from 'styled-components';
import {theme} from './Theme';

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    overflow-x: hidden;
}

body {
    margin: 0;
    font-family: "Fira Code", -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.fontText};
    line-height: 1.2;
    background-color: ${theme.colors.background};
    
    width: 100%;
    height: 100%;
    min-width: 360px;

    position: relative;
    overflow-x: clip;

    @media (max-width: 359px) {
        transform-box: border-box;
        transform-origin: top center;
        transform: scale(0.9);
    }

    @media (max-width: 320px) {
        transform-box: border-box;
        transform-origin: top center;
        transform: scale(0.85);
    }

    @media (max-width: 300px) {
        transform-box: border-box;
        transform-origin: top center;
        transform: scale(0.8);
    }
}

a {
    text-decoration: none;
}

ul {
    list-style: none;
}

button {
    background-color: unset;
    border: none;
}

section {
    background-color: ${theme.colors.background};
}
`