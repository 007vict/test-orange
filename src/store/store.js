import { createStore, combineReducers } from "redux"
import reducerHome from "./reducers/reducerHome"
import reducerContact from './reducers/reducerContact';

const rootReducer = combineReducers({
    Home: reducerHome,
    Form: reducerContact,
})

 const store = createStore(rootReducer)

 export default store