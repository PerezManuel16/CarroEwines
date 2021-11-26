import './App.css';

import ObjetosCarrito from './components/ObjetosCarrito';
import NavBar from './components/navbar';
import {Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/itemDetailContainer';







function App() {
  return (
    <div className="App">
      
      <NavBar/>
      <Routes>
      <Route path="/" element={<ObjetosCarrito/>}/>
      <Route path="item/:id" element={<ItemDetailContainer/>}/> 
      </Routes>
      
      
      
    </div>
  );
}

export default App;
