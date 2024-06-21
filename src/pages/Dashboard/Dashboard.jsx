
import React, { useState } from 'react';
import MainDash from './MainDash';
import Orders from './Orders';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Downloads from './Downloads';
import Payment from './Payment';
import { NavLink } from 'react-router-dom';
import  './style.scss'
const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };


  const importPageContent = async (page) => {
    switch (page) {
      case 'Dashboard':
        return <MainDash />;
      case 'Orders':
        return import('./Orders');
      default:
        return null;
    }
  };

  const renderPageContent =  () => {
    if (!currentPage) return null;
    const PageContent =  importPageContent(currentPage);
    // return PageContent ? <PageContent.default /> : null;
  };


  const pages = ['Dashboard', 'Orders', 'Downloads', "Payment"]; // Add your page names here
const pages2 = [<MainDash/>, <Orders /> , <Downloads />, <Payment />]

const renderPages = (currentPage) =>{
  if(currentPage == "Dashboard"){
    return <MainDash />
  }
  else if(currentPage == "Orders"){
    return <Orders />
  }else if(currentPage == "Downloads"){
    return <Downloads />
  }else if(currentPage == "Payment"){
    return <Payment />
  }
}

  return (
    <div className="container p-5 rounded" style={{backgroundColor: "rgb(0 0 0 / 20%)", border: "1px solid transparent"}}>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-3  p-3" style={{backgroundColor:"rgb(0 0 0 / 40%)"}}>
          <ul className="list-group "  >
            {pages.map((page, index) => (
              <li
              style={{marginBottom:"2px", color:"white", backgroundColor:"rgb(0 0 0 / 40%)",  border:"none", borderBottom:"1px solid rgb(255 255 255 / 50%)", borderRadius:"0"}}
                key={index}
                className={`list-group-item nav-item ${currentPage === page ? 'nav-link active bg-secondary' : ''}`}
                onClick={() => handlePageClick(page)}
              >
               {page}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-9 " >
          <div className="card" style={{backgroundColor: "rgb(0 0 0 / 40%)"}}>
            <div className="card-body" >

             {
              
              currentPage ? renderPages(currentPage) : <h3 className='text-white'>Please Selct Page</h3>
              
              
             }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
