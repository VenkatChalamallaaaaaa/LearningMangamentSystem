import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Signup from './components/Signup';
import {BrowserRouter,Routes, Route,} from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Homepage from './components/HomeComponents/Homepage';
import About from './components/about/About';
function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/register' element={<Signup/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/' exact Component={Homepage}/>
        <Route path='/about' exact Component={About}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
