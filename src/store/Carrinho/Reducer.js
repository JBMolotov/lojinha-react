import { createAction, createReducer } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

export class CarrinhoItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { quantity: 1 });
    }
}

const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addItem]: (state, action) => [...state, verifyExistItem(state, action)],
    [removeItem.type]: (state, action) => state.filter((item) => item.id !== action.payload)
    // [addItem.type]: (state, action) => ({
    //     ...state,
    //     items: verifyExistItem(state, action),
    // }),
    // [removeItem.type]: (state, action) => ({ 
    //     ...state,
    //     items: verifyExistItemRemove(state, action),
    // }),
});

// [removeItem.type]: (state, action) => state.items.filter((item) => item.id !== action.payload)

function verifyExistItem(state, action) {
    // console.log(action.payload)
    const newItem = new CarrinhoItem(action.payload);

    const existItem = state.some(item => item.id === newItem.id)

    if (existItem) {
        state.map(item => {
            // if (item.id === newItem.id)
                return { quantity: item.quantity + 1 }
            // item.quantity = item.quantity + 1
            // return null;       
            // item.id === newItem.id ? item.quantity = item.quantity + 1 : item
            // return null
        })
        // return null;
    }

    return newItem
}

function verifyExistItemRemove(state, action) {
    
    // console.log(state)


    // const existItem = state.items.filter((item) => item.id !== action.payload)
    const existItem = state.items.filter((item) => item.quantity >= 0)
    console.log (existItem)

    // if (existItem) {
    //     return state.items.map(item => {
    //         return {...item, quantity: item.quantity - 1}
    //     })
    // } else {
    //     console.log('favela venceu')
    // }
    

    // return [...state.items]
}

export const calculateTotalSelector = state => {
    return state.carrinho.items ? state.carrinho.items.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
};