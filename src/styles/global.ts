import { createGlobalStyle, withTheme } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        //dark mode
        --dark--background: #2B2C37;
        --dark-text:#FFFFFF;

        //light mode
        --light--background:#F2F2F2;
        --light-text:#000112;

    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0;
    }

    body{
        //styleName: Body (L);
        font-family: 'Plus Jakarta Sans', sans-serif;
        font-size: 13px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0px;
        text-align: left;
    }

    //Heading(XL)
    h1{
        //styleName: Heading (XL);
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        letter-spacing: 0px;
        text-align: left;
    }
`;
