import React from 'react'
import { Routes ,  Route } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contect from './pages/Contect'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Plaseorder from './pages/Plaseorder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Searchbar from './components/Searchbar'
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/>
       <Navbar/>
       <Searchbar/>
      <Routes>
           <Route path='/' element={<Home/>} />
           <Route path='/Collection' element={<Collection/>}/>
           <Route path='/about' element={<About/>}/>
           <Route path='/contect' element={<Contect/>}/>
           <Route path='/product/:productId' element={<Product/>}/>
           <Route path='/cart' element={<Cart/>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/place-order' element={<Plaseorder/>}/>
           <Route path='/orders' element={<Orders/>}/>
      </Routes>
      <Footer/>
    </div>
  )
}

export default App