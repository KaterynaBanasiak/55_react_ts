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
  
  background-color: ${({ danger }) => (danger ? "green" : "orange")};

  &:hover {
    background-color: ${({ danger }) => (danger ? "#006400" : "#ff8c00")};
  }

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

  