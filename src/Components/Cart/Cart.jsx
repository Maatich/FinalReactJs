import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CarritoContext'

const Cart = () => {

  const { cart, getTotalPrice, getItemTotalCount, clearCart, removeItem  } = useContext(CartContext)

  return cart.length > 0 ? (
    <>
      <div>
        {cart.map(item =>
          <div key={item.id}>
            <p>titulo{item.titulo}</p>
            <p>descripcion: {item.descripcion}</p>
            <button onClick={() => removeItem(item.id)} >borrar</button>
          </div>
        )}
        <p>total item carro: {getItemTotalCount()}</p>
        <p>precio total carro: ${getTotalPrice()}</p>
        <button onClick={clearCart}>Vaciar carrito</button>
        <Link to={'/checkout'}>Comprar</Link>
      </div>
    </>
  ) : (
    <p>Carrito vacio</p>
  )
}

export default Cart;
