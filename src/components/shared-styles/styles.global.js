import styled, { createGlobalStyle, css } from "styled-components";
import * as styles from "./styles.guide";

export default createGlobalStyle`
  body {
    @import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500');
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    color: ${styles.color.superdarkgray};
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box; 
  }

  button, a {
    cursor: pointer;
  }
`;

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledContainer = styled.section`
  ${flexCenter}
  flex-direction: ${props => props.column && `column`};
  width: 30rem;

  padding: 2rem;
  margin: 1rem;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px ${styles.color.extralightgray};
`;

export const StyledApp = styled.main`
  ${flexCenter}
`;
