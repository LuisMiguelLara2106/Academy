import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
// import SigninPage from './pages/signin';
import LoginPage from "./pages/login";
import LearningPage from './pages/learning';
// import FormGHG from './components/Form_GHG';


function App() {
  return (
    <Router>
      <Routes>
          <Route path='/' element={<Home />} exact />
          <Route path='/login' element={<LoginPage />} exact />
          {/* <Route path='/signup' element={<FormGHG />} exact /> */}
          <Route path='/learning' element={<LearningPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;
