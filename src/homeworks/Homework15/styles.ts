// src/homeworks/Homework15/styles.ts
import styled from "@emotion/styled";

export const Homework15Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: white;
  padding: 30px;
  border: 1px solid #ddd;
  border-radius: 8px;
  max-width: 500px;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 14px;
  height: 18px;
`;
