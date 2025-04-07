import { FC } from "react";
import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

// Интерфейс пропсов для Button, наследуем от стандартных ButtonHTMLAttributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  danger?: boolean;  // Добавляем свой проп danger
}

const StyledButton = styled.button<{ danger?: boolean }>`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.danger ? "green" : "orange")};
  color: white;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.danger ? "#006600" : "#ff6600")};
  }
`;

const Button: FC<ButtonProps> = ({ children, danger = false, type = "submit", ...rest }) => {
  return (
    <StyledButton {...rest} type={type} danger={danger}>
      {children}
    </StyledButton>
  );
};

export default Button;
