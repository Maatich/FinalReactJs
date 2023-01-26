
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CarritoContext';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ productos }) => {

  const { addToCart, getTotalPrice, getItemTotalCount, getQuantity } = useContext(CartContext);

  const [purchase, setPurchase] = useState(false)
  const handleAddToCart = (count) => {
    addToCart(productos, count);
    setPurchase(true)
  }
  console.log(productos)

  return (
    
    <div className="container mt-5 mb-5">
    <div className="row d-flex justify-content-center">
      <div className="col-md-10">
        <div className="card">
          <div className="row">
            <div className="col-md-6">
              <div className="images p-3">
                <div className="text-center p-4">
                  <img className='card-img img-fluid' src={productos.image} />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="product p-4">
                <div className="d-flex justify-content-between align-items-center">
                </div>
                <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">{productos.categoria}</span>
                  <h5 className="text-uppercase">{productos.nombre}</h5>
                  <div className="price d-flex flex-row align-items-center"> <span className="act-price">$ {productos.prec}</span>
                    {/* <div className="ml-2"> <small className="dis-price">$59</small> <span>40% OFF</span> </div> */}
                  </div>
                </div>
                <p className="about">{productos.especificaciones}</p>
                <div className="sizes mt-5">
                  <h6 className="text-uppercase">Total agregado: ${getTotalPrice()}</h6>
                  <h6 className="text-uppercase">Total de unidades: {getItemTotalCount()}</h6>
                 
                </div>
                <div className="cart mt-4 align-items-center">
                  {!purchase && <ItemCount onAddToCart={handleAddToCart} stock={productos.stock - getQuantity(productos)} initial={1} />}
                </div>
              </div>
              <Link to='/Cart' className="btnVermasIrAlCarrito">
                <button className="btn btnVermasIrAlCarrito">
                    <strong>Ir al carrito</strong>
                </button>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  );
};

export default ItemDetail;