/** @jsxImportSource @emotion/react */
import { ButtonStyled } from "./styles.ts";
import { ButtonProps } from "./types";

const Button: React.FC<ButtonProps> = ({ children, danger = false, onClick, type = "button", disabled }) => {
  return (
    <ButtonStyled danger={danger} onClick={onClick} type={type} disabled={disabled}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
