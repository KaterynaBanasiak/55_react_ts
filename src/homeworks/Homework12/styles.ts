import styled from "@emotion/styled";
import backImage from '../../assets/Image20250403101214.jpg';

export const Homework12Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  background-color: #f0f0f0;
  background-image: url(${backImage});
  background-position: center;
  background-size: cover;
`;

export const FactWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 400px;
  min-height: 200px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  font-size: 18px;
  color: #333;
  font-weight: bold;
  text-align: center;
`;

export const Error = styled.div`
  font-size: 16px;
  color: red;
  font-weight: bold;
`;
