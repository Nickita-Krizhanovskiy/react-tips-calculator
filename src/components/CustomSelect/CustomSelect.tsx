import Select, { StylesConfig } from "react-select";
import { IOptions } from "../../types/index";

interface ISelect {
  name: string;
  value: IOptions;
  handleSelect: (options: IOptions | null) => void;
}

const CustomSelect = ({ name, handleSelect, value }: ISelect) => {
  const customStyles: StylesConfig<IOptions> = {
    control: (provided) => ({
      ...provided,
      maxWidth: "456px",
      width: "100%",
      borderRadius: "30px",
      paddingTop: "15px",
      paddingBottom: "15px",
      paddingLeft: "10px",
      border: "none",
      cursor: "pointer",
      "@media (max-width: 1024px)": {
        maxWidth: "331px",
      },
    }),

    singleValue: (provided) => ({
      ...provided,
      textAlign: "center",
      color: " rgba(117, 108, 108, 0.6)",
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: " rgba(117, 108, 108, 1) ",
    }),
    indicatorsContainer: (provided) => ({
      ...provided,
      marginRight: "19px",
    }),
    placeholder: (provided) => ({
      ...provided,
      fontWeight: "400",
      fontSize: "18px",
      lineHeight: "26px",
      color: " rgba(117, 108, 108, 1) ",
    }),

    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };
  const options: IOptions[] = [
    { value: 0.1, label: "10%" },
    { value: 0.15, label: "15%" },
    { value: 0.2, label: "20%" },
  ];

  return (
    <Select
      name={name}
      onChange={handleSelect}
      isMulti={false}
      value={value}
      defaultValue={options[0]}
      options={options}
      styles={customStyles}
    />
  );
};

export default CustomSelect;