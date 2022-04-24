import { StyledButton } from "./style";

interface IProps {
  isDisabled: boolean;
}

const Button = ({ isDisabled }: IProps) => {
  return (
    <StyledButton type="submit" disabled={isDisabled}>
      Ohhhoooo🍻
    </StyledButton>
  );
};
export default Button;