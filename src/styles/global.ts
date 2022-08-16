import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* :root{
        //dark mode
        --dark--background: #2B2C37;
        --dark-text:#FFFFFF;

        //light mode
        --light--background:#F2F2F2;
        --light-text:#000112;

    } */

    *{
        font-family: 'Plus Jakarta Sans', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline:0;
        left: 0px;
        top: 0px;
    }

    /* bodyL{
        //styleName: Body (L);
        font-size: 13px;
        font-weight: 500;
        line-height: 23px;
        letter-spacing: 0px;
        letter-spacing: 0px;
    } */
    body{
        //styleName: Body (M);
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        letter-spacing: 0px;
    }

    //Heading(XL)
    h1{
        //styleName: Heading (XL);
        font-size: 24px;
        font-weight: 700;
        line-height: 30px;
        text-align: left;
    }

    h2{
        //styleName: Heading (L);
        font-size: 18px;
        font-weight: 700;
        line-height: 23px;
        text-align: left;
    }
    h3{
          //styleName: Heading (M);
        font-size: 15px;
        font-weight: 700;
        line-height: 19px;
        text-align: left;
    }
    h4{
        //styleName: Heading (S);
        font-size: 12px;
        font-weight: 700;
        line-height: 15px;
        text-align: left;
        letter-spacing: 2.4px;
    }
`;
