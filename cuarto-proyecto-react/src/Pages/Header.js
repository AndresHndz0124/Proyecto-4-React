import React from "react";
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
                <div className="container header">
                    <a className="navbar-brand" href="#">
                        <img src="https://reverent-banach-cb9630.netlify.app/logo-ucamp-dark.png" alt="..." height="60"></img>
                    </a>
                    <div className="collapse navbar-collapse split" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Aplicación CRUD</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Proyecto No. 4: Restaurant App</a>
                            </li>
                        </ul>

                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/HOME"><u>Home</u></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Ourmenu"><u>Nuestro Menú</u></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Booking"><u>Reservas</u></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </header>





    );
}

export default Header;