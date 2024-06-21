import React from 'react'
import './trackcss.scss'
import {MDBIcon} from "mdb-react-ui-kit";

function TrackOrder() {
    return (
        <>
            <div className="container mt-4 p-3 mb-5" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }} >
                <div className="row">
                    <div className="col">
                        <h6 className='text-white' style={{ fontSize: "1rem" }}>Order ID: OD353474BD3848</h6>
                    </div>
                </div>
            </div>

            <div className="container p-4 " style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                <div className="row ">
                    <div className="col-12 col-lg-3  d-flex flex-column align-items-center">
                        <h6 style={{ color: "white", fontSize: "1rem", fontWeight: "700" }}>Estimated Delivery Time: </h6>
                        <p style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem", fontWeight: "500" }}>23 April 2024</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 d-flex flex-column align-items-center">
                        <h6 style={{ color: "white", fontSize: "1rem", fontWeight: "700" }}>Shipping By: </h6>
                        <p style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem", fontWeight: "500" }}>BLUEDART | +91-9910XXXX</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 d-flex flex-column align-items-center">
                        <h6 style={{ color: "white", fontSize: "1rem", fontWeight: "700" }}>Status: </h6>
                        <p style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem", fontWeight: "500" }}>Picked by the courier</p>
                    </div>
                    <div className="col-12 col-lg-3 mt-5 mt-lg-0 d-flex flex-column align-items-center">
                        <h6 style={{ color: "white", fontSize: "1rem", fontWeight: "700" }}>Trackin#: </h6>
                        <p style={{ color: "rgb(255 255 255 / 70%)", fontSize: "0.75rem", fontWeight: "500" }}>BD65856647</p>
                    </div>
                </div>
            </div>



            {/* Track order */}
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                            <span className="dot"></span>
                            <hr className="flex-fill track-line" />
                            <span className="dot"></span>
                            <hr className="flex-fill track-line" />
                            <span className="dot"></span>
                            <hr className="flex-fill track-line" />
                            <span className="d-flex justify-content-center align-items-center big-dot dot">
                                <MDBIcon icon="check text-dark" />
                            </span>
                        </div>
                    </div>
                </div>
            </div>

          <div className="container">
            <div className="row">
                <div className="col">
                <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-column align-items-start">
                    <span style={{color: "rgba(255, 255, 255, 0.55)", fontSize: "0.75rem", fontWeight: "500"}}>Order Confirmed</span>
                </div>

                <div className="d-flex flex-column justify-content-center align-items-center">
                <span style={{color: "rgba(255, 255, 255, 0.55)", fontSize: "0.75rem", fontWeight: "500"}}>Picked By Courier</span>
                </div>
                <div className="d-flex flex-column align-items-center">
                <span style={{color: "rgba(255, 255, 255, 0.55)", fontSize: "0.75rem", fontWeight: "500"}}>On the Way</span>
                </div>
                <div className="d-flex flex-column align-items-end">
                <span style={{color: "rgba(255, 255, 255, 0.55)", fontSize: "0.75rem", fontWeight: "500"}}>Ready For Pickup</span>
                </div>
            </div>



                </div>
            </div>
          </div>
        </>
    )
}

export default TrackOrder