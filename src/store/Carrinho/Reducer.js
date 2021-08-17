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
    [addItem]: (state, action) => HandleAddItem(state, action),
    [removeItem]: (state, action) => state.filter((item) => item.id !== action.payload)
});

// [removeItem.type]: (state, action) => state.items.filter((item) => item.id !== action.payload)

function HandleAddItem(state, action) {
    const newItem = new CarrinhoItem(action.payload);

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
    const newItem = new CarrinhoItem(action.payload);

    const existItem = state.some((item) => item.id === newItem.id);


    if (existItem) {
      return state.map((item) => {
        return item.id === newItem.id
          ? { ...item, quantity: item.quantity - 1 }
          : item;
      });
    }

    return [...state, newItem];
}


export const calculateTotalSelector = state => {
    return state.carrinho ? state.carrinho.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
};