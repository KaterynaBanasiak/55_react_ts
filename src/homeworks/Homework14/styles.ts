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

export const InputField = styled.input`
  padding: 10px;
  font-size: 16px;
`;

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
