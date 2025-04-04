import styled from "@emotion/styled";

export const Lesson13Container = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;  
  height: 100vh;
  background-color: #6c8ac7;
`;

export const ImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  width: 500px;
  max-height: 700px;
  overflow-y: auto;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: lightgrey;
`;

export const ImageWrapper = styled.img`
  width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 18px;
  font-weight: bold;
`;
