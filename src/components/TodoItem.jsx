import { Input,Button, InputGroup, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos, getTodos, updateTodos } from '../Redux/todo/action'
import { Text,Checkbox } from '@chakra-ui/react'

const TodoItem = ({...el}) => {
    const[title,setTitle] =useState(el.title)
   const dispatch=useDispatch()
   const[state,setState] =useState(false)
   useEffect(()=>{
   dispatch(getTodos())
   console.log("el",el)
   },[state])
   
  return (
    <div >
        <Box marginTop={"20px"}>
        <InputGroup >
      <Input  color={"white"} value={title} onChange={(e)=>setTitle(e.target.value)} onKeyDown={(e)=>{
        if(e.key==="Enter")
        {
            dispatch(updateTodos({...el,title}))
        }
      }}/>
      <Button colorScheme={"red"} onClick={()=>
        {dispatch(deleteTodos(el.id))
        setState((prev)=>!prev);}}>Delete</Button>
        </InputGroup>
        <Text color="white">{el.status? "Completed" :"Pending"}</Text>
        {/* <Checkbox type="checkbox" name={`status${el.id}`} colorScheme='green' isChecked={el.status? true : false} color="white" onChange={()=>dispatch(updateTodos(el))}>
    Checkbox
  </Checkbox> */}
  <Checkbox isInvalid color="white" onChange={()=>
    {dispatch(updateTodos(el));
    dispatch(getTodos());}} >Checkbox</Checkbox>
        </Box>
    </div>
  )
}

export default TodoItem
