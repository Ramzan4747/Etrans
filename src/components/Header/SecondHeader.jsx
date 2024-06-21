import React from 'react'
import './Header.scss'
import { NavLink } from 'react-router-dom'

function SecondHeader() {
    return (
        <>

            <div className="container mainNavs">
                <div className="row nav2 d-flex align-items-center">
                    <div className=" col-12 col-lg-4 store-info p-2">
                        <p className='mb-0 text-center'>WELCOME TO OUR ETRANS STORE</p>
                    </div>
                    <div className=" col-lg-8 d-flex justify-content-end" >

                        <div className='links' id='topbar2'>

                            <nav className="navbar navbar-expand-lg navbar-dark" style={{ fontSize: "14.32px", fontFamily: "Roboto", textDecoration: "none" }}>
                                <div className="container-fluid">
                                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                            <li className="nav-item">
                                                <NavLink to="track" className="nav-link active links" aria-current="page" >Track order</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="about" className="nav-link active links" aria-current="page" >About</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="store" className="nav-link active links" aria-current="page" >Our Stores</NavLink>
                                            </li>
                                           
                                            <li className="nav-item">
                                                <NavLink to="contact" className="nav-link active links" aria-current="page" >Contact</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="#" className="nav-link active links" aria-current="page" >Help and FAQs</NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    USD
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink to="#" className="dropdown-item links" >USD</NavLink></li>
                                                    <li><NavLink to="#" className="dropdown-item links" >PKR</NavLink></li>
                                                    <li><NavLink to="#" className="dropdown-item links" >INR</NavLink></li>

                                                </ul>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    ENG
                                                </NavLink>
                                                <ul className="dropdown-menu">
                                                    <li><NavLink to="#" className="dropdown-item links" >URD</NavLink></li>
                                                    <li><NavLink to="#" className="dropdown-item links" >HIN</NavLink></li>
                                                    <li><NavLink to="#" className="dropdown-item links" >GER</NavLink></li>
                                                </ul>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="#" className="nav-link active links" aria-current="page" ><i className="fa-brands fa-facebook-f text-white "></i></NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="#" className="nav-link active links" aria-current="page" ><i className="fa-brands fa-twitter text-white"></i></NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink to="#" className="nav-link active links" aria-current="page" >
                                                    <i className="fa-brands fa-linkedin-in text-white"></i>
                                                </NavLink>
                                            </li>


                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}

export default SecondHeader