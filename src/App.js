
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact';
import Shop from './Pages/Shop'
import LoginRegister from './Pages/LoginRegister';
import AboutUs from '../../t-smart/src/Pages/Pages/AboutUs'


function App() {
  return (
   <div className='wrapper fixed__footer'>
     
        <Routes>
         
           <Route path='/' element={<Home/>} />
           <Route path='/Portfolio' element={<Portfolio/>} />
           <Route path='/Contact' element={<Contact/>} />
           <Route path='/Shop' element={<Shop/>} />
           <Route path='/LoginRegister' element={<LoginRegister/>}/>
           <Route path='/about' element={<AboutUs />} />
           
        </Routes>
     
   </div>
  );
}

export default App;
