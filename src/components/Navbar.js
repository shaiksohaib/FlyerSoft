import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-2">
           <Link to="/" className = "navbar-brand ml-5">DataTable</Link>
           <Link to="/add" className="navbar-brand ml-5">Add</Link>
        </nav>
    )
}

export default Navbar