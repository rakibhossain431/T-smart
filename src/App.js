
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Contact from './Pages/Contact'
import Pages from './Pages/Pages';
import Portfolio from './Pages/Portfolio'
import Shop from './Pages/Shop';
import Header from './Componet/Header';



function App() {
  return (
   <div className='wrapper fixed__footer'>
     
        <Routes>
         
           <Route path='/' element={<Home/>} />
           <Route path='/Portfolio' element={<Portfolio/>} />
           
        </Routes>
     
     
   </div>
  );
}

export default App;
