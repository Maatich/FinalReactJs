import { addDoc, collection } from 'firebase/firestore'
import React, { useContext, useState } from 'react'
import { db } from '../../Firebase/Index'
import { CartContext } from '../../Context/CarritoContext'
import '../CheckOut/checkout.css'

const Checkout = () => {
  const [comprador, setComprador] = useState({})
  const [orderId, setOrderId] = useState('')
  const { cart, getTotalPrice, handleDelete, clearCart } = useContext(CartContext)
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
      {orderId ? <p className='container text-bg-ligth'>Muchas gracias por su compra, su orden es: <b>{orderId}</b></p>
        : <div className="container-fluid formconteiner">

          {cart.map(item =>
            <div key={item.id} >
              <div className="card carts mb-3" >
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.nombre}</h5>
                    <p className="card-text"> Cantidad : {item.cantidad}</p>
                    <p className="card-text">{item.precio}</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    <button variant='danger' onClick={handleDelete}> </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className='container'>

            <form className='container formulario' onSubmit={finalizarCompra}>
              <div className='container p-3 text-aling-center'>
                <h1>Formulario de Compra</h1>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Nombre y apelllido:</label>
                <input type="text" className="form-control" placeholder="ingrese su nombre y apellido" name='name' onChange={datosComprador} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">N° de contacto:</label>
                <input type="text" className="form-control" placeholder="11********" name='phone' onChange={datosComprador} />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">E-Mail:</label>
                <input type="email" className="form-control" placeholder="ejemplo@gmail.com" name='email' onChange={datosComprador} />
              </div>
              <div className="mb-3">
                <button className="btn btn-primary" type='submit'>Finalizar </button>
              </div>
            </form>
            <br />
          </div>
        </div>
      }
    </>
  )
}

export default Checkout;