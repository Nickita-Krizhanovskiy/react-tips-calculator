import { StyledInput } from "./style";

interface IProps {
  placeholder: string;
  name: string;
  type: string;
  min: string;
  value: string | number;
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input = ({
  name,
  placeholder,
  type,
  value,
  min,
  handleInput,
}: IProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      name={name}
      min={min}
      value={value}
      onChange={handleInput}
    />
  );
};
export default Input;