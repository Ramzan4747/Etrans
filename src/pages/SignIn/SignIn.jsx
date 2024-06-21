import React from 'react'
import { NavLink } from 'react-router-dom'

function SignIn() {
  return (
    <>
 <div className="container ">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8 rounded" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                        <div className="card-body m-4" >
                            <div className=" p-4 rounded" style={{ border: " 1px solid rgb(255 255 255 / 20%)" }}>
                                <div className="text-center">
                                    <h3 style={{ fontSize: "1.5rem", color: "white" }}>Sign In</h3>
                                    <p style={{ fontSize: "0.75rem", color: "white", opacity: "0.8" }}>Dont's have account yet? <NavLink to="#" style={{ textDecoration: "none", color: 'white', fontWeight: "bold" }}>Sign Up Here</NavLink></p>
                                </div>
                                <div className="buttons d-flex flex-column justify-content-center align-items-center">
                                    <button className='btn rounded w-100  p-2  mb-2' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white", fontSize: "0.75rem" }}> Sign In with Google</button>

                                    <button className='btn rounded w-100 p-2 ' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white",fontSize: "0.75rem" }}>Sign In with Facebook</button>
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
                                    <div className="col-12 col-md-6">
                                        <div class="form-check form-switch">
                                            <input style={{backgroundColor: "rgb(0 0 0 / 20%)"}} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked />
                                                <label style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem", fontWeight: "500" }} class="form-check-label" for="flexSwitchCheckChecked">Remember Me</label>
                                        </div>
                                        </div>
                                        <div className="col-12 col-md-6 d-md-flex justify-content-end " >
                                            <NavLink style={{ textDecoration: "none", color: 'rgb(255 255 255 / 70%)', }} to="#">Forgot Password?</NavLink>
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

export default SignIn