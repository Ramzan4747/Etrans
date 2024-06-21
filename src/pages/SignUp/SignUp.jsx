import React from 'react'
import { NavLink } from 'react-router-dom'
import googleLogo from '../../assets/auth/google.svg'

function SignUp() {
    return (
        <>
            <div className="container ">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 rounded" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                        <div className="card-body m-4" >
                            <div className=" p-4 rounded" style={{ border: " 1px solid rgb(255 255 255 / 20%)" }}>
                                <div className="text-center">
                                    <h3 style={{ fontSize: "1.5rem", color: "white" }}>Sign Up</h3>
                                    <p style={{ fontSize: "0.75rem", color: "white", opacity: "0.8" }}>Already have an account? <NavLink to="#" style={{ textDecoration: "none", color: 'white', fontWeight: "bold" }}>Sign Up Here</NavLink></p>
                                </div>
                                <div className="buttons d-flex flex-column justify-content-center align-items-center">
                                    <button className='btn rounded w-100  p-2  mb-2' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white", fontSize: "0.75rem" }}> Sign Up with Google</button>

                                    <button className='btn rounded w-100 p-2 ' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white",fontSize: "0.75rem" }}>Sign Up with Facebook</button>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-6">
                                        <form>
                                            <div class="form-group">
                                                <label for="firstName" style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem" }}>First Name</label>
                                                <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", borderColor: "rgb(255 255 255 / 20%)", }} type="text" class="form-control " id="firstName" placeholder="Enter First Name" />
                                            </div>

                                        </form>
                                    </div>
                                    <div className="col-6">
                                        <form>
                                            <div class="form-group">
                                                <label for="lastName" style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem" }}>Last Name</label>
                                                <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", borderColor: "rgb(255 255 255 / 20%)" }} type="text" class="form-control " id="lastName" placeholder="Enter Last Name" />
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <form>
                                            <div class="form-group">
                                                <label for="email" style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem" }}>Email</label>
                                                <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", borderColor: "rgb(255 255 255 / 20%)" }} type="text" class="form-control " id="email" placeholder="Enter Email" />
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <form>
                                            <div class="form-group">
                                                <label for="password" style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem" }}>Password</label>
                                                <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", borderColor: "rgb(255 255 255 / 20%)", }} type="password" class="form-control " id="password" placeholder="Enter Password" />
                                            </div>

                                        </form>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col">
                                        <form>
                                            <div class="form-group">
                                                <label for="country" style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem" }}>Country</label>
                                                <select style={{ backgroundColor: "rgb(0 0 0 / 15%)", borderColor: "rgb (255 255 255 / 20%)" }} class="form-control " id="country" >
                                                    <option value="Pakistan">Pakistan</option>
                                                    <option value="India">India</option>
                                                    <option value="China">China</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                                <div className="row mt-3">
                                    <div className="col-12">
                                        <div class="form-check form-switch">
                                            <input style={{backgroundColor: "rgb(0 0 0 / 20%)"}} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem", fontWeight: "500" }} class="form-check-label" for="flexSwitchCheckChecked">I read and agree to Terms & Conditions</label>
                                        </div>
                                     
                                    </div>
                                </div>

                                <div className="row mt-3 ">
                                    <div className="col d-flex justify-content-center align-items-center">
                                    <button className='btn rounded w-75 mb-2' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white" }}>Sign Up </button>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                    <div className="col-2"></div>
                </div>
            </div>
        </>
    )
}

export default SignUp