import React, { useEffect, useState } from 'react'
import { Text ,Box, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
const Navbar = () => {
  const Auth = localStorage.getItem("token");
  const[token,setToken]=useState(Auth)
  const[state,setState]=useState(false)
 useEffect(()=>{
   
 },[state])
  return (
    <div > 
        <Box display="flex" w="100%" border={"1px solid red"} justifyContent="space-between" position={"sticky"}>
       <Link to="/"><Heading color="white">Home</Heading></Link>
       {!Auth? <Link to="/login"><Heading  color="white" >Login</Heading></Link>
       :
       <Heading  color="white" onClick={()=>{setToken("");
       setState((prev)=>!prev)
       localStorage.setItem("token","")}}>Logout</Heading>}
      
  
       </Box>
    </div>
  )
}

export default Navbar
