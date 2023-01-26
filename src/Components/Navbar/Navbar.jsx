import React from 'react'


import { Link } from 'react-router-dom'


const Navbar = () => {





    return (

        <nav className="navbar menuss navbar-expand-lg navbar-light bg-dark">
            <div className="container  px-4 px-lg-5">
                <a className="navbar-brand logo text-light" href="#!"> <strong> Tienda Online</strong></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active text-light" to={'/'}>Home</Link> </li>
                        <li className="nav-item"><Link className="nav-link active text-light" to={'/categoria/servicio'}>Servicios</Link> </li>
                        <li className="nav-item"><Link className="nav-link active text-light" to={'/categoria/producto'}>Productos</Link> </li>
                    </ul>
                    <button className="btn "></button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrito</button>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="button">Diseño Web</button></li>
                        <li><button className="dropdown-item" type="button">Base de Datos</button></li>
                        <li><button className="dropdown-item" type="button">Secure Serv</button></li>
                        <li><button className="dropdown-item" type="button">Hosting</button></li>
                        <li><button className="dropdown-item" type="button">Backups</button></li>
                        <li><button className="dropdown-item" type="button">Servicios Informaticos</button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar