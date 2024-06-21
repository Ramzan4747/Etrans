import React from 'react'
import first from '../../assets/home/feature/01.png';
import second from '../../assets/home/feature/02.png';
import third from '../../assets/home/feature/03.png';
import fourth from '../../assets/home/feature/04.png';
import coat from '../../assets/home/feature/02.png'
import jeans from '../../assets/home/feature/03.png'
import hoodie from '../../assets/home/feature/04.png'
import shoes from '../../assets/home/feature/05.png'

function WhishList() {
  return (
  <>
  
  <div className="container mt-4 mb-5" >
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3 cardContainer p-4">
                        <div className="heart d-flex justify-content-end mb-2">
                      <span className='rounded-circle ' style={{backgroundColor: "rgb(255 255 255 /15%)", padding:"4px 12px"}}><i class="fa-solid fa-heart text-white" style={{fontSize:"0.75rem"}}></i></span>
                        </div>
                        <div className="image">
                            <img src={first} alt="first" className='img-fluid' />
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
                            <img src={second} alt="first" className='img-fluid' />
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
                            <img src={third} alt="first" className='img-fluid' />
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
                            <img src={fourth} alt="first" className='img-fluid' />
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


{/* Next Row */}
<div className="row">
                    <div className="col-12 col-md-6 col-lg-3 cardContainer p-4">
                        <div className="heart d-flex justify-content-end mb-2">
                      <span className='rounded-circle ' style={{backgroundColor: "rgb(255 255 255 /15%)", padding:"4px 12px"}}><i class="fa-solid fa-heart text-white" style={{fontSize:"0.75rem"}}></i></span>
                        </div>
                        <div className="image">
                            <img src={coat} alt="first" className='img-fluid' />
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
                            <img src={jeans} alt="first" className='img-fluid' />
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
                            <img src={hoodie} alt="first" className='img-fluid' />
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
                            <img src={shoes} alt="first" className='img-fluid' />
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

export default WhishList