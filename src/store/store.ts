import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "../services/productsApi";
import categoryReducer from './categorySlice';
import cartReducer from './cartSlice';

export const store = configureStore({
    reducer: {
        category: categoryReducer,
        cart: cartReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch