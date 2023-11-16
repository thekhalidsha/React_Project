import React from 'react'
import { Link } from 'react-router-dom'
import Logo from './../../logo.png'

export const Navbar = () => {
  return (
    <header>
        <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to='/'><img className='MainLogo' src={Logo} alt='KodeJex Logo' /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                    <ul className="navbar-nav flex-grow-1">
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to='/'>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to='/about'>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to='/contact'>Contact</Link>
                        </li>
                        {/* <li className="nav-item">
                            <Link className="nav-link text-dark" to='/todo'>Todo</Link>
                        </li> */}
                    </ul>
                    <Link className="btn btn-primary" to='/todo'>Todo</Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
