import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IResponse } from "../models/IResponse";
import { IProduct } from "../models/IProducts";
  
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query<IResponse, number>({
      query: (skipNumber) => `/products?limit=10&skip=${skipNumber}`,
    }),
    getCategories: builder.query<string[], void>({
      query: () => `/products/categories`,
    }),
    getProductsByCategory: builder.query<IResponse, string>({
      query: (category) => `/products/category/${category}` 
    }),
    getProductById: builder.query<IProduct, string>({
      query: (productId) => `/products/${productId}`
    })
  }),
});
export const { useGetAllProductsQuery, useGetCategoriesQuery, useGetProductsByCategoryQuery, useGetProductByIdQuery } = productsApi;
