import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ClientsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex: 1;
  padding: 60px;
  background-color: rgb(234, 229, 252);
`;

export const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: #3f207d;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: bold;
  color: #6a0dad;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
