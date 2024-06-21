import React from 'react'
import { NavLink } from 'react-router-dom'
import delivery from '../../assets/about/delivery.png'
import moneyBag from '../../assets/about/money-bag.png'
import support from '../../assets/about/support.png'
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


function About() {
  return (
    <>
      {/* Our Story */}
      <div className="cotainer p-3 p-md-5 ">
        <div className="row">
          <div className="col">
            <h4 style={{ fontSize: "calc(1.275rem + .3vw)", color: "white", fontWeight: "500" }}>Our Story</h4>
            <p style={{ color: 'white', fontSize: "14px", opacity: "0.8", fontWeight: "500", lineHeight: "20px", letterSpacing: "0.5px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

            <p style={{ color: 'white', fontSize: "14px", opacity: "0.8", fontWeight: "500", lineHeight: "20px", letterSpacing: "0.5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>

            <p style={{ color: 'white', fontSize: "14px", opacity: "0.8", fontWeight: "500", lineHeight: "20px", letterSpacing: "0.5px" }}>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          </div>
        </div>
      </div>

      {/* Why choose us */}
      <div className="container">
        <div className="row" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
          <div className="col mb-2">
            <h4 style={{ fontSize: "calc(1.275rem + .3vw)", color: "white", fontWeight: "500" }}>Why Choose Us</h4>
          </div>
        </div>

        {/* cards */}
        <div className="row mt-4">
          <div className="col-12 col-lg-4">
            <div className="card-body " style={{ backgroundColor: "rgb(0 0 0 / 20%", padding: "1rem 1rem" }}>
              <img src={delivery} alt="delivery" className='img-fluid ' width="60px" />
              <h5 className='my-3' style={{ color: "white", fontSize: "1.25rem" }}>Free Shipping</h5>
              <p style={{ color: "white", opacity: "0.8", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corrupti aperiam dolores, ipsum ipsa quos totam magni corporis officia eius laudantium exercitationem! Laborum rem nobis .</p>
            </div>
          </div>
          <div className="col-12 col-lg-4 my-2 my-lg-0">
            <div className="card-body " style={{ backgroundColor: "rgb(0 0 0 / 20%", padding: "1rem 1rem"  }}>
              <img src={moneyBag} alt="moneybag" className='img-fluid ' width="52px" />
              <h5 className='my-3' style={{ color: "white", fontSize: "1.25rem" }}>100% MONEY BACK GUARANTEE</h5>
              <p style={{ color: "white", opacity: "0.8", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corrupti aperiam dolores, ipsum ipsa quos totam magni corporis officia eius laudantium. Animi </p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
          <div className="card-body " style={{ backgroundColor: "rgb(0 0 0 / 20%", padding: "1rem 1rem"  }}>
              <img src={support} alt="support" className='img-fluid ' width="52px" />
              <h5 className='my-3' style={{ color: "white", fontSize: "1.25rem" }}>100% MONEY BACK GUARANTEE</h5>
              <p style={{ color: "white", opacity: "0.8", fontSize: "14px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi corrupti aperiam dolores, ipsum ipsa quos totam magni corporis officia eius laudantium. Animi </p>
            </div>
          </div>
        </div>

      </div>



      {/* Our Top Brands */}
      <div className="container py-2 mt-4" >
        <div className="row mb-4" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
          <div className="col-12 p-2 p-md-3">
            <h4 style={{ fontSize: "calc(1.275rem + .3vw)", color: "white", fontWeight: "500" }}>Our Top Brands</h4>
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

export default About