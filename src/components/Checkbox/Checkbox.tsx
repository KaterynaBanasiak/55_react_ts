import { FC } from "react";
import { StyledCheckboxContainer, StyledLabel, StyledInput } from "./styles";

interface CheckboxProps {
  id: string;
  name: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: FC<CheckboxProps> = ({ id, name, label, checked, onChange }) => {
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
    </StyledCheckboxContainer>
  );
};

export default Checkbox;
