import React from 'react'
import visa from '../../assets/footer/visa.png'
import paypal from '../../assets/footer/paypal.png'
import mastercard from '../../assets/footer/mastercard.png'
import americanexpress from '../../assets/footer/american-express.png'
import { NavLink } from 'react-router-dom'

function SmallComponent() {
    return (
        <div className="container-fluid p-3" style={{backgroundColor: "rgb(0 0 0 / 15%)"}}>
            <div className="row">
                <div className="col-12 col-md-6">
                    <p style={{ color: "white", opacity: "0.8", fontSize: "0.85rem" }}>Copyright &copy; 2024. All right reserved.</p>
                </div>
                <div className="col-12 col-md-6">
                    <div className="row">
                        <div className="col-6 col-md-3">
                            <div className="card-body rounded p-2" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                                <NavLink to="#"><img src={visa} className='img-fluid' alt="amazon" /></NavLink>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 ">
                            <div className="card-body rounded p-2" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                                <NavLink to="#"><img src={paypal} className='img-fluid' alt="amazon" /></NavLink>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-2 mt-md-0">
                        <div className="card-body rounded p-2" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                                <NavLink to="#"><img src={visa} className='img-fluid' alt="amazon" /></NavLink>
                            </div>
                        </div>
                        <div className="col-6 col-md-3 mt-2 mt-md-0">
                            <div className="card-body rounded p-2" style={{ backgroundColor: "rgb(0 0 0 / 20%)" }}>
                                <NavLink to="#"><img src={americanexpress} className='img-fluid' alt="amazon" /></NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SmallComponent