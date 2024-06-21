import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function ApiProducts() {

  const [user, setUser] = useState([]);
  const [isLoading, setIsLoading]= useState(false)

  const fetchData = async () => {
    setIsLoading(true)
    const {data}  = await axios.get("http://localhost:3000/api/user");

    // const {data} = await fetch("http://localhost:3000/api/user")

    console.log(data)
    // console.log(data.results);
    setUser(data)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
<div className="container">
  <div className="row">
  {
   !isLoading ?  user.map((item)=>{
    // return  <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0" key={item.id}>
    return  <div className="col-12 col-md-6 col-lg-4 mt-3 mt-lg-0" key={item.id}>
        <img src={item.image} alt="image" className='img-fluid' />
        <h6 className='text-white'>{item.title}</h6>
        {/* <h6 className='text-white'>{item.name}</h6> */}
        <p className='text-white'>{item.price}</p>
      </div>
    }) :
    <div className='d-flex justify-content-center m-5'>
    <div className='spinner-border text-white'>Loading</div>
    </div>
  }
  </div>
</div>
  )
}
