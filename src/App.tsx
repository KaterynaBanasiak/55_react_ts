import GlobalStyles from "./styles/GlobalStyles.tsx"

//Lessons imports
// импорт компонента Lesson06 по умолчанию
// при импорте по умолчанию можно использовать другое названия для компонента
// import Task6 from './lessons/Lesson06/Lesson06';
// import Lesson06 from './lessons/Lesson06/Lesson06';
// import Lesson07 from "./lessons/Lesson07/Lesson07"
// import Lesson08 from "./lessons/Lesson08/Lesson08"
// import Lesson06 from "./lessons/Lesson06/Lesson06"
// import Lesson09 from "./lessons/Lesson09/Lesson09"
import Lesson10 from "./lessons/Lesson10/lesson10.tsx"


//Homeworks imports
// import Homework06 from "./homeworks/Homework06/Homework06"
// import Homework07 from "./homeworks/Homework07/Homework07"
// import Homework08 from "./homeworks/Homework08/Homework08"
// import Homework09 from "./homeworks/Homework09/Homework09"

//Consultations imports
// import Consultation04 from "./consultations/Consultation04/Consultation04"

function App() {

  return (
    <>
      <GlobalStyles />
      {/* <Task6 /> */}
      {/* <Lesson06 /> */}
      {/* <Homework06 /> */}
      {/* <Lesson07 /> */}
      {/* <Homework07/> */}
      {/* <Lesson08/> */}
      {/* <Consultation04 /> */}
      {/* <Homework08 /> */}
      {/* <Lesson09 /> */}
      {/* <Homework09 /> */}
      <Lesson10 />
    </>
  )
}

export default App

