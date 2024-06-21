import React from 'react'
import i1 from '../../assets/ourstore/01.png'
import i2 from '../../assets/ourstore/02.png'
import i3 from '../../assets/ourstore/03.png'
import i4 from '../../assets/ourstore/04.png'
import i5 from '../../assets/ourstore/05.png'
import i6 from '../../assets/ourstore/06.png'
import i7 from '../../assets/ourstore/07.png'
import i8 from '../../assets/ourstore/08.png'
function Cards() {
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i1} className='img-fluid' alt="01" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>CLOTHING</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Blazers and Suits</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Dresses</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Sportswear</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Hoodies</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i2} className='img-fluid' alt="02" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>ACCESSORIES</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Bags</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Sunglasses</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Jewelery</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Cosmetics</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i3} className='img-fluid' alt="01" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>SHOES</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Sandals</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Loafers</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Casual</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Sports</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i4} className='img-fluid' alt="01" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>FURNITURE</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Tables</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Chairs</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Sofa</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Office Chairs</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                </div>




                {/* 2nd row */}


                <div className="row mt-lg-4">
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i5} className='img-fluid' alt="01" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>ElECTRONICS</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Mobiles</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Laptops</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Headphones</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Airbuds</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i6} className='img-fluid' alt="02" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>MAKEUP KIT</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Eye Shadow</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Lipstick</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Brow</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Nailpolish</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i7} className='img-fluid' alt="01" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>JEWELERY</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Bridal</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Fashion</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Tempal</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Handmade</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                    <div className="col-12 col-lg-3">
                        <div className="img" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                            <img src={i8} className='img-fluid' alt="01" />
                        </div>
                        <div className="heading" style={{ border: "0.5px solid rgb(255 255 255 / 12%)", backgroundColor: "transparent", padding: "0.5rem 1rem" }}>
                            <h6 style={{ color: "white", fontSize: "1.25rem", letterSpacing: "2px" }}>Sports</h6>
                        </div>
                        <div className="item1 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Bat</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>14</span>
                        </div>
                        <div className="item2 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Balls</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>2</span>
                        </div>
                        <div className="item3 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Rackets</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>55</span>
                        </div>
                        <div className="item4 d-flex justify-content-between" style={{ padding: "0.5rem 1rem", border: "0.5px solid rgb(255 255 255 / 12%)" }}>
                            <p className='mb-0' style={{ color: "white", fontSize: "0.75rem", fontWeight: "500" }}>Footballs</p>
                            <span style={{ backgroundColor: "rgb(255 255 255 / 15%)", color: "white", borderRadius: "0.75rem", fontSize: "0.75em", fontWeight: "500", padding: "0.35em 0.65em" }}>44</span>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Cards