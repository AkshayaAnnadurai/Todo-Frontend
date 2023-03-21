import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../Redux/todo/action'
import TodoItem from './TodoItem'
import { Box, Heading, Text } from '@chakra-ui/react'
const TodoList = () => {
    const[state,setState]=useState(false)
    const dispatch=useDispatch()
    const todos=useSelector((store)=>store.getReducer.data)
    
    useEffect(()=>{

   dispatch(getTodos())
   
    },[state])
   
  return (
    <div>
        <Box marginTop={"20px"}>
        {todos? todos?.map((el)=>
        (<TodoItem {...el} />))
    :
    <Heading color={"white"}>Oops ! No data available</Heading>
    }
</Box>
 
      </div>
      
  )
}

export default TodoList
