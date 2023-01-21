import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CarritoContext';
import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product }) => {
  const { nombre, precio, image, id ,stock} = product;
  const { addToCart, getTotalPrice, getItemTotalCount, getQuantity } = useContext(CartContext);
 
  const [purchase, setPurchase] = useState(false)
  const handleAddToCart = (count) => {
    addToCart(product, count);
    setPurchase(true)
  }
  console.log (product)

  return (
    <section className="bg-ligth">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img className="card-img img-fluid" src={image}  alt="" />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h2>{nombre}</h2>
                <p>$ {precio} </p>
                <p>Codigo COD#0{id}</p>
                {stock && <p>stock {product?.stock - getQuantity(product)} </p>}
                <h6>Description</h6>
                
                <h6>Specification</h6>
                <ul className="list-unstyled pb-3">
                  
                </ul>
                <ul className="list-unstyled pb-3">
                  {!purchase && <ItemCount onAddToCart={handleAddToCart} stock={stock - getQuantity(product)} initial={1} />}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ul className="list-unstyled pb-3">
          <li>Precio total: {getTotalPrice()}</li>
        </ul>
        <ul className="list-unstyled pb-3">
          <li>Items totales: {getItemTotalCount()}</li>
        </ul>
        <ul className="list-unstyled pb-3">
          <Link to='/Cart'><button>Ir al carrito</button></Link>
        </ul>
      </div>
    </section>

  );
};

export default ItemDetail;