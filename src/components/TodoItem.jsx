import { Input,Button, InputGroup, Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteTodos, getTodos, updateTodos } from '../Redux/todo/action'
import { Text,Checkbox } from '@chakra-ui/react'
import { EditIcon,DeleteIcon ,CheckCircleIcon} from '@chakra-ui/icons'
import Edit from './Edit'


const TodoItem = ({...el}) => {
    const[state,setState]=useState(false)
   const dispatch=useDispatch()

  return (
    <div >
        <Box marginTop={"20px"} >
          <Box display={"flex"} justifyContent={"space-between"}>
          <Text color="white" textDecoration={el.status&&'line-through'}>{el.title}</Text>
          <Box display={"flex"} justifyContent={"space-between"} w={60}>
          <Checkbox size={"lg"} isInvalid color="white" isChecked={el.status} onChange={async()=>
    { await dispatch(updateTodos({...el,status:!el.status}));
    await dispatch(getTodos());}} ></Checkbox>
    <Text color="white" >{el.status? "Completed" :"Pending"}</Text>
    {!el.status &&
          <EditIcon w={8} h={8} color="white" onClick={()=>setState((prev)=>!prev)}/>
    }
          
         
          <DeleteIcon w={8} h={8} color="red" onClick={async()=>
        { await dispatch(deleteTodos(el.id))
       await dispatch(getTodos())}}/>
         
    </Box>
   
          </Box>
          {state? <Edit setState={setState} title={el.title}  el={el} key={el.id}/> :""}
        
       
        </Box>
    </div>
  )
}

export default TodoItem


