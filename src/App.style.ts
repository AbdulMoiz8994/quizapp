import styled, { createGlobalStyle } from "styled-components";
//@ts-ignore

import BGIMAGE from "./Images/BG.jpg";

export const StyleComp = createGlobalStyle`
   html{
       height: 100%;
   }

body{
    background-image: url(${BGIMAGE});
    background-size: cover;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
}
 *{
  box-sizing: border-box;

 }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > p {
    color: #fff;
    font-family: "Anton", sans-serif;
  }
  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-weight: 400;
    font-size: 70px;
    text-align: center;
    margin: 20px;
    background-size: 100%;
    background-clip: text;
  }

  button {
    cursor: pointer;
    border: 2px solid #d38588;
    border-radius: 10px;
    box-shadow: 0px 5px 10px rgba(0, 0, 0.25);
    height: 40px;
    margin: 20px 0px;
    padding: 0 40px;
    width: 20vw;
    font-family: "Anton", sans-serif;
  }
  button {
    max-width: 200px;
  }
`;
