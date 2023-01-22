import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ItemListConteiner from './Components/ItemListContainer/ItemListConteiner';
import CartContext from './Context/CarritoContext';
import Navbar from './Components/Navbar/Navbar';
import Cart from './Components/Cart/Cart'
import ItemDetailConteiner from './Components/ItemDetailContainer/ItemDetailConteiner';
import Modals from './Components/modals/Modals';
import Checkout from './Components/CheckOut/Checkout';
import Carrousel from './Components/Carrousel/Carrousel';


function App() {



  return (
    <CartContext>
      <Router>
        <Navbar/>
        <Modals/>
        <Carrousel/>
        <Routes>
          <Route path="/" element={<ItemListConteiner />} />
          <Route path="/Servicios" element={<ItemListConteiner />} />
          <Route path="/item/:id" element={<ItemDetailConteiner />} />
          <Route path="/categoria/:id" element={<ItemListConteiner />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </CartContext>
  );
}



export default App;