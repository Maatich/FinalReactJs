import React from 'react'


import { Link } from 'react-router-dom'


const Navbar = () => {





    return (

        <nav className="navbar menuss navbar-expand-lg navbar-light bg-dark">
            <div className="container  px-4 px-lg-5">
                <a className="navbar-brand logo text-light" href="#!"> <strong> Tienda Online</strong></a>
                <button className="navbar-toggler boton" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation"><i className="bi bi-bag"></i></button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0  ms-lg-4">
                        <li className="nav-item"><Link className="nav-link active text-light" to={'/'}>Home</Link> </li>
                        
                    </ul>
                    <button className="btn "></button>
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Carrito</button>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Categorias
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="button"><Link to={'/categoria/producto'}> Diseño Web </Link></button></li>
                        <li><button className="dropdown-item" type="button"><Link to={'/categoria/servicio'}>Base de Datos</Link></button></li>
                        <li><button className="dropdown-item" type="button"><Link to={'/categoria/secure'}>Secure Serv</Link></button></li>
                        <li><button className="dropdown-item" type="button"><Link to={'/categoria/hosting'}>Hosting</Link></button></li>
                        <li><button className="dropdown-item" type="button"><Link to={'/categoria/backup'}>Backups</Link></button></li>
                        <li><button className="dropdown-item" type="button"><Link to={'/categoria/informaticos'}>Servicios Informaticos</Link></button></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar