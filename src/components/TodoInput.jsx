import React from 'react'
import { InputGroup,Input,Button,useToast} from '@chakra-ui/react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodos, getTodos } from '../Redux/todo/action';
import { useEffect } from 'react';

const TodoInput= () => {
  const [text, setText] =useState(" ")
 
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
      onClick={async()=>{
        if(text.trim()=="")
        {
          toast()
          return
        }
        await dispatch(addTodos({title:text,status:false}));
       
     setText("")
     await dispatch(getTodos());}
    }>Add</Button>
      </InputGroup>
    </div>
  )
}

export default TodoInput
