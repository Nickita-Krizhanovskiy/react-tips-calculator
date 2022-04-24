import Input from "../Input/Input";
import Button from "../Button/Button";
import CustomSelect from "../CustomSelect/CustomSelect";
import React, { useEffect, useState, ChangeEvent, FormEvent } from "react";
import { ICalculator } from "../../types";
import { StyledForm, Title, Text, InputsContainer, Total } from "./style";
import { IOptions } from "../../types/index";

const Form = () => {
  const [cheque, setTotal] = useState<ICalculator>({
    bill: "",
    persons: "",
    tip: { value: 0.1, label: "10%" },
    total: 0,
  });

  const { bill, persons, tip, total } = cheque;

  const [isDisabled, setIsDisabled] = useState(true);

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setTotal({ ...cheque, [name]: value });
  };

  const handleSelect = (value: IOptions | null) => {
    if (value) {
      setTotal({ ...cheque, tip: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(total, bill, tip, persons);
    const totalSum = (+bill * +tip.value) / +persons;

    if (bill && persons) {
      setTotal({ ...cheque, total: totalSum });
    }
  };

  useEffect(() => {
    if (cheque.bill > 0 && cheque.persons > 0) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [cheque]);

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Text>Lets go calculate your tips</Text>
      <InputsContainer>
        <Input
          name="bill"
          type="number"
          placeholder="Enter bill"
          min="1"
          handleInput={handleInput}
          value={bill}
        />
        <Input
          name="persons"
          type="number"
          placeholder="Enter persons "
          handleInput={handleInput}
          value={persons}
          min="1"
        />
        <CustomSelect
          name="selectTip"
          handleSelect={handleSelect}
          value={tip}
        />
      </InputsContainer>
      <Total>Total: {total.toFixed(2)}$</Total>
      <Button isDisabled={isDisabled} />
    </StyledForm>
  );
};

export default Form;