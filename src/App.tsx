// src/App.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout/Layout";
import About from "./components/pages/About/About";
import Home from "./components/pages/Home/Home";
import Course from './components/pages/Course/Course';
import Users from './components/pages/Users/Users';
import GlobalStyles from "./styles/GlobalStyles";
import Designer from './components/pages/Users/components/Designer/Designer';
import Manager from './components/pages/Users/components/Manager/Manager';
import PageNotFound from './components/pages/PageNotFound/PageNotFound';
import Clients from "./components/pages/Clients/Clients";  
import Facebook from "./components/pages/Clients/components/Facebook/Facebook";  
import Google from "./components/pages/Clients/components/Google/Google"; 
import Amazon from "./components/pages/Clients/components/Amazon/Amazon";  
import Lesson18 from './lessons/Lesson18/Lesson18'

function App() {

  return (
    //BrowserRouter - глобальная обёртка для всего приложения,
    // которая позволяет использовать маршрутизацию
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        {/* Routes - обертка, которая собирает все маршруты приложения */}
        <Routes>
          {/* Route - компонент библиотеки, в который передаётся маршрут и тот компонент (страницу),
          который должен быть вызван, если выполнен переход по этому маршруту */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/designer' element={<Designer />} />
          <Route path='/users/manager' element={<Manager />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/clients/amazon' element={<Amazon />} />
          <Route path='/clients/facebook' element={<Facebook />} />
          <Route path='/clients/google' element={<Google />} />
          <Route path='/lesson18' element={<Lesson18 />} />
          {/* path='*' - специальный маршрут, который вызовет переданный компонент в
          том случае, если в маршрутах выше не будет найдено того маршрута,
          к которому обращается пользователь */}
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App

