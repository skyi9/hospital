import React from 'react'
import { a } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ height: '5rem' }}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" href='/'>
                        Hospify
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active fs-5" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fs-5" href="/">Contact</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-light me-3 " style={{ width: '6rem' }} type="submit">Login</button>
                        <button className="btn btn-outline-light me-3 " style={{ width: '6rem' }} type="submit">SingUp</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar
