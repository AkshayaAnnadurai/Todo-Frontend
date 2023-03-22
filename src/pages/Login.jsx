import { Button, Input ,Text} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginAPI, logoutAPI } from '../Redux/auth/action'


const Login = () => {
    const [loginCreds,setLoginCreds]=useState({})
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const isAuth = useSelector((store) => store.authReducer.token);
    const handleSubmit = (e) => {
        e.preventDefault();
       dispatch(loginAPI(loginCreds))
       if(isAuth)
       {
        navigate("/todos")
       }
      };
    
      const hanldeChange = (e) => {
        const { name, value } = e.target;
        setLoginCreds({
          ...loginCreds,
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
        <Button type="submit">Login</Button>
        <Text color="white">If you don't have account,please <Button color="red" onClick={()=>navigate("/signup")}>Register</Button></Text>
        <></>
      </form>
    </div>
  )
}

export default Login
