import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
      margin:0;
      padding:0;
      box-sizing: border-box;
     :focus {
      outline: none;
   }
   body {
      font-family: 'Epilogue', sans-serif;
      border: 0;
      outline: 0;
      color: #000000;
      line-height: 24px;
   }
   ul{
      list-style: none;
   }
   a {
      outline: none;
      color: #4285DE;
      transition: color 0.2s ease-in;
   }
   h1 {
      font-weight: 700;
      font-size: 28px;
      line-height: 29px;
   }
   h2{
      font-weight: 600;
      font-size: 21px;
   }
   button {
      cursor:pointer;
      transition: 0.2s ease-in;
      border: none;
   }
`;

export default GlobalStyle;
