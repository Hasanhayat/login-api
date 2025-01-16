import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import Product from './Product'
import { GlobalContext } from '../context/Context'
import Loader from './Loader'

const Links = () => {
    const{state , dispatch} = useContext(GlobalContext)
  
  return (
    
    (state.isLogin == true)?
      <Routes>
      <Route index element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
      :
      (state.isLogin == false)?
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
      :
      <Loader />
    
    
      
  )
}

export default Links;