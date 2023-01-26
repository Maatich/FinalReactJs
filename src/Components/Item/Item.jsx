import React from 'react'
import { Link } from 'react-router-dom'
import '../Item/Item.css'

const Item = ({ product }) => {



    return (
        
        <>
                
                <div className="col">
                    <div className="card rounded border-ligth mb-3 cardStyle">
                        <img src={product.image} className="card-img-top  img-prod img-fluid " alt="..." />
                        <div className="card-body">
                            <h5 className="card-title titulosCard">{product.nombre}</h5>
                            <p className="card-text texto">$ {product.precio}</p>
                            <p className="card-text texto">Categoria : {product.categoria}</p>
                            <p className="card-text texto">Stock : {product.stock}</p>
                            <p className="card-text texto">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <Link to={`/item/${product.id}`}>
                                <p className="btn btn-primary texto">Ver detalle</p>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    );
};

export default Item