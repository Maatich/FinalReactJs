
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CarritoContext';

import ItemCount from '../ItemCount/ItemCount';


const ItemDetail = ({ product, onAdd, added }) => {
  
const addToCart = useContext(CartContext)

  return (
    <section className="bg-ligth">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img className="card-img img-fluid" src={product.image}  alt="" />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h2>{product.nombre}</h2>
                <p>$ {product.precio} </p>
                <p>Codigo COD#0{product.id}</p>
                {product.stock && <p>stock {product?.stock } </p>}
                <h6>Description</h6>
                <button onClick={addToCart}>Comprar</button>
                {added ? <Link to='/Cart'>Go to Cart</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }
                <h6>Specification</h6>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>

  );
};

export default ItemDetail;