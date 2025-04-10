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

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/course' element={<Course />} />
          <Route path='/users' element={<Users />} />
          <Route path='/users/designer' element={<Designer />} />
          <Route path='/users/manager' element={<Manager />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/clients/facebook" element={<Facebook />} />
          <Route path="/clients/google" element={<Google />} />
          <Route path="/clients/amazon" element={<Amazon />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
