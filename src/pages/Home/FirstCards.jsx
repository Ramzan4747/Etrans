import React from 'react'
import pic1 from '../../assets/home/firstcard1.png'
import pic2 from '../../assets/home/firstcard2.png'
import pic3 from '../../assets/home/firstcard3.png'

function FirstCards() {
  return (
   <>
   <div className="container mt-4" >
    <div className="row">
        <div className="col-12 col-lg-4" style={{backgroundColor: "rgb(0 0 0 / 20%)"}} >
          <div className="row" >
          <div className='col-6'>
            <img src={pic1} alt="pic1" className='img-fluid' />
          </div>
          <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
            <h5 style={{fontSize: "1.25rem", color: "white"}}>Men's Wear</h5>
            <p style={{color: "rgb(255 255 255 /70%)", fontSize:"0.75rem"}}>STARTING AT $9</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "0.75rem"}}>SHOP NOW</button>
          </div>
          </div>
        </div>
        <div className="col-12 col-lg-4  my-5 my-lg-0" style={{backgroundColor: "rgb(0 0 0 / 20%)"}}  >
        <div className="row" >
          <div className='col-6'>
            <img src={pic2} alt="pic2" className='img-fluid' />
          </div>
          <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
            <h5 style={{fontSize: "1.25rem", color: "white"}}>Women's Wear</h5>
            <p style={{color: "rgb(255 255 255 /70%)", fontSize:"0.75rem"}}>STARTING AT $9</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "0.75rem"}}>SHOP NOW</button>
          </div>
          </div>
        </div>
        <div className="col-12 col-lg-4" style={{backgroundColor: "rgb(0 0 0 / 20%)"}}  >
        <div className="row" >
          <div className='col-6'>
            <img src={pic3} alt="pic3" className='img-fluid' />
          </div>
          <div className='col-6 d-flex flex-column justify-content-center align-items-center'>
            <h5 style={{fontSize: "1.25rem", color: "white"}}>Kid's Wear</h5>
            <p style={{color: "rgb(255 255 255 /70%)", fontSize:"0.75rem"}}>STARTING AT $9</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "0.75rem"}}>SHOP NOW</button>
          </div>
          </div>
        </div>
    </div>
   </div>
   </>
  )
}

export default FirstCards