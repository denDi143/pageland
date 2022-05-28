import React from 'react';
import Navbar from './components/Navbar';
import './App.css';


import {BrowserRouter as Router,Routes ,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Info from './components/pages/Info';
import Drama from './components/pages/Drama';
import Signup from './components/pages/Signup';





function App() {
  return (
  <>
      <Router>
      <Navbar/>
    
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Info' element={<Info/>} />
      <Route path='/drama' element={<Drama/>} />
      <Route path='/Sign-up' element={<Signup/>} />
      </Routes>
      </Router>
  
   
    </>
    
  );
}

export default App;
