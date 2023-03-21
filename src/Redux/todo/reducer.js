import { ADD_TODOS_FAILURE, ADD_TODOS_LOADING, ADD_TODOS_SUCCESS, DELETE_TODOS_FAILURE, DELETE_TODOS_LOADING, DELETE_TODOS_SUCCESS, GET_TODOS_FAILURE, GET_TODOS_LOADING, GET_TODOS_SUCCESS, UPDATE_TODOS_FAILURE, UPDATE_TODOS_LOADING, UPDATE_TODOS_SUCCESS } from "./actiontype"

const initialState={
    loading:false,
    error:false,
    data:[]
}
//ADD TODOS REDUCER
export const addReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type)
    {
   case ADD_TODOS_LOADING:
    return{
       ...state,
       loading:true
    }
    case ADD_TODOS_SUCCESS:
        return{
            ...state,
            loading:false,
            error:false,
        }
        case ADD_TODOS_FAILURE:
            return{
             ...state,
             loading:false,
             error:true
            }
            default:
                {
                    return state
                }
            
}
}


//GET TODOS REDUCER
export const getReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type)
    {
   case GET_TODOS_LOADING:
    return{
       ...state,
       loading:true
    }
    case GET_TODOS_SUCCESS:
        return{
            ...state,
            loading:false,
            error:false,
            data:payload
        }
        case GET_TODOS_FAILURE:
            return{
             ...state,
             loading:false,
             error:true
            }
            default:
                {
                    return state
                }
            
}
}

//DELETETODOS REDUCER

export const deleteReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type)
    {
   case DELETE_TODOS_LOADING:
    return{
       ...state,
       loading:true
    }
    case DELETE_TODOS_SUCCESS:
        return{
            ...state,
            loading:false,
            error:false,
        }
        case DELETE_TODOS_FAILURE:
            return{
             ...state,
             loading:false,
             error:true
            }
            default:
                {
                    return state
                }
            
}
}


//UPDATETODOS REDUCER

export const updateReducer=(state=initialState,action)=>{
    const {type,payload}=action
    switch(type)
    {
   case UPDATE_TODOS_LOADING:
    return{
       ...state,
       loading:true
    }
    case UPDATE_TODOS_SUCCESS:
        return{
            ...state,
            loading:false,
            error:false,
        }
        case UPDATE_TODOS_FAILURE:
            return{
             ...state,
             loading:false,
             error:true
            }
            default:
                {
                    return state
                }
            
}
}
