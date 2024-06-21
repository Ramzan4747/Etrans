import React from 'react'
import googlePlay from '../../assets/footer/play-store.png'
import applePlay from '../../assets/footer/apple-store.png'

function BigComponent() {
    return (
        <>
            <div className="container-fluid p-5 mt-3" style={{borderBottom: "1px solid rgb(255 255 255 / 15%)", backgroundColor:"rgb(0 0 0 / 15%)"}}>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-3">
                        <h6 style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.5", color: "white" }}>Contact Info</h6>

                        <div className="address mb-3">
                            <p className='mb-0 text-white' style={{ fontSize: "1rem" }}>Address:</p>
                            <p className='mb-0 text-white' style={{ fontSize: "0.75rem", opacity: "0.8", }}>123 Street Name, City, Australia</p>
                        </div>
                        <div className="phone mb-3">
                            <p className='mb-0 text-white' style={{ fontSize: "1rem" }}>Phone:</p>
                            <p className='mb-0 text-white' style={{ fontSize: "0.75rem", opacity: "0.8", }}>+923348843848</p>
                        </div>
                        <div className="address mb-3">
                            <p className='mb-0 text-white' style={{ fontSize: "1rem" }}>Address:</p>
                            <p className='mb-0 text-white' style={{ fontSize: "0.75rem", opacity: "0.8", }}>123 Street Name, City, Australia</p>
                        </div>
                        <div className="email mb-3">
                            <p className='mb-0 text-white' style={{ fontSize: "1rem" }}>Email:</p>
                            <p className='mb-0 text-white' style={{ fontSize: "0.75rem", opacity: "0.8", }}>mail@gmail.com</p>
                        </div>
                        <div className="workingdays mb-3">
                            <p className='mb-0 text-white' style={{ fontSize: "1rem" }}>Working Days:</p>
                            <p className='mb-0 text-white' style={{ fontSize: "0.75rem", opacity: "0.8", }}>Mon - FRI / 9:30 AM - 6:30 PM</p>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h6 style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.5", color: "white" }}>Shop Categories</h6>
                        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Jeans</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>T-shirts</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Sports</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Shirts & Tops</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Clogs & Mules</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Sunglasses</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Bags and Wallets</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Sneakers</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Electronics</li>

                            <li style={{ color: "white", opacity: "0.9", fontSize: "1rem" }}> <i style={{ fontSize: "0.75rem" }} className='fa-solid fa-chevron-right me-2'></i>Furniture</li>
                        </ul>
                    </div>


                    {/* third */}

                    <div className="col-12 col-md-6 col-lg-3">
                        <h6 style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.5", color: "white" }}>Popular Tags</h6>

                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Cloths</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Electronics</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Furniture</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Sports</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Men Wear</button>
                        <button className='btn rounded-0' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Women Wear</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Laptops</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Formal Wear</button>
                        <button className='btn rounded-0 me-2' style={{ backgroundColor: "255rgb(255  255 / 12%)", border: "1px solid rgb(255 255 255 / 15%)", color: "rgb(255 255 255 / 75%)", padding: "0.3rem", fontSize: "0.75rem" }}>Top Wear</button>
                    </div>


                    {/* Fourth */}
                    <div className="col-12 col-md-6 col-lg-3">
                        <h6 style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.5", color: "white" }}>Stay Informed</h6>

                        <div className="input-field">
                            <input type="text" className='form-control' placeholder='ENTER YOUR EMAIL' style={{backgroundColor: "rgb(0 0 0 /15%)", border: "1px solid rgb(255 255 255 / 15%)", borderRadius: "2rem", padding: "0.375rem 0.75rem", color:"#fff"}} />
                            <button className='btn w-100 mt-2 rounded-0' style={{backgroundColor:"white", color: "black", borderColor: "e7eaf3", padding:"0.675rem 0.85rem", fontSize: "12px", fontWeight: "500"}}>Subscribe</button>
                            <p className='mb-0 mt-2' style={{color: "white", opacity:"0.8", fontSize:"0.75rem"}}>Subscribe to our newsletter to receive early discount offers, updates and new products info.</p>

                            <div className="stores mt-2">
                                <div className="text">
                                <h6 style={{ fontSize: "1rem", fontWeight: "500", lineHeight: "1.5", color: "white" }}>Download Our App</h6>
                                </div>
                            <div className="icons mt-3">
                               <div className="row">
                                <div className="col-6">
                                <img src={googlePlay}  alt="google" className='img-fluid' />
                                </div>
                                <div className="col-6">
                                <img src={applePlay} alt="apple" className='img-fluid' />
                                </div>
                               </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default BigComponent