import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 40px;
  margin: 0 auto;
  width: 400px;
  background-color: #f1f1f1;
  border-radius: 8px;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const InputField = styled.input<{ error?: boolean }>`
  padding: 10px;
  font-size: 16px;
  border: 1px solid ${({ error }) => (error ? "red" : "#ccc")};
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: ${({ error }) => (error ? "red" : "#888")};
  }
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: -10px;
  margin-bottom: 10px;
`;
