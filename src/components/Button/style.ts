import styled from "styled-components";

const StyledButton = styled.button`
  font-weight: 400;
  font-size: 24px;
  line-height: 35px;
  color: #ffffff;
  max-width: 459px;
  width: 100%;
  padding-top: 13px;
  padding-bottom: 13px;
  background-color: #2ed2c9;
  transition: background-color 0.3s;
  &:hover {
    background-color: #25ada5;
  }
  &:active {
    background-color: #2ed2c9;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
    &:hover {
      background-color: #2ed2c9;
    }
  }
  @media (max-width: 1024px) {
    max-width: 331px;
  }
`;

export { StyledButton };