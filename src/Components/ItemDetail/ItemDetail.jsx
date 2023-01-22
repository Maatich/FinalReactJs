
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
    <section className="bg-ligth">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img className="card-img img-fluid" src={productos.image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 mt-10">

            <div className="card">
              <div className="card-body">
                <h2>{productos.nombre}</h2>
                <p>$ {productos.precio} </p>
                <p>Codigo COD#0{productos.id}</p>
                {productos.stock && <p>stock {productos?.stock - getQuantity(productos)} </p>}
                <h6>Description</h6>
                <p>{productos.descripcion}
                </p>
                <h6>Specification</h6>
                <ul className="list-unstyled pb-3">
                  <li>{productos.especificaciones}</li>
                </ul>
                <ul className="list-unstyled pb-3">
                  {!purchase && <ItemCount onAddToCart={handleAddToCart} stock={productos.stock - getQuantity(productos)} initial={1} />}
                </ul>
              </div>
            </div>
            <div className='ContainerAdd d-flex row'>
              <ul className="list-unstyled pb-3">
                <li>Precio total: {getTotalPrice()}</li>
              </ul>
              <ul className="list-unstyled pb-3">
                <li>Items totales: {getItemTotalCount()}</li>
              </ul>
              <ul className="list-unstyled pb-3">
                <Link to='/Cart' ><button className="btn btn-primary" >Ir al carrito</button></Link>
              </ul>
            </div>
          </div>
        </div>

      </div>

    </section>

  );
};

export default ItemDetail;