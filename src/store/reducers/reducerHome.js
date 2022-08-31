import initialState from "../initialState"

const reducerHome = (state = initialState, action) => {
  switch (action.type) {
    case "LIST_ITEMS":
      return { ...state, Items: [...state.Items, action.payload]}
    default:
            return state;
  }
}

export default reducerHome