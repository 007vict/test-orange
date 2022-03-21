import initialState from "../initialState"

const reducerHome = (state = initialState, action) => {
  console.log('reducerHome', action);
  switch (action.type) {
    case "LIST_ITEMS":
      return { ...state, Home: [...state.Home, action.payload]}
    default:
      console.log('default')
      return state;
  }
}

export default reducerHome