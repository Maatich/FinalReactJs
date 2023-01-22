import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'

const Item = ({ product }) => {



    return (

        
        <>
        <div className="d-flex flex-column mb-3">
        <div className="card  card-prod">
                   <img src={product.image}  className="card-img-top  img-prod " alt="..."/> 
                   <div className="card-body">
                       <h5 className="card-title">{product.nombre}</h5>
                       <p className="card-text">$ {product.precio}</p>
                       <p className="card-text">$ {product.id}</p>
                       <p className="card-text">$ {product.categoria}</p>
                       <p className="card-text">$ {product.stock}</p>
                       <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       <Link to={`/item/${product.id}`}>
                           <p className="btn btn-primary">Ver detalle</p>
                       </Link>
                   </div>
               </div>
            </div>
       </>
   
     );
   };

export default Item