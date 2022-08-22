import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {Routes,Route } from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Contact from './Components/Contact';
import Error from './Components/Errorpage';
import HeaderNav from './Components/Nav';
function App() {
  return (
    <div>
       <HeaderNav/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="*" element={<Error/>} /> 
      </Routes>
      
    </div>
  );
}

export default App;

