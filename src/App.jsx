import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Top from "./components/Top";
import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "./context/Context";
import Links from "./components/Links";
import axios from "axios";

function App() {
  const{state , dispatch, logout} = useContext(GlobalContext)
  const [loading,setLoading] = useState(true)
  useEffect(()=>{

    let userToken = localStorage.getItem("userToken")
    axios.get('https://dummyjson.com/auth/me' , { headers: { Authorization: `Bearer ${userToken}` }})
    .then((res) => {
      console.log(res.data)
      dispatch({type: "USER_LOGIN", payload: res.data})
      setLoading(false)
    })
    .catch((err) => {
      logout()
      setLoading(false)
      console.log(err)
    })
  }
  ,[])
    return (
    <div className="app">
      <Top />
     <Links />
    </div>
  );
}

export default App;
