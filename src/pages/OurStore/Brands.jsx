import React from 'react'

import amazon from '../../assets/about/amazon.png'
import canon from '../../assets/about/canon.png'
import dp from '../../assets/about/dp.png'
import samsung from '../../assets/about/samsung.png'
import motorola from '../../assets/about/motorola.png'
import sony from '../../assets/about/sony.png'
import microsoft from '../../assets/about/microsoft.png'
import puma from '../../assets/about/puma.png'
import adidas from '../../assets/about/adidas.png'
import newbalance from '../../assets/about/newbalance.png'
import fila from '../../assets/about/fila.png'
import van from '../../assets/about/van.png'
import reebok from '../../assets/about/reebok.png'
import ajio from '../../assets/about/ajio.png'
import bosch from '../../assets/about/bosch.png'
import { NavLink } from 'react-router-dom'


function Brands() {
  return (
    <>
      <div className="container py-2 mt-4" >
        <div className="row mb-4" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
          <div className="col-12 p-2 p-md-3">
            <h4 className='text-center' style={{ fontSize: "calc(1.275rem + .3vw)", color: "white", fontWeight: "500" }}>Popular Brands</h4>
          </div>
        </div>

        {/* First row */}
        <div className="row">
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={amazon} className='img-fluid' alt="amazon" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 " style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={canon} className='img-fluid' alt="canon" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={dp} className='img-fluid' alt="dp" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={samsung} className='img-fluid' alt="samsung" /></NavLink>
            </div>
          </div>
        </div>


        {/* 2nd row */}
        <div className="row mt-2 mt-lg-2">
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={motorola} className='img-fluid' alt="motorola" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 " style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={sony} className='img-fluid' alt="sony" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={microsoft} className='img-fluid' alt="microsoft" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={puma} className='img-fluid' alt="puma" /></NavLink>
            </div>
          </div>
        </div>

        {/* Third row */}
        <div className="row mt-2 mt-lg-2">
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={adidas} className='img-fluid' alt="adidas" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 " style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={newbalance} className='img-fluid' alt="newbalance" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={fila} className='img-fluid' alt="fila" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={van} className='img-fluid' alt="van" /></NavLink>
            </div>
          </div>
        </div>

        {/* Fourth row */}
        <div className="row mt-2 mt-lg-2">
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={reebok} className='img-fluid' alt="rebook" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3 ">
            <div className="card-body rounded p-3 " style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={ajio} className='img-fluid' alt="ajio" /></NavLink>
            </div>
          </div>
          <div className="col-6 col-lg-3">
            <div className="card-body rounded p-3 mt-2 mt-lg-0" style={{ backgroundColor: "rgb(0 0 0 / 20%" }}>
              <NavLink to="#"><img src={bosch} className='img-fluid' alt="bosch" /></NavLink>
            </div>
          </div>

        </div>




      </div>
    
    </>
  )
}

export default Brands