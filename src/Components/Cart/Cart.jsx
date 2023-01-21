import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../Context/CarritoContext'

import Modals from '../modals/Modals';






const Cart = () => {

    const {carrito} = useContext(CartContext);
  console.log (carrito)
  return (
    <div>
        <h1>Cart</h1>
        {carrito.map(prod => <Modals key={prod.item.id} product={prod}  />)}
    </div>
  )
}

export default Cart