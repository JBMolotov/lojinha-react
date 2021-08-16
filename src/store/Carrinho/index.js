import { configureStore  } from "@reduxjs/toolkit";

import carrinhoReducer from './Reducer'

export default configureStore({
    reducer: {
        carrinho: carrinhoReducer
    }
});