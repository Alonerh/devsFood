import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    products: [],
    address: [],
    discount: 0,
    delivery: 0
};

export const cartReducer = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
        let products = [...state.products];
        const id = action.payload.data.id;

        const index = products.findIndex(item => item.id === id);

        if(index > -1) {
            //products[index].qt = action.payload.qt; // Estava dando erro pelo Immer do Toolkit
            //products[index] = {...state, qt: (action.payload.qt + products[index].qt)}
            products[index] = {...state.products[index], qt: (action.payload.qt + products[index].qt)} //Funcionou
        } else {
            products.push({
                ...action.payload.data,
                qt: action.payload.qt
            });
        }

        return {...state, products};
    },
    setChangeProducts: (state, action)=>{
        let products = [...state.products];
        let indexKey = action.payload.key;
  
        if(products[indexKey]) {
            switch(action.payload.type) {
                case '-':
                    //products[indexKey].qt--;
                    products[indexKey] = {...state.products[indexKey], qt: (products[indexKey].qt - 1)}
  
                    if(products[indexKey].qt <= 0) {
                        products = products.filter((item, index)=>index !== indexKey);
                    }
                break;
                case '+':
                    //products[indexKey].qt++;
                    products[indexKey] = {...state.products[indexKey], qt: (products[indexKey].qt + 1)}
                break;
                default:
                break;
            }
        }
          
        return {...state, products};
    },
  },
});

export const { setProducts, setChangeProducts } = cartReducer.actions;

export default cartReducer.reducer;
