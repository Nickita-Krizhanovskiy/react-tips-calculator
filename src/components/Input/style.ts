import styled from "styled-components";

const StyledInput = styled.input`
  font-weight: 400;
  font-size: 18px;
  line-height: 26px;
  text-align: center;
  color: #000000;
  max-width: 456px;
  width: 100%;
  padding: 20px 20px;
  background: #ffffff;
  border-radius: 30px;
  &::placeholder {
    font-weight: 400;
    font-size: 18px;
    line-height: 26px;
    color: rgba(117, 108, 108, 0.6);
  }
  @media (max-width: 1024px) {
    max-width: 331px;
  }
`;

export { StyledInput };