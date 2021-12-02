import './App.css';
import NavBar from './components/navbar';
import {Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/itemDetailContainer';
import ItemListContainer from './components/itemListContainer';
import { CartProvider} from "./components/contexts/cartContext";








function App() {
  
  return (
    <CartProvider>
    <div className="App">
      
      <NavBar/>
      <Routes>
      <Route  path="/" element={<ItemListContainer/>}/>
      <Route path="item/:id" element={<ItemDetailContainer/>}/> 
      </Routes>
      
      
      
    </div>
    </CartProvider>
  );
}

export default App;
