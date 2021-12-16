import './App.css';
import NavBar from './components/navBar/navbar';
import {Routes, Route} from "react-router-dom";
import ItemDetailContainer from './components/itemDetail/itemDetailContainer';
import ItemListContainer from './components/item/itemListContainer';
import { CartProvider} from "./components/contexts/cartContext";
import { Cart } from './components/cart/cart';










function App() {
  
  return (
    <CartProvider>
    <div className="App">
      
      <NavBar/>
      <Routes>
      <Route path="/categoria/:itemId" element={<ItemListContainer/>}/>
      <Route  path="/Destacados" element={<ItemListContainer/>}/>
      <Route path="item/:id" element={<ItemDetailContainer/>}/> 
      <Route path="/cart" element={<Cart/>} />

      </Routes>
      
      
      
    </div>
    </CartProvider>
  );
}

export default App;
