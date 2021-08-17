import { createAction, createReducer } from '@reduxjs/toolkit'

const INITIAL_STATE = [];

export const addPedido = createAction('ADD_PEDIDO');

export default createReducer(INITIAL_STATE, {
    [addPedido]: (state, action) =>  action.payload
});


