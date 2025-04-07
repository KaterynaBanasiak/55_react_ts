import { FC } from "react";
import { StyledCheckboxContainer, StyledLabel, StyledInput } from "./styles";
import { ErrorMessage } from "../../homeworks/Homework15/styles";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; 
}

const Checkbox: FC<CheckboxProps> = ({ id, name, label, checked, onChange, error }) => {
  return (
    <StyledCheckboxContainer>
      <StyledInput
        id={id}
        name={name}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </StyledCheckboxContainer>
  );
};

export default Checkbox;

