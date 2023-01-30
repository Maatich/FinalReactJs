import React, { useContext } from 'react'
import { Link } from 'react-router-dom'


import { CartContext } from '../../Context/CarritoContext'

const Cart = () => {

  const { cart, getTotalPrice, getItemTotalCount, clearCart, removeItem } = useContext(CartContext)

  return (
    <>
      {!cart.length ?
        <div>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <div className="card w-80">
                <div className="card-body" >
                  <h5 className="card-title">Tu carrito esta vacio</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        : <div>
          <div>
            <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
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
            </div>
          </div>


        </div>}
    </>
  )
}

export default Cart;