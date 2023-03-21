
import { legacy_createStore,combineReducers,compose,applyMiddleware} from "redux";
import { addReducer,getReducer,deleteReducer } from "./todo/reducer";
import { authReducer ,signupReducer,getuserReducer} from "./auth/reducer";
import thunk from "redux-thunk"
const rootReducer=combineReducers({
   addReducer,getReducer,deleteReducer,authReducer,signupReducer,getuserReducer
})

const createComposer=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||compose

export const store=legacy_createStore(rootReducer,createComposer(applyMiddleware(thunk)))