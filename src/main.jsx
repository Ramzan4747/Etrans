import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact from './pages/Contact/Contact.jsx'
import TrackOrder from './pages/TrackOrder/TrackOrder.jsx'
import OurStore from './pages/OurStore/OurStore.jsx'
import SignUp from './pages/SignUp/SignUp.jsx'
import SignIn from './pages/SignIn/SignIn.jsx'
import Forgot from './pages/Forgot/Forgot.jsx'
import WhishList from './pages/Whishlist/WhishList.jsx'
import Dashboard from './pages/Dashboard/Dashboard.jsx'
import Cart from './pages/Cart/Cart.jsx'
import ApiProducts from './pages/ApiProducts/ApiProducts.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='track' element={<TrackOrder />} />
      <Route path='store' element={<OurStore />} />
      <Route path='whishlist' element={<WhishList />} />
      <Route path='cart' element={<Cart />} />
      <Route path='products' element={<ApiProducts />} />
      <Route path='signup' element={<SignUp />} />
      <Route path='signin' element={<SignIn />} />
      <Route path='forgot' element={<Forgot />} />
      <Route path='dashboard' element={<Dashboard />} />
    </Route>

))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
