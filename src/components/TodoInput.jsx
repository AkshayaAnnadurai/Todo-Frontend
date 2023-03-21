import React from 'react'
import { InputGroup,Input,Button,useToast} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, getTodos } from '../Redux/todo/action';
import { useEffect } from 'react';

const TodoInput= () => {
  const [text, setText] =useState(" ")
  const[state,setState] =useState(false)
  const handleChange=(text)=>{
    setText(text)
    
  }
 const dispatch=useDispatch()
 
 const toast = useToast({
  title: "Error!",
  description: "Task cannot be empty :/",
  duration: 2500,
  isClosable: true,
  status: "error",
});
useEffect(()=>{
},[state])
  return (
    <div>
      <InputGroup>
      <Input 
   color={'white'}
      value={text}
      type="text" 
      placeholder="Enter your task" 
      onChange={(e)=>handleChange(e.currentTarget.value)}/>
      <Button 
      colorScheme="pink"
      onClick={()=>{
        if(text=="")
        {
          toast()
          return
        }
        dispatch(addTodos({title:text,status:false}));
        setState((prev)=>!prev)
        alert("Task Added Successfully")
     setText("")
     dispatch(getTodos());}
    }>Add</Button>
      </InputGroup>
    </div>
  )
}

export default TodoInput
