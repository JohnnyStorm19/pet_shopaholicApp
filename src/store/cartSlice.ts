import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProducts";
import { ICartProduct } from "../models/ICartProduct";


interface IInitialCartState {
    cart: ICartProduct[],
} 

interface IPayloadAction {
    product: IProduct;
}

const initialState: IInitialCartState = {
    cart: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action:PayloadAction<IPayloadAction>) => {
            state.cart.push({product: action.payload.product, quantity: 1});

        },
        removeFromCart: (state, action:PayloadAction<IPayloadAction>) => {
            const findedItem = state.cart.find(item => item.product.id === action.payload.product.id);
            if (findedItem) {
                state.cart.splice(state.cart.indexOf(findedItem), 1);
            }
        },
        incrementCartProduct: (state, action:PayloadAction<IPayloadAction>) => {
            const findedItem = state.cart.find(item => item.product.id === action.payload.product.id);
            if (findedItem) {
                findedItem.quantity += 1;
            }
        },
        decrementCartProduct: (state, action:PayloadAction<IPayloadAction>) => {
            const findedItem = state.cart.find(item => item.product.id === action.payload.product.id);
            if (findedItem) {
                findedItem.quantity > 1 ? findedItem.quantity -= 1 : findedItem.quantity;
            }
        }
    }
})

export const {addToCart, removeFromCart, incrementCartProduct, decrementCartProduct} = cartSlice.actions;
export default cartSlice.reducer;