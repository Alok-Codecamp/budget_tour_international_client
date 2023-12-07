import './App.css';
import Home from './components/HomePage/Home';
import Login from './components/Login/Login'
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Error from './components/ErrorPage/Error';
import About from './components/About/About';
function App() {
 
  return (
    <BrowserRouter>
     <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path="/about" element={<About/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
