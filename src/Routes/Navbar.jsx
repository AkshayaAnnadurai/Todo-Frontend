import React from 'react'
import { Text ,Box, Heading} from '@chakra-ui/react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div > 
        <Box display="flex" w="100%" border={"1px solid red"} justifyContent="space-between" position={"sticky"}>
       <Link to="/"><Heading color="white">Home</Heading></Link>
       <Link to="/login"><Heading  color="white">Login</Heading></Link>
  
       </Box>
    </div>
  )
}

export default Navbar
