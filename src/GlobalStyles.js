// to use styled components first we need top import a tool
import { createGlobalStyle } from "styled-components";

// inside the temperate literal, we create our css
export const createGlobalStyle = createGlobalStyle`
    :root {
        --maxWidth: 1280px;
        --white: #fff;
        --lightGrey: #eee;
        --medGrey: #353535;
        --darkGrey: #1c1c1c;
        --fontSuperBig: 2.5rem;
        --fontBig: 1 .5rem;
        --fontMed: 1.2rem;
        --fontSmall: 1 rem;
    }

    * {
        box-sizing: border-box;
        font-family: 'Abel', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;

        h1 {
            font-size: 2rem;
            font-weight: 600;
            color: var(--white)
        }

        h3 {
            
        }
    }






`