import React from 'react'
import first from '../../assets/home/browsecaategory/01.png'
import second from '../../assets/home/browsecaategory/02.png'
import third from '../../assets/home/browsecaategory/03.png'
import fourth from '../../assets/home/browsecaategory/04.png'
import fifth from '../../assets/home/browsecaategory/05.png'
import sixth from '../../assets/home/browsecaategory/06.png'

function BrowseCategory() {
    return (
        <>
            <div className="container  p-4" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h5 style={{ color: "white", fontSize: "1.25rem", fontWeight: "400" }}>BROWSE CATEGORIES</h5>
                        <button className='btn rounded-0' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", color: "white", fontSize: "1rem", fontWeight: "400", padding: "0.375rem 0.75rem" }}>View All</button>
                    </div>
                </div>
            </div>

            <div className="container  mt-4 " >
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-2" style={{border: "1px solid rgb(255 255 255 / 15%)"}}>
                        <div className="card-body mt-2">
                            <div className="image">
                                <img src={first} alt="first" className='img-fluid' />
                            </div>
                          
                            <div className="detail  mt-3 pt-2" style={{borderTop: "1px solid rgb(255 255 255 / 15%)", backgroundColor: "rgba(0, 0, 0, .03)"}}>
                                <h6 className='text-center' style={{color: "white", fontSize: "1rem", fontWeight: "500" }}>FASHION</h6>
                                <p className='text-center mb-0' style={{color: "rgb(255 255 255 /70%)", fontSize: "12px"}}>10 Products</p>
                            </div>
                           
                        </div>
                    </div>


                    {/* 2nd */}
                    <div className="col-12 col-md-4 col-lg-2" style={{border: "1px solid rgb(255 255 255 / 15%)"}}>
                        <div className="card-body mt-2">
                            <div className="image">
                                <img src={second} alt="first" className='img-fluid' />
                            </div>
                          
                            <div className="detail  mt-3 pt-2" style={{borderTop: "1px solid rgb(255 255 255 / 15%)", backgroundColor: "rgba(0, 0, 0, .03)"}}>
                                <h6 className='text-center' style={{color: "white", fontSize: "1rem", fontWeight: "500" }}>FASHION</h6>
                                <p className='text-center mb-0' style={{color: "rgb(255 255 255 /70%)", fontSize: "12px"}}>10 Products</p>
                            </div>
                           
                        </div>
                    </div>

{/* third */}
<div className="col-12 col-md-4 col-lg-2" style={{border: "1px solid rgb(255 255 255 / 15%)"}}>
                        <div className="card-body mt-2">
                            <div className="image">
                                <img src={third} alt="first" className='img-fluid' />
                            </div>
                          
                            <div className="detail  mt-3 pt-2" style={{borderTop: "1px solid rgb(255 255 255 / 15%)", backgroundColor: "rgba(0, 0, 0, .03)"}}>
                                <h6 className='text-center' style={{color: "white", fontSize: "1rem", fontWeight: "500" }}>FASHION</h6>
                                <p className='text-center mb-0' style={{color: "rgb(255 255 255 /70%)", fontSize: "12px"}}>10 Products</p>
                            </div>
                           
                        </div>
                    </div>


                    {/* Fourth */}
                    <div className="col-12 col-md-4 col-lg-2" style={{border: "1px solid rgb(255 255 255 / 15%)"}}>
                        <div className="card-body mt-2">
                            <div className="image">
                                <img src={fourth} alt="first" className='img-fluid' />
                            </div>
                          
                            <div className="detail  mt-3 pt-2" style={{borderTop: "1px solid rgb(255 255 255 / 15%)", backgroundColor: "rgba(0, 0, 0, .03)"}}>
                                <h6 className='text-center' style={{color: "white", fontSize: "1rem", fontWeight: "500" }}>FASHION</h6>
                                <p className='text-center mb-0' style={{color: "rgb(255 255 255 /70%)", fontSize: "12px"}}>10 Products</p>
                            </div>
                           
                        </div>
                    </div>

                    {/* Fifth */}
                    <div className="col-12 col-md-4 col-lg-2" style={{border: "1px solid rgb(255 255 255 / 15%)"}}>
                        <div className="card-body mt-2">
                            <div className="image">
                                <img src={fifth} alt="first" className='img-fluid' />
                            </div>
                          
                            <div className="detail  mt-3 pt-2" style={{borderTop: "1px solid rgb(255 255 255 / 15%)", backgroundColor: "rgba(0, 0, 0, .03)"}}>
                                <h6 className='text-center' style={{color: "white", fontSize: "1rem", fontWeight: "500" }}>FASHION</h6>
                                <p className='text-center mb-0' style={{color: "rgb(255 255 255 /70%)", fontSize: "12px"}}>10 Products</p>
                            </div>
                           
                        </div>
                    </div>


                    {/* Sixth */}
                    <div className="col-12 col-md-4 col-lg-2" style={{border: "1px solid rgb(255 255 255 / 15%)"}}>
                        <div className="card-body mt-2">
                            <div className="image">
                                <img src={sixth} alt="first" className='img-fluid' />
                            </div>
                          
                            <div className="detail  mt-3 pt-2" style={{borderTop: "1px solid rgb(255 255 255 / 15%)", backgroundColor: "rgba(0, 0, 0, .03)"}}>
                                <h6 className='text-center' style={{color: "white", fontSize: "1rem", fontWeight: "500" }}>FASHION</h6>
                                <p className='text-center mb-0' style={{color: "rgb(255 255 255 /70%)", fontSize: "12px"}}>10 Products</p>
                            </div>
                           
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default BrowseCategory