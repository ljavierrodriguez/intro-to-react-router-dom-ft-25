import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Menu = () => {

    const location = useLocation()

    return (
        <ul className="nav nav-pills justify-content-center my-3">
            <li className="nav-item">
                <Link className={"nav-link " + (location?.pathname === '/' ? "active":"")} to="/">Home</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location?.pathname === '/services' ? "active":"")} to="/services">Services</Link>
            </li>
            <li className="nav-item">
                <Link className={"nav-link " + (location?.pathname === '/contact' ? "active":"")} to="/contact">Contact</Link>
            </li>
        </ul>
    )
}

export default Menu