import './App.css';
import ItemListContainer from './components/itemDetailContainer';
import ObjetosCarrito from './components/itemsList';
import NavBar from './components/navbar';







function App() {
  return (
    <div className="App">
      
      <NavBar/>
      {/* <ObjetosCarrito/> */}
      <ItemListContainer/>
      
      
      
    </div>
  );
}

export default App;
