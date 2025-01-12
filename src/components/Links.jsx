import React, { useContext } from 'react'
import { Navigate, Route, Routes } from 'react-router'
import Home from './Home'
import Login from './Login'
import Products from './Products'
import Product from './product'
import { GlobalContext } from '../context/Context'

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
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="*" element={<Navigate to="/login" replace={true} />} />
      </Routes>
    
     
    
  )
}

export default Links;