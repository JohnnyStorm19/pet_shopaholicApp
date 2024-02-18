import { ICartProduct } from "../../models/ICartProduct";

export const getTotalSum = (cartStore: ICartProduct[]) => {
    return cartStore.reduce((acc, item) => acc + (item.product.price * item.quantity), 0);
}