import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({product}) => {



  return (



    <div className="d-flex justify-content-center m-2">
            <div className="card mb-3 p-2" style={{ width: 740 }}>
                <div className="row g-0">
                    <div className="col-md-4">
                    <div style={{backgroundImage:`url('${product.img}')`, backgroundSize:'cover', backgroundPosition:'center', width:'100%', height:'100%'}}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{product.nombre}</h5>
                            <p className="card-text">$ {product.precio}</p>
                            <p className="card-text">Codigo :{product.id}</p>
                            <p className="card-text">Stock : {product.stock}</p>
                            <Link to={`/item/${product.id}`}>
                             <p className="btn btn-primary">Ver detalle</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Item