import React from 'react'
import carouselshoes from '../../assets/home/carouselshoes.png'
import carouselman from '../../assets/home/carouselman.png'
import carouselwoman from '../../assets/home/carouselwoman.png'

function Carousel() {
  return (
   <>
   <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="d-md-flex">
        <div className="col-md-6 d-none  d-md-flex justify-content-center align-items-center flex-column ">
          <div className="carousel-text  d-flex justify-content-center align-items-start flex-column" >
            <h3 className='text-white'>Has just Arrived</h3>
            <h1 className='text-white'>Huge Summer Collection</h1>
            <p className='text-white' style={{opacity: "0.8", fontSize: "14px"}}>Swimwear, Shorts, Trousers & much more...</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "14px"}} >SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={carouselman} className="d-block w-100 img-fluid" alt="man" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-md-flex">
        <div className="col-md-6 d-none  d-md-flex justify-content-center align-items-center flex-column">
          <div className="carousel-text d-flex justify-content-center align-items-start flex-column">
            <h3 className='text-white'>Hurry up! Limited time offer</h3>
            <h1 className='text-white'>Women Sportwear Sale</h1>
            <p className='text-white' style={{opacity: "0.8", fontSize: "14px"}}>Sneakers, Sweatshirts, Hoodies & much more...</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "14px"}} >SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={carouselwoman} className="d-block w-100 img-fluid" alt="woman" />
        </div>
      </div>
    </div>
    <div className="carousel-item">
      <div className="d-md-flex">
        <div className="col-md-6 d-none  d-md-flex justify-content-center align-items-center flex-column">
          <div className="carousel-text d-flex justify-content-center align-items-start flex-column">
            <h3 className='text-white'>Complete your look with</h3>
            <h1 className='text-white'>New Men's Accessories</h1>
            <p className='text-white' style={{opacity: "0.8", fontSize: "14px"}}>Hats & Caps, Sunglasses, Bags & much more...</p>
            <button className='btn rounded-0 text-white' style={{backgroundColor: "rgb(255 255 255 / 15%)", borderColor: "rgb(255 255 255 / 15%)", fontSize: "14px"}} >SHOP NOW</button>
          </div>
        </div>
        <div className="col-md-6">
          <img src={carouselshoes} className="d-block w-100 img-fluid" alt="shoes" />
        </div>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
   
   </>
  )
}

export default Carousel