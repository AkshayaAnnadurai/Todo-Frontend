import React from 'react'
import {Heading, Stack } from "@chakra-ui/react";
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
const Todos = () => {
  return (
    <div>
      <Stack textAlign="center" gap="10px">
			<Heading  color={"hotpink"}>Todos</Heading>
<TodoInput />
<TodoList />
			
		</Stack>
    </div>
  )
}

export default Todos
