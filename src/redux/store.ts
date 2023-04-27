//  Store is a mini temporaroy in-the-middle database

import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/rootSlice";

export const store = configureStore({
    reducer,
    devTools: true,
})

export default store;
