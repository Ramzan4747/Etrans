import React from 'react'
import { NavLink } from 'react-router-dom'
import mainlogo from '../../assets/mainlogo.png'

function ThirdHeader() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-2 d-flex align-items-center">
                        <NavLink to=""><img src={mainlogo} alt="logo" className='img-fluid' style={{ width: "110px" }} />
                        </NavLink>
                    </div>
                    <div className="col-10 d-flex justify-content-end">
                        <nav className="navbar navbar-expand-lg navbar-dark" style={{ fontSize: "14.32px", fontFamily: "Roboto", textDecoration: "none" }}>
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent1" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent1">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <NavLink to="" className="nav-link active links" aria-current="page" >Home</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="products" className="nav-link active links" aria-current="page" >Products</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="about" className="nav-link active links" aria-current="page" >About</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="contact" className="nav-link active links" aria-current="page" >Contact</NavLink>
                                        </li>

                                        <li className="nav-item">
                                            <NavLink to="store" className="nav-link active links" aria-current="page" >Store</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="track" className="nav-link active links" aria-current="page" >Track Order</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="whishlist" className="nav-link active links" aria-current="page" >Whishlist</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="dashboard" className="nav-link active links" aria-current="page" >Dashboard</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <NavLink className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                My Account
                                            </NavLink>
                                            <ul className="dropdown-menu">
                                                <li><NavLink to="signup" className="dropdown-item links" >Signup</NavLink></li>
                                                <li><NavLink to="signin" className="dropdown-item links" >Signin</NavLink></li>
                                                <li><NavLink to="forgot" className="dropdown-item links" >Forgot Password</NavLink></li>
                                            </ul>
                                        </li>
                                        <li className="nav-item d-flex ">
                                            <div>
                                                <span><i className="fa-solid fa-headphones text-white me-2" style={{ fontSize: "2rem" }}></i></span>
                                            </div>
                                            <div>
                                                <p className='mb-0' style={{ color: "white", opacity: "0.8", fontSize: "13px", fontWeight: "500" }}>CALL US NOW</p>
                                                <h5 className='text-white' style={{ fontSize: "1.25rem" }}>+923154848888</h5>
                                            </div>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="signup" className="nav-link active links" aria-current="page" ><i className="fa fa-user text-white" style={{ fontSize: "1.25rem" }}></i></NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="whishlist" className="nav-link active links" aria-current="page" >
                                                <i className="fa-solid fa-heart text-white" style={{ fontSize: "1.25rem" }}></i>
                                            </NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to="cart" className="nav-link active links" aria-current="page" >
                                                <i className="fa-solid fa-cart-shopping text-white" style={{ fontSize: "1.25rem" }}></i>
                                            </NavLink>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ThirdHeader