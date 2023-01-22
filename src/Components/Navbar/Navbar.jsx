import React from 'react'

import { useContext } from 'react'
import { Link } from 'react-router-dom'
import {CartContext } from '../../Context/CarritoContext'
import useFirebase from '../../Hook/useFirebase'

const Navbar = () => {


    const {buyProducts} = useContext(CartContext)
    const { producto } = useFirebase()
    

    return (

        <nav className="navbar menuss navbar-expand-lg navbar-light bg-light">
            <div className="container  px-4 px-lg-5">
                <a className="navbar-brand logo" href="#!"> <strong> Tienda Online</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active" to={'/'}>Home</Link> </li>
                        <li className="nav-item"><Link className="nav-link active" to={'/categoria/servicio'}>Servicios</Link> </li>
                        <li className="nav-item"><Link className="nav-link active" to={'/categoria/producto'}>Productos</Link> </li>
                    </ul>
                    
                        <button className="btn btn-dark"></button>
                        <button className="btn btn-primary" type="button"  data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrito</button>
                    
                    
                </div>
            </div>
        </nav>

        
    )
}

export default Navbar