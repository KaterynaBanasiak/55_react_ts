import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  height: 100vh;
  width: 100vw;
  background-color: #f4f4f4;
`;

export const Card = styled.div<{ vip?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 320px;
  height: 320px;
  background-color: ${({ vip }) => (vip ? '#FFD700' : '#D3D3D3')};
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(128, 0, 128, 0.5);
  text-align: center;
  font-family: Arial, sans-serif;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: 
      radial-gradient(rgba(128, 0, 128, 0.2) 10%, transparent 20%);
    background-size: 20px 20px;
    opacity: 0.5;
    z-index: 0;
  }
`;

export const Title = styled.h2`
  font-size: 24px;
  color: #333;
  position: relative;
  z-index: 1;
`;

export const Description = styled.p`
  font-size: 16px;
  color: #555;
  position: relative;
  z-index: 1;
`;
