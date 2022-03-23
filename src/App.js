
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Portfolio from './Pages/Portfolio'
import Contact from './Pages/Contact';
import Shop from './Pages/Shop'
import LoginRegister from './Pages/LoginRegister';
import AboutUs from '../../t-smart/src/Pages/Pages/AboutUs'
import Cart from './Pages/Pages/Cart';
import CheckOut from './Pages/Pages/CheckOut';
import ProduntDetails from './Pages/Pages/ProductDetails';




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
           <Route path='/cart' element={<Cart />} />
           <Route path='/checkout' element={<CheckOut />} />
           <Route path='/product-details' element={<ProduntDetails />} />
           
        </Routes>
     
   </div>
  );
}

export default App;
