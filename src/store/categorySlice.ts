import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type TLastAction = '' | 'added' | 'removed';

interface IInitialCategoryState {
    categories: string[];
    lastAction: TLastAction
}
interface IPayloadCategoryAction {
    categories: string[];
}
interface IPayloadLastAction {
    lastAction: TLastAction;
}

const initialState: IInitialCategoryState = {
    categories: [],
    lastAction: ''
}

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {
        changeCategory: (state, action: PayloadAction<IPayloadCategoryAction>) => {
            if (state.categories.length < action.payload.categories.length) {
                state.lastAction = 'added'
            } else if (state.categories.length > action.payload.categories.length) {
                state.lastAction = 'removed'
            }
            state.categories = action.payload.categories;
        },
        changeLastAction: (state, action: PayloadAction<IPayloadLastAction>) => {
            state.lastAction = action.payload.lastAction
        }
    }
})

export const { changeCategory, changeLastAction } = categorySlice.actions;
export default categorySlice.reducer;