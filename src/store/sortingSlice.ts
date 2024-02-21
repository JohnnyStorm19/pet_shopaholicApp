import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ISortingInitialState {
    sortByPriceValue: "from higher" | "from lower" | "none",
    sortByDiscountValue: "from higher" | "from lower" | "none"
}

interface IPayloadAction {
    value: "from higher" | "from lower" | "none";
}

const initialState: ISortingInitialState = {
    sortByPriceValue: 'none',
    sortByDiscountValue: 'none'
}

export const sortingSlice = createSlice({
    name: "sorting",
    initialState,
    reducers: {
        changeSortByPriceValue: (state, action: PayloadAction<IPayloadAction>) => {
            state.sortByPriceValue = action.payload.value
        },
        changeSortByDiscountValue: (state, action: PayloadAction<IPayloadAction>) => {
            state.sortByDiscountValue = action.payload.value
        }
    }

})

export const {changeSortByPriceValue, changeSortByDiscountValue} = sortingSlice.actions;
export default sortingSlice.reducer;