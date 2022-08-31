let initialState = {
  mail: [],
};

export const ADD_DATA_FORM = 'ADD_DATA_FORM';

const reducerContact = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DATA_FORM:
      return { ...state, mail: [...state.mail, action.payload] }
    default:
      return state
  }
}


export const addDataForm = (data) => ({ type: ADD_DATA_FORM, payload: data });

export default reducerContact;
