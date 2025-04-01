// Input.tsx
import React from "react";
import { InputHTMLAttributes } from "react";
import styled from "@emotion/styled";

// Обновим интерфейс InputProps, добавив нужные пропы
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  search?: boolean;
}

const StyledInput = styled.input<InputProps>`
  padding: 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 100%;
  max-width: 300px;
  background-color: ${(props) => (props.search ? "#f0f0f0" : "white")};
`;

const Input: React.FC<InputProps> = ({ search, ...rest }) => {
  return <StyledInput {...rest} search={search} />;
};

export default Input;
