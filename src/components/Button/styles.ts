import styled from "@emotion/styled";

interface ButtonStyledProps {
  danger?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  width: 300px;
  padding: 20px;
  font-size: 26px;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  background-color: ${({ danger }) => (danger ? "red" : "blue")};

  &:hover {
    background-color: ${({ danger }) => (danger ? "#f93838d2" : "#5c5eea")};
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

  