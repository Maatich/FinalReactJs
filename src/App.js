import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListConteiner from './Components/ItemListContainer/ItemListConteiner';
import CartContext from './Context/CarritoContext';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart'
import ItemDetailConteiner from './Components/ItemDetailContainer/ItemDetailConteiner';
import Modals from './Components/modals/Modals';

function App() {



  return (
    <CartContext>
      <Router>
        <Navbar/>
        <Modals/>
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/Servicios" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </Router>
    </CartContext>
  );
}



export default App;