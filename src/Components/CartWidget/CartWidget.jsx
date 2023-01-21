import React from 'react'
import { Badge } from 'react-bootstrap';
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from '../../Context/CarritoContext';

const CartWidget = () => {
    const { productCounter } = useContext(CartContext)
  return (
    <>
    <BsCart3 style={{height: '50px'}}/>{productCounter() > 0 && <Badge bg="secondary">{productCounter()}</Badge>}
    </>
  )
}

export default CartWidget