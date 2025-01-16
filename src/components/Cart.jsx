import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/Context'
import axios from 'axios'
import Loader from './Loader'

const cart = () => {
 
    const {state , dispatch} = useContext(GlobalContext)
    useEffect(()=>{
axios.get(`https://dummyjson.com/carts/user/${state.user.id}`)
.then((res)=>{
console.log(res);

})
.catch((err)=>{
    console.log(err);
    
});
    },[])
  return (
    <Loader />
  )
}

export default cart