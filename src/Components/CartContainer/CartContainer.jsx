import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../Context/CarritoContext'

const CartContainer = () => {
    const { cart, getTotalPrice, getItemTotalCount, clearCart, removeItem } = useContext(CartContext)
  return (
    <div style={{backgroundColor:'white'}}>
        {!cart.length 
        ? <h2>Tu carrito esta vacio, <Link to='/'>ir a comprar</Link></h2>
        :<div >
     
          <h5 >Tu Carrito</h5>
      
        <div >
        {cart.map(item =>
          <div className="card w-80" key={item.id}>
            <div className="card-body" >
              <h5 className="card-title">{item.nombre}</h5>
              <p className="card-text">
                Categoria: {item.categoria}</p>
                <p className="card-text">
                Codigo: {item.id}</p>
                <p className="card-text">
                Precio: $ {item.precio}</p>
              <div >
                <button type="button" className="btn btn-outline-danger" onClick={() => removeItem(item.id)} >Eliminar</button>
              </div>
            </div>
          </div>)}
          <div>
            <div>
              <p>Numero de productos: {getItemTotalCount()}</p>
              <p>Precio Total $ {getTotalPrice()}</p>
              <button type="button" className="btn btn-outline-danger" onClick={clearCart}>Vaciar carrito</button>
              <Link to={'/Checkout'}> <button className="btn btn-success">Comprar</button> </Link>
            </div>
          </div>
        </div>
      </div> }
    </div>
  )
}

export default CartContainer