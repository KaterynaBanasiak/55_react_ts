import { ClientsWrapper, Title, StyledLink } from "./styles.ts";

function Clients() {
  return (
    <ClientsWrapper>
      <Title>Clients</Title>
      <StyledLink to="facebook">Facebook</StyledLink>
      <StyledLink to="google">Google</StyledLink>
      <StyledLink to="amazon">Amazon</StyledLink>
    </ClientsWrapper>
  );
}

export default Clients;
