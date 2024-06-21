import React from 'react'
import Carousel from './Carousel'
import SecondComponent from './SecondComponent'
import FirstCards from './FirstCards'
import FeatureProds from './FeatureProds'
import NewArrivals from './NewArrivals'
import BrowseCategory from './BrowseCategory'
import ThirdLast from './ThirdLast'
import LastComponent from './LastComponent'


function Home() {
  return (
    <>
    <Carousel />
    <SecondComponent />
    <FirstCards />
    <FeatureProds />
    <NewArrivals />
    <BrowseCategory />
    <ThirdLast />
    <LastComponent />
    </>
  )
}

export default Home

// <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
// <div className="carousel-inner">
//   <div className="carousel-item active">
//     <div className="d-md-flex">
//       <div className="col-md-6 d-none d-md-block">
//         <div className="carousel-text d-flex justify-content-center align-items-center flex-column ">
//           <h3>Man Text</h3>
//           <p>Some text about the man...</p>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <img src={carouselman} className="d-block w-100" alt="man" />
//       </div>
//     </div>
//   </div>
//   <div className="carousel-item">
//     <div className="d-md-flex">
//       <div className="col-md-6 d-none d-md-block">
//         <div className="carousel-text d-flex flex-column align-items-center justify-content-center">
//           <h3>Woman Text</h3>
//           <p>Some text about the woman...</p>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <img src={carouselwoman} className="d-block w-100" alt="woman" />
//       </div>
//     </div>
//   </div>
//   <div className="carousel-item">
//     <div className="d-md-flex">
//       <div className="col-md-6 d-none d-md-block">
//         <div className="carousel-text d-flex flex-column align-items-center justify-content-center">
//           <h3>Has just Arrived</h3>
//           <h1>Huge Summer Collection</h1>
//           <p>Swimwear, Shorts, Trousers & much more...</p>
//         </div>
//       </div>
//       <div className="col-md-6">
//         <img src={carouselshoes} className="d-block w-100" alt="shoes" />
//       </div>
//     </div>
//   </div>
// </div>
// <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
//   <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//   <span className="visually-hidden">Previous</span>
// </button>
// <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
//   <span className="carousel-control-next-icon" aria-hidden="true"></span>
//   <span className="visually-hidden">Next</span>
// </button>
// </div>