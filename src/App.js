
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact';
import Pages from './Pages/Pages';
import LoginRegister from './Pages/LoginRegister';
import AboutUs from './Pages/Pages/dropdownPage/AboutUs/Hero';

function App() {
  return (
   <div className='wrapper fixed__footer'>
     
        <Routes>
         
           <Route path='/' element={<Home/>} />
           <Route path='/Portfolio' element={<Portfolio/>} />
           <Route path='/Contact' element={<Contact/>} />
           <Route path='/Pages' element={<Pages/>} />
           <Route path='/Shop' element={<Shop/>} />
           <Route path='/LoginRegister' element={<LoginRegister/>}/>
           <Route path='/About' element={<AboutUs />} />
           
        </Routes>
     
   </div>
  );
}

export default App;
