import { createAction, createReducer } from '@reduxjs/toolkit'

export class CarrinhoItem {
    constructor(obj) {
        obj && Object.assign(this, obj, { quantity: 1 });
    }
}

const INITIAL_STATE = {
    items: [],
};

export const addItem = createAction('ADD_ITEM');
export const removeItem = createAction('REMOVE_ITEM');

export default createReducer(INITIAL_STATE, {
    [addItem.type]: (state, action) => ({
        ...state,
        items: [...state.items, new CarrinhoItem(action.payload)]
    }),
    [removeItem.type]: (state, action) => state.filter(item => item.id != action.payload)
});