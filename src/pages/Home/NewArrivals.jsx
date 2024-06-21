import React from 'react'
import fifth from '../../assets/home/feature/05.png';
import sixth from '../../assets/home/feature/06.png';
import seventh from '../../assets/home/feature/07.png';
import eighth from '../../assets/home/feature/08.png';
import './FeatureStyle.scss';

function NewArrivals() {
  return (
    <>
     <div className="container mt-5 p-4" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-between align-items-center">
                        <h5 style={{ color: "white", fontSize: "1.25rem", fontWeight: "400" }}>New Arrivals</h5>
                        <button className='btn rounded-0' style={{ backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", color: "white", fontSize: "1rem", fontWeight: "400", padding: "0.375rem 0.75rem" }}>More Products</button>
                    </div>
                </div>
            </div>

            <div className="container mt-4 " >
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 cardContainer p-4">
                        <div className="heart d-flex justify-content-end mb-2">
                      <span className='rounded-circle ' style={{backgroundColor: "rgb(255 255 255 /15%)", padding:"4px 12px"}}><i class="fa-solid fa-heart text-white" style={{fontSize:"0.75rem"}}></i></span>
                        </div>
                        <div className="image">
                            <img src={fifth} alt="first" className='img-fluid' />
                        </div>
                        <div className="details mt-2">
                            <p style={{ color: "rgba(255, 255, 255, 0.70)", fontSize: "0.75rem", marginBottom: "1px" }}>Category Name</p>
                            <h6 className='text-white mt-2'>Product Name</h6>
                        </div>
                        <div className="price-star mt-2 d-flex justify-content-between align-items-center">
                            <div className="price">
                                <span className='me-1' style={{ color: "rgba(255, 255, 255, 0.70)", textDecoration: "line-through", fontSize: "0.75rem" }}>$99.0</span>
                                <span style={{ color: "white", fontSize: "1rem" }}>$85.0</span>
                            </div>
                            <div className="star">
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                            </div>
                        </div>

                        <div className="buttons mt-4 d-flex flex-column"  >
                            <button id='btn' className='btn rounded-0 mb-2' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", color: "white"}}>Add to Cart</button>
                            <button id='btn' className='btn border-0' style={{color: "white"}}>Quick View</button>
                        </div>
                    </div>
{/* 2nd */}

                    <div className="col-12 col-md-6 col-lg-3 cardContainer p-4">
                    <div className="heart d-flex justify-content-end mb-2">
                      <span className='rounded-circle ' style={{backgroundColor: "rgb(255 255 255 /15%)", padding:"4px 12px"}}><i class="fa-solid fa-heart text-white" style={{fontSize:"0.75rem"}}></i></span>
                        </div>
                        <div className="image">
                            <img src={sixth} alt="first" className='img-fluid' />
                        </div>
                        <div className="details mt-2">
                            <p style={{ color: "rgba(255, 255, 255, 0.70)", fontSize: "0.75rem", marginBottom: "1px" }}>Category Name</p>
                            <h6 className='text-white mt-2'>Product Name</h6>
                        </div>
                        <div className="price-star mt-2 d-flex justify-content-between align-items-center">
                            <div className="price">
                                <span className='me-1' style={{ color: "rgba(255, 255, 255, 0.70)", textDecoration: "line-through", fontSize: "0.75rem" }}>$99.0</span>
                                <span style={{ color: "white", fontSize: "1rem" }}>$85.0</span>
                            </div>
                            <div className="star">
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                            </div>
                        </div>

                        <div className="buttons mt-4 d-flex flex-column"  >
                            <button id='btn' className='btn rounded-0 mb-2' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", color: "white"}}>Add to Cart</button>
                            <button id='btn' className='btn border-0' style={{color: "white"}}>Quick View</button>
                        </div>
                    </div>

                    {/* Third */}
                    <div className="col-12 col-md-6 col-lg-3 cardContainer p-4">
                    <div className="heart d-flex justify-content-end mb-2">
                      <span className='rounded-circle ' style={{backgroundColor: "rgb(255 255 255 /15%)", padding:"4px 12px"}}><i class="fa-solid fa-heart text-white" style={{fontSize:"0.75rem"}}></i></span>
                        </div>
                        <div className="image">
                            <img src={seventh} alt="first" className='img-fluid' />
                        </div>
                        <div className="details mt-2">
                            <p style={{ color: "rgba(255, 255, 255, 0.70)", fontSize: "0.75rem", marginBottom: "1px" }}>Category Name</p>
                            <h6 className='text-white mt-2'>Product Name</h6>
                        </div>
                        <div className="price-star mt-2 d-flex justify-content-between align-items-center">
                            <div className="price">
                                <span className='me-1' style={{ color: "rgba(255, 255, 255, 0.70)", textDecoration: "line-through", fontSize: "0.75rem" }}>$99.0</span>
                                <span style={{ color: "white", fontSize: "1rem" }}>$85.0</span>
                            </div>
                            <div className="star">
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                            </div>
                        </div>

                        <div className="buttons mt-4 d-flex flex-column"  >
                            <button id='btn' className='btn rounded-0 mb-2' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", color: "white"}}>Add to Cart</button>
                            <button id='btn' className='btn border-0' style={{color: "white"}}>Quick View</button>
                        </div>
                    </div>

                    {/* Fourth */}
                    <div className="col-12 col-md-6 col-lg-3 cardContainer p-4">
                    <div className="heart d-flex justify-content-end mb-2">
                      <span className='rounded-circle ' style={{backgroundColor: "rgb(255 255 255 /15%)", padding:"4px 12px"}}><i class="fa-solid fa-heart text-white" style={{fontSize:"0.75rem"}}></i></span>
                        </div>
                        <div className="image">
                            <img src={eighth} alt="first" className='img-fluid' />
                        </div>
                        <div className="details mt-2">
                            <p style={{ color: "rgba(255, 255, 255, 0.70)", fontSize: "0.75rem", marginBottom: "1px" }}>Category Name</p>
                            <h6 className='text-white mt-2'>Product Name</h6>
                        </div>
                        <div className="price-star mt-2 d-flex justify-content-between align-items-center">
                            <div className="price">
                                <span className='me-1' style={{ color: "rgba(255, 255, 255, 0.70)", textDecoration: "line-through", fontSize: "0.75rem" }}>$99.0</span>
                                <span style={{ color: "white", fontSize: "1rem" }}>$85.0</span>
                            </div>
                            <div className="star">
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                                <span><i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i></span>
                            </div>
                        </div>

                        <div className="buttons mt-4 d-flex flex-column"  >
                            <button id='btn' className='btn rounded-0 mb-2' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", color: "white"}}>Add to Cart</button>
                            <button id='btn' className='btn border-0' style={{color: "white"}}>Quick View</button>
                        </div>
                    </div>
                </div>
            </div>

    </>
  )
}

export default NewArrivals