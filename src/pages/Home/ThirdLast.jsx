import React from 'react'
function ThirdLast() {
    return (
        <>
            <div className="container-fluid mt-5" style={{backgroundColor: "rgb(0 0 0 / 15%)"}}>
                <div className="row p-5">
                    <div className="col-12 col-md-6 col-lg-3 p-3" >
                        <div className="icon d-flex justify-content-center mb-4">
                            <i className="fa-solid fa-cart-shopping text-white " style={{ fontSize: "2rem" }}></i>
                        </div>
                        <div className="content">
                            <h2 className='text-white text-center' style={{fontWeight: "500", fontSize: "1.5rem"}}>FREE DELIVERY</h2>
                            <p className='text-center mb-0 ' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>Free delivery over $150</p>
                            <p className='text-center mb-0 mt-4' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a laborum delectus repellat aliquam possimus molestias.</p>
                        </div>
                    </div>

                    {/* 2nd */}
                    <div className="col-12 col-md-6 col-lg-3  p-3" >
                        <div className="icon d-flex justify-content-center mb-4">
                            <i className="fa-solid fa-credit-card text-white " style={{ fontSize: "2rem" }}></i>
                        </div>
                        <div className="content">
                            <h2 className='text-white text-center' style={{fontWeight: "500", fontSize: "1.5rem"}}>SECURE PAYMENT</h2>
                            <p className='text-center mb-0 ' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>We Possess SSL / Secure Сertificate</p>
                            <p className='text-center mb-0 mt-4' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a laborum delectus repellat aliquam possimus molestias.</p>
                        </div>
                    </div>


                    {/* Third */}
                    <div className="col-12 col-md-6 col-lg-3  p-3" >
                        <div className="icon d-flex justify-content-center mb-4">
                            <i className="fa-solid fa-dollar-sign text-white " style={{ fontSize: "2rem" }}></i>
                        </div>
                        <div className="content">
                            <h2 className='text-white text-center' style={{fontWeight: "500", fontSize: "1.5rem"}}>FREE RETURNS</h2>
                            <p className='text-center mb-0 ' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>We Return Money Within 30 Days</p>
                            <p className='text-center mb-0 mt-4' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a laborum delectus repellat aliquam possimus molestias.</p>
                        </div>
                    </div>

                    {/* Fourth */}
                    <div className="col-12 col-md-6 col-lg-3 p-3" >
                        <div className="icon d-flex justify-content-center mb-4">
                        <i className="fa-solid fa-headphones text-white" style={{fontSize: "2rem"}}></i>

                        </div>
                        <div className="content">
                            <h2 className='text-white text-center' style={{fontWeight: "500", fontSize: "1.5rem"}}>CUSTOMER SUPPORT
</h2>
                            <p className='text-center mb-0 ' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>Friendly 24/7 Customer Support</p>
                            <p className='text-center mb-0 mt-4' style={{color: "white", opacity: "0.8", fontSize: "0.75rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium a laborum delectus repellat aliquam possimus molestias.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ThirdLast