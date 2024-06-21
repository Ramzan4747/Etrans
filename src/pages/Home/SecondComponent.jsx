import React from 'react'

function SecondComponent() {
    return (
        <>
            <div className="container mt-5" style={{borderTop: "1px solid rgb(255 255 255 / 15%)",borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
                <div className="row p-5">
                    <div className="col-12 col-md-4 d-flex" >
                        <div className='me-4'>
                            <i className="fa-solid fa-car text-white" style={{fontSize: "50px"}} ></i>
                        </div>
                        <div>
                            <h6 className='text-white'>FREE SHIPPING & RETURN</h6>
                            <p style={{color: "white", opacity: "0.8", fontSize: "14px"}}>Free Shipping on all orders over $49</p>
                        </div>

                    </div>
                    <div className="col-12 col-md-4 my-3 my-md-0  d-flex" >
                        <div className='me-4'>
                            <i className="fa-solid fa-dollar-sign text-white" style={{fontSize: "50px"}}></i>
                        </div>
                        <div>
                            <h6 className='text-white'>MONEY BACK GUARENTEE</h6>
                            <p style={{color: "white", opacity: "0.8", fontSize: "14px"}}>100% money back guarerntee</p>
                        </div>
                    </div>
                    <div className="col-12  col-md-4 d-flex">
                        <div className='me-4'>
                            <i className="fa-solid fa-headphones text-white" style={{fontSize: "50px"}}></i>
                        </div>
                        <div>
                            <h6 className='text-white'>ONLINE SUPPORT 24/7</h6>
                            <p style={{color: "white", opacity: "0.8", fontSize: "14px"}}>Awesome support for 24/7</p>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default SecondComponent