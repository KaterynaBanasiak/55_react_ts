import Message from '../Message/Message';
import styled from '@emotion/styled';

const CardContainer = styled.div`
  margin-top: 20px;
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 12px;
`;

function Card() {
  return (
    <CardContainer>
      <h2>Anna Petrova</h2>
      <Message />
    </CardContainer>
  );
}

export default Card;

