import { Button, Input } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { signupAPI } from '../Redux/auth/action';

const Signup = () => {
    const [signupCreds,setSignupCreds]=useState({})
    const dispatch=useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault();
 dispatch(signupAPI(signupCreds))
      };
    
      const hanldeChange = (e) => {
        const { name, value } = e.target;
        setSignupCreds({
          ...signupCreds,
          [name]: value,
        });
      };
     
  return (
    <div>
       <form
        onSubmit={handleSubmit}
      >
         <Input
          color="white"
          name="name"
          type="text"
          placeholder="Enter Name"
          onChange={hanldeChange}
        />
        <Input
          color="white"
          name="email"
          type="email"
          placeholder="Enter Email"
          onChange={hanldeChange}
        />
        <Input
          color="white"
          name="password"
          type="password"
          placeholder="Enter Password..."
          onChange={hanldeChange}
        />
        <Button type="submit">Signup</Button>
        <></>
        
      </form>
    </div>
  )
}

export default Signup
