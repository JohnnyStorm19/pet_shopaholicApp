export const getFinalPrice = (price: number, discount: number): number => {
    return Number((price - (price / 100 * discount)).toFixed(2));
}