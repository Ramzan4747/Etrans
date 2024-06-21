import React from 'react'
import { NavLink } from 'react-router-dom'

function Contact() {
  return (
    <>

      {/* Contact us */}

      {/* <div className="container-fluid" style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}>
        <div className="container" style={{ padding: "20px 0px" }}>
          <div className="row">
            <div className="col-3">
              <h3 className='fs-sm-1' style={{ color: "white", fontSize: "24px", fontFamily: "Sans-serif", fontWeight: "bold" }}>Contact Us  <span style={{ opacity: 0.5 }}>|</span></h3>
            </div>
            <div className="col-9 d-flex justify-content-end">
              <nav aria-label="breadcrumb " >
                <ol className="breadcrumb " >
                  <li className="breadcrumb-item pe-2"><NavLink className="" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }} to="#"><span><i className='mb-5' style={{ fontSize: "10px", }} class="fa-solid fa-house"></i> </span>Home</NavLink></li>
                  <span className="arrow pe-2" style={{ color: "white" }}>&gt;</span>
                  <li className="breadcrumb-item pe-2"><NavLink to="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>Pages</NavLink></li>
                  <span className="arrow pe-2" style={{ color: "white" }}>&gt;</span>
                  <li class="breadcrumb-item active" aria-current="page"><NavLink to="#" style={{ color: "white", textDecoration: "none", fontSize: "16px", fontWeight: "bold" }}>Contact us</NavLink></li>
                </ol>
              </nav>
            </div>
          </div>

        </div>
      </div> */}

      {/* Embedded Map */}
      <div className="container-fluid d-flex justify-content-center">
        <div className="container  pt-5 pb-5">
          <div className='row '>
            <div className="col-12 d-flex justify-content-center" style={{ backgroundColor: "rgb(0 0 0 / 15%)", padding: "20px" }}>
              <iframe src="https://www.google.com/maps/d/embed?mid=1qA7DPuaw-2Pnju3O3FbE-k1WL3M&hl=en_US&ehbc=2E312F" width="100%" height="480"></iframe>
            </div>

          </div>
        </div>
      </div>



      {/* Forms */}
      <div className="container-fluid mb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-12 col-lg-8 p-3 mb-2 " style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>

              <form>
                <h6 className='mb-0 fw-5 text-white'>DROP US A LINE</h6>
                <div className='my-3' style={{ borderBottom: "1px solid rgb(255 255 255 / 15%)" }}></div>
                <div class="form-group mb-3">
                  <label for="name" className='text-white mb-2'>Enter Your Name</label>
                  <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", border: "0" }} type="text" class="form-control rounded-1" id="name" />
                </div>
                <div class="form-group mb-3">
                  <label for="email" className='text-white mb-2'>Enter Your Email</label>
                  <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", border: "0" }} type="email" class="form-control rounded-1" id="email" />
                </div>
                <div class="form-group mb-3">
                  <label for="phone" className='text-white mb-2'>Enter Your Phone</label>
                  <input style={{ backgroundColor: "rgb(0 0 0 / 15%)", border: "0" }} type="tel" class="form-control rounded-1" id="phone" />
                </div>
                <div class="form-group mb-3">
                  <label className='text-white mb-2' for="exampleFormControlTextarea1">Message</label>
                  <textarea style={{ backgroundColor: "rgb(0 0 0 / 15%)", border: "0" }} class="form-control rounded-1" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <button type="submit" class="btn rounded-0 text-white " style={{ backgroundColor: "rgb(255 255 255 / 15%)" }}>Submit</button>
              </form>
            </div>
            <div className="col-12 col-md-12 col-lg-4  ">

              <div className="p-3" style={{ backgroundColor: "rgb(0 0 0 / 15%)" }}>
                <div>
                  <p className='mb-0' style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>Address</p>
                  <p style={{ fontSize: "16px", color: "white", opacity: "0.7" }}>123, Tariq Hall, UAF, Faisalabad </p>
                </div>
                <div>
                  <p className='mb-0' style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>Phone</p>
                  <p style={{ fontSize: "16px", color: "white", opacity: "0.7" }}>Mobile: +923217275747</p>
                </div>
                <div>
                  <p className='mb-0' style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>Email</p>
                  <p style={{ fontSize: "16px", color: "white", opacity: "0.7" }}>ramzan10.jhang@gmail.com</p>
                </div>
                <div>
                  <p className='mb-0' style={{ fontSize: "16px", fontWeight: "bolder", color: "white" }}>Working Days</p>
                  <p style={{ fontSize: "16px", color: "white", opacity: "0.7" }}>Mon - Fri / 9:00am to 5:00pxm</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Contact

