import React from 'react'
import shirt from '../../assets/home/feature/01.png'
import coat from '../../assets/home/feature/02.png'
import jeans from '../../assets/home/feature/03.png'
import hoodie from '../../assets/home/feature/04.png'
import shoes from '../../assets/home/feature/05.png'
import sofa from '../../assets/home/feature/06.png'
import watch from '../../assets/home/feature/07.png'
import heel from '../../assets/home/feature/08.png'
import shirt2 from '../../assets/home/browsecaategory/01.png'
import bag from '../../assets/home/browsecaategory/04.png'
import laptop from '../../assets/home/browsecaategory/05.png'
import headphone from '../../assets/home/browsecaategory/06.png'


function LastComponent() {
  return (
   <div className="container mt-5">
    <div className="row">
        <div className="col-12 col-md-6 col-lg-3 ">
           <div className="heading " >
           <h6 className='text-white'>Best Selling Products</h6>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={shirt} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={coat} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex" style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={jeans} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " >
            <div className="image">
                <img src={hoodie} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
            
        </div>


        {/* 2nd */}
        <div className="col-12 col-md-6 col-lg-3">
        <div className="heading " >
           <h6 className='text-white'>Featured Products</h6>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={shoes} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={sofa} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex" style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={watch} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " >
            <div className="image">
                <img src={heel} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
        </div>


        {/* Third */}
        <div className="col-12 col-md-6 col-lg-3">
        <div className="heading " >
           <h6 className='text-white'>New Arrivals</h6>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={shirt2} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={bag} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex" style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={laptop} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " >
            <div className="image">
                <img src={headphone} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
        </div>


        {/* Fourth */}
        <div className="col-12 col-md-6 col-lg-3">
        <div className="heading " >
           <h6 className='text-white'>Top Rated Products</h6>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={coat} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={jeans} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex" style={{borderBottom:"1px solid rgb(255 255 255 / 15%)"}}>
            <div className="image">
                <img src={shoes} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
           <div className="card-body d-flex " >
            <div className="image">
                <img src={hoodie} alt="shirt" width="100px"  className='img-fluid'/>
            </div>
            <div className="detail">
                <h6 className='text-white mb-0' style={{fontWeight: "400"}}>Product Name</h6>
                <span >
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                <i className='fa-solid fa-star text-white' style={{fontSize: "0.5rem"}}></i>
                </span>
                <p className='text-white' style={{fontSize: "0.65rem"}}>$44</p>
            </div>
           </div>
        </div>
    </div>

   
   </div>
  )
}

export default LastComponent