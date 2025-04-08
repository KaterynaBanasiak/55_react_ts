import { CourseWrapper, Title, List, ListItem } from "./styles.ts";

function Course() {
  return (
    <CourseWrapper>
      <Title>React Lessons</Title>
      <List>
        <ListItem>JSX и компоненты</ListItem>
        <ListItem>Props и State</ListItem>
        <ListItem>Обработка событий</ListItem>
        <ListItem>Роутинг с React Router</ListItem>
        <ListItem>Стилизация (Emotion)</ListItem>
        <ListItem>Формы и Formik</ListItem>
        <ListItem>Валидация с Yup</ListItem>
        <ListItem>Работа с API</ListItem>
        <ListItem>useEffect и useState</ListItem>
      </List>
    </CourseWrapper>
  );
}

export default Course;
