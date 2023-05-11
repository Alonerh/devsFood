import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: 'Teste',
  token: ''
};

export const userReducer = createSlice({
  name: 'user',
  initialState: initialState,
  reducers: {
    setName: (state, action) => {
        return {...state, name: action.payload.name}
    },
    setToken: (state, action)=>{
      return {...state, token: action.payload.token}
    }
  },
});

export const { setName, setToken } = userReducer.actions;

export default userReducer.reducer;

/* const initialState = {
    name: 'Teste'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case 'SET_NAME':
            return {...state, name: action.payload.name};
        break;
    }

    return state;
} */