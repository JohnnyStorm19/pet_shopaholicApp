import { IProduct } from "./IProducts";

export interface IResponse {
    products: IProduct[];
    total: number;
    skip: number;
    limit: number;
}