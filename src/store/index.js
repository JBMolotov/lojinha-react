import { configureStore  } from "@reduxjs/toolkit";

import carrinhoReducer from './Carrinho/Reducer'
import pedidosReducer from './Pedidos/Reducer'

export default configureStore({
    reducer: {
        carrinho: carrinhoReducer,
        pedidos: pedidosReducer
    }
});