import { Box, Input, InputGroup ,Button} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getTodos, updateTodos } from '../Redux/todo/action'

const Edit = ({title,el,setState}) => {
    const [text,setText]=useState(title)
    const dispatch=useDispatch()
  return (
    <div>
        <Box>
       <InputGroup  gap={10} my={5}>

      <Input  color={"white"} value={text.trim()} onChange={(e)=>setText(e.target.value)} />
    <Button onClick={async()=>{
        await dispatch(updateTodos({...el,title:text}));
    await dispatch(getTodos());
    setState(false)}} color="blue">Update</Button>
        </InputGroup>
        </Box>
    </div>
  )
}

export default Edit
