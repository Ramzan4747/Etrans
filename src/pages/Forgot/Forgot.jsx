import React from 'react'
import forgotLogo from '../../assets/auth/forgot-2.png'

function Forgot() {
  return (
    <>
    <div className="container ">
                <div className="row">
                    <div className="col-2 col-md-4"></div>
                    <div className="col-8 col-md-4 rounded" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                        <div className="card-body m-4" >
                            <div className=" p-4 rounded" style={{ border: " 1px solid rgb(255 255 255 / 20%)" }}>
                                <div className="text-center">
                                    <img src={forgotLogo} className='img-fluid' style={{width: "120px"}}  />
                                </div>
                                <div className="row mt-3">
                                    <div className="col">
                                        <h3 className='text-white'>Forgot Password?</h3>
                                        <p style={{color: "rgb(255 255 255 / 70%)", fontSize: "1rem"}}>Enter your registered email ID to reset the password</p>
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

                              

                                <div className="row mt-3 ">
                                    <div className="col d-flex justify-content-center align-items-center">
                                    <button className='btn rounded w-100 mb-2' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white" }}>Send</button>
                                    </div>
                                </div>
                                <div className="row mt-3 ">
                                    <div className="col d-flex justify-content-center align-items-center">
                                    <button className='btn rounded w-100 mb-2' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontWeight: "500", color: "white" }}>Back to Login</button>
                                    </div>
                                </div>




                            </div>
                        </div>
                    </div>
                    <div className="col-2 col-md-4"></div>
                </div>
            </div>
    </>
  )
}

export default Forgot