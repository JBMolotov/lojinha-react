import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = [];

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');
export const removeAll = createAction('REMOVE_ALL');

export default createReducer(INITIAL_STATE, {
    [addItem]: (state, action) => handleAddItem(state, action),
    [removeItem]: (state, action) => handleRemoveItem(state, action),
    [removeAll]: () => []
});

function novoItem (action) {
    if (action.payload.quantity === undefined)
        return Object.assign(action.payload, { quantity: 1 });
    else    
        return action.payload;
}

function handleAddItem(state, action) {
    const newItem = novoItem(action);
    console.log(newItem);

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

function handleRemoveItem(state, action) {
    const loadItem = action.payload;
    const existItem = state.findIndex((item) => item.id === loadItem.id);
    const stateItem = state[existItem];

    if (existItem !== -1) {
        if ( stateItem.quantity > 1) {
            state[existItem] = { ...stateItem, quantity: stateItem.quantity - 1 }
        } else {
            state = state.filter(item => item.id !== stateItem.id) 
        }
    }

    return state;
}



export const calculateTotalSelector = state => {
    return state && state.carrinho ? state.carrinho.reduce((acc, item) => acc + item.price * item.quantity, 0) : 0;
};