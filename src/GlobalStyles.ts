import { createGlobalStyle } from "styled-components";
import circles from "./assets/circles.svg";
export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
input, select{
  border: none;
  &:focus{
    outline: none;
  }
}
button {
  border: 0;
  background: none;
  outline: none;
  cursor: pointer;
}
body{
  font-family: 'Noto Sans', sans-serif;
  background-size: 171px 150px;
  background: no-repeat top left url(${circles}) rgba(234, 242, 242, 1);
}
`;