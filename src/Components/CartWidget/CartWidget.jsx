import React from 'react'
import { Badge } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from '../../Context/CarritoContext';

const CartWidget = () => {
    const { productCounter } = useContext(CartContext)
  return (
    <>
    <div>
      
    </div>
    </>
  )
}

export default CartWidget