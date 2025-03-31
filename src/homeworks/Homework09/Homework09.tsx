import { Container, Card, Title, Description } from './styles';

function Homework09() {
  return (
    <Container>
      <Card vip>
        <Title>VIP Пользователь</Title>
        <Description>
          Доступ к эксклюзивным функциям, персональный менеджер и приоритетная поддержка.
        </Description>
      </Card>
      <Card>
        <Title>Обычный Пользователь</Title>
        <Description>
          Стандартный доступ, базовые функции и поддержка в порядке очереди.
        </Description>
      </Card>
    </Container>
  );
}

export default Homework09;

