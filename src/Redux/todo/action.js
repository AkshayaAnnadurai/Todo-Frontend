import { ADD_TODOS_FAILURE, ADD_TODOS_LOADING, ADD_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_LOADING, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODOS_FAILURE, UPDATE_TODOS_LOADING, UPDATE_TODOS_SUCCESS } from "./actiontype"
import axios from "axios"
//ADDTODOS function
export const addTodos=(todo)=>async(dispatch)=>{
    dispatch({type:ADD_TODOS_LOADING})
    try{
    let res=await axios.post(" http://localhost:3000/todo",todo)
    dispatch({type: ADD_TODOS_SUCCESS,payload :res.data})
    return res.data
    }
    catch(e)
    {
        dispatch({type:ADD_TODOS_FAILURE}) 
    }
}

//GETTODOS function
export const getTodos=()=>async(dispatch)=>{
   
    dispatch({type:GET_TODOS_LOADING})
    try{
    let res=await axios.get("http://localhost:3000/todo")
    dispatch({type: GET_TODOS_SUCCESS,payload :res.data})
    return res.data
    }
    catch(e)
    {
        dispatch({type:GET_TODOS_FAILURE}) 
    }
}

//DELETETODOS function

export const deleteTodos=(id)=>async(dispatch)=>{
    dispatch({type:DELETE_TODOS_LOADING})
    try{
    let res=await axios.delete(`http://localhost:3000/todo/${id}`)
    dispatch({type: DELETE_TODOS_SUCCESS,payload :res.data})
    return res.data
    }
    catch(e)
    {
        dispatch({type:DELETE_TODOS_FAILURE}) 
    }
}


//UPDATETODOS function


export const updateTodos=(todo)=>async(dispatch)=>{
    dispatch({type:UPDATE_TODOS_LOADING})
    try{
    let res=await axios.patch(`http://localhost:3000/todo/${todo.id}`,{...todo})
    dispatch({type: UPDATE_TODOS_SUCCESS,payload :res.data})
    return res.data
    }
    catch(e)
    {
        dispatch({type:UPDATE_TODOS_FAILURE}) 
    }
}


