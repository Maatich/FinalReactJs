import React from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/CarritoContext'
import CartItem from '../CartItem/CartItem';

const Cart = () => {

  const { cartArray, deleteItem } = useContext(CartContext);


  return (
    <div>
      {cartArray.length === 0 &&
        <div>
          <p>No hay productos aún</p>
          <Link to='/'>Ir al inicio</Link>
        </div>
      }
      {(cartArray.length > 0) && cartArray.map(prod => <CartItem key={prod.item.id} product={prod} deleteItem={deleteItem} />)}
    </div>
  )
}

export default Cart