import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import useFirebase from '../../Hook/useFirebase';
import { CarritoContext } from '../../Context/CarritoContext';



const ItemDetailConteiner = () => {

const {agregarAlCarrito} = useContext(CarritoContext)

  const { id } = useParams()
  const { producto, getProduct } = useFirebase()
  
  useEffect(() => {

    getProduct(id)


  }, [id])




  return (
    <>
    {Object.values(producto).length&&
    
    <section className="bg-ligth">
      <div className="container pb-5">
        <div className="row">
          <div className="col-lg-5 mt-5">
            <div className="card mb-3">
              <img className="card-img img-fluid" src={producto.image} alt="" />
            </div>
          </div>
          <div className="col-lg-7 mt-5">
            <div className="card">
              <div className="card-body">
                <h2>{producto.nombre}</h2>
                <p>$ {producto.precio} </p>
                <p>Codigo {producto.id}</p>
                <p>stock {producto.stock} </p>
                <p className="py-2">
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-warning"></i>
                  <i className="fa fa-star text-secondary"></i>
                  <span className="list-inline-item text-dark"> Rating 4.8 | 36 Comments</span>
                </p>


                <h6>Specification</h6>
                <ul className="list-unstyled pb-3">
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                  <li>Lorem ipsum dolor sit amet consectetur.</li>
                </ul>
               <button className='btn btn-success' onClick={() => agregarAlCarrito(producto)}>Comprar</button> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
   };
  </>
  );
};



export default ItemDetailConteiner