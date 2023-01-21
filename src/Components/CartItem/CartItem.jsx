import React from 'react'

const CartItem = ({producto, deleteItem}) => {
  return (
    <div>

          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasRightLabel">Carrito</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <p> {producto.item.nombre} </p>
              <p> {producto.count} </p>
              <p> {producto.item.precio} </p>
              <button onClick={deleteItem}> Eliminar producto </button>
              <p></p>
              <p></p>
            </div>
          </div>
        </div>
  )
}

export default CartItem