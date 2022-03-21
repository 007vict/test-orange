import { createStore, combineReducers } from "redux"
import reducerHome from "./reducers/reducerHome"

const rootReducer = combineReducers({
    Home: reducerHome,
    
})

 const store = createStore(rootReducer)

 export default store