import React from 'react'
import './Header.scss'

function Topbar() {
  return (
    <>
     <div className='container-fluid  topbar' id='topbar'>
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-11 col-md-11 ">
            <p className='text-center mb-0'>Get Up to <b>40% OFF</b> New-Season Styles <button style={{ backgroundColor: "black", color: "white" }}>Men</button> <button style={{ backgroundColor: "black", color: "white" }}>Women</button> <span style={{ opacity: "0.7" }}>*Limited time only</span></p>
          </div>
          <div className='col-1 col-md-1 d-flex justify-content-center align-items-center' >
            <button className='left-cross'>X</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Topbar