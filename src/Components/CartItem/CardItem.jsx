import React from 'react'

const CardItem = ({product, handleDelete}) => {


  

    
  return (
    
    <div className="card mb-3" >
 
    
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">{product.item.nombre}</h5>
        <p className="card-text"> Cantidad : {product.cantidad}</p>
        <p className="card-text">{product.item.precio}</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        <button variant='danger' onClick={handleDelete}> </button>
      </div>
    </div>
  </div>

  )
}

export default CardItem