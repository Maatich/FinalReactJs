import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../../Firebase/Index'
import { CartContext } from '../../Context/CarritoContext'

const Checkout = () => {
  const [comprador, setComprador] = useState({})
  const [orderId, setOrderId] = useState('')
  const { cart, getTotalPrice, getItemTotalCount, clearCart } = useContext(CartContext)
  const datosComprador = (e) => {
    setComprador({
      ...comprador,
      [e.target.name]: e.target.value
    })
  }
  const finalizarCompra = (e) => {
    e.preventDefault()
    if (Object.values(comprador).length !== 3) {
      alert('Todos los campos son requeridos')
    } else {
      const ventas = collection(db, "orders")
      addDoc(ventas, {
        comprador,
        items: cart,
        total: getTotalPrice(),
        date: new Date()
      })
        .then((res) => {
          setOrderId(res.id)
          clearCart()
        })
        .catch((error) => console.log(error))
    }

  }
  return (
    <>
      {orderId ? <p>Muchas gracias por su compra, su orden es: {orderId}</p>
        : <div className="container-fluid">

          {cart.map(item =>
            <div key={item.id}>
              <p>titulo{item.titulo}</p>
              <p>descripcion: {item.descripcion}</p>
            </div>
          )}
          <p>total item carro: {getItemTotalCount()}</p>
          <p>precio total carro: ${getTotalPrice()}</p>
          <form onSubmit={finalizarCompra}>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Nombre y apelllido:</label>
              <input type="text" className="form-control" placeholder="Lucas Barbieri" name='name' onChange={datosComprador} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">N° de contacto:</label>
              <input type="text" className="form-control" placeholder="1122664022" name='phone' onChange={datosComprador} />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">E-Mail:</label>
              <input type="email" className="form-control" placeholder="email@gmail.com" name='email' onChange={datosComprador} />
            </div>
            <div className="mb-3">
              <button className="btn" type='submit'>Finalizar </button>
            </div>
          </form>
        </div>}
    </>
  )
}

export default Checkout;