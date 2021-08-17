import { createAction, createReducer, current } from '@reduxjs/toolkit'
import { act } from 'react-dom/test-utils';

const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addItem]: (state, action) => HandleAddItem(state, action),
    [removeItem]: (state, action) => { HandleRemoveItem(state, action)
    }
});


function HandleAddItem(state, action) {
    var newItem = '';
    if (action.payload.quantity == undefined)
        newItem = Object.assign(action.payload, { quantity: 1 });
    else    
        newItem = action.payload;

    const existItem = state.some((item) => item.id === newItem.id);

    if (existItem) {
      return state.map((item) => {
        return item.id === newItem.id
          ? { ...item, quantity: item.quantity + 1 }
          : item;
      });
    }

    return [...state, newItem];
}

function HandleRemoveItem(state, action) {
    const loadItem = action.payload;

    const existItem = state.findIndex((item) => item.id === loadItem.id);


    if (existItem !== -1) {
        if ( state[existItem].quantity > 1) {
            state[existItem] = { ...state[existItem], quantity: state[existItem].quantity - 1 }
        } else {
            state = state.filter(item => item.id !== state[existItem].id) 
        }
    }

    return state

}


export const calculateTotalSelector = state => {
    return state && state.carrinho ? state.carrinho.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
};