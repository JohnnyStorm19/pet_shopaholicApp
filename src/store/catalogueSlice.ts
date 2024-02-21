import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../models/IProducts";
import { getFinalPrice } from "../services/utils/getFinalPrice";

type TSortingDirection = "none" | "from higher" | "from lower";
type TSortingType = "discount" | "price";

interface IInitialState {
  products: IProduct[];
  filteredProducts: IProduct[];
}

const initialState: IInitialState = {
  products: [],
  filteredProducts: [],
};

interface IPayloadAction {
  products: IProduct[];
}
interface IPayloadActionRemoveFilteredProducts {
  categories: string[];
}
interface IPayloadActionSortingFilteredProducts {
  sortingDirection: TSortingDirection;
  sortingType: TSortingType;
}

export const catalogueSlice = createSlice({
  name: "catalogue",
  initialState,
  reducers: {
    addToProducts: (state, action: PayloadAction<IPayloadAction>) => {
      state.products.push(...action.payload.products);
    },
    addToFilteredProducts: (state, action: PayloadAction<IPayloadAction>) => {
      state.filteredProducts.push(...action.payload.products);
    },
    removeFromFilteredProducts: (
      state,
      action: PayloadAction<IPayloadActionRemoveFilteredProducts>
    ) => {
      state.filteredProducts = state.filteredProducts.filter((p) =>
        action.payload.categories.includes(p.category)
      );
    },
    clearFilteredProducts: (state) => {
      state.filteredProducts = [];
    },
    sortFilteredProductsBy: (
      state,
      action: PayloadAction<IPayloadActionSortingFilteredProducts>
    ) => {
      if (
        action.payload.sortingDirection === "from higher" &&
        action.payload.sortingType === "discount"
      ) {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          if (a.discountPercentage > b.discountPercentage) {
            return -1;
          } else if (a.discountPercentage < b.discountPercentage) {
            return 1;
          }
          return 0;
        });
      } else if (
        action.payload.sortingDirection === "from lower" &&
        action.payload.sortingType === "discount"
      ) {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          if (b.discountPercentage > a.discountPercentage) {
            return -1;
          } else if (b.discountPercentage < a.discountPercentage) {
            return 1;
          }
          return 0;
        });
      }

      if (
        action.payload.sortingDirection === "from lower" &&
        action.payload.sortingType === "price"
      ) {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          if (
            getFinalPrice(b.price, b.discountPercentage) >
            getFinalPrice(a.price, a.discountPercentage)
          ) {
            return -1;
          } else if (
            getFinalPrice(b.price, b.discountPercentage) <
            getFinalPrice(a.price, a.discountPercentage)
          ) {
            return 1;
          }
          return 0;
        });
      } else if (
        action.payload.sortingDirection === "from higher" &&
        action.payload.sortingType === "price"
      ) {
        state.filteredProducts = state.filteredProducts.sort((a, b) => {
          if (
            getFinalPrice(a.price, a.discountPercentage) >
            getFinalPrice(b.price, b.discountPercentage)
          ) {
            return -1;
          } else if (
            getFinalPrice(a.price, a.discountPercentage) <
            getFinalPrice(b.price, b.discountPercentage)
          ) {
            return 1;
          }
          return 0;
        });
      }
    },
  },
});

export const {
  addToProducts,
  addToFilteredProducts,
  removeFromFilteredProducts,
  sortFilteredProductsBy,
  clearFilteredProducts,
} = catalogueSlice.actions;
export default catalogueSlice.reducer;
