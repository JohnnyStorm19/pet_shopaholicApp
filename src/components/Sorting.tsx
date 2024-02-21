import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  changeSortByDiscountValue,
  changeSortByPriceValue,
} from "../store/sortingSlice";

type TSortingByPriceValue = "none" | "from higher" | "from lower";

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

const priceOptions = ["from higher", "from lower", "none"];
const discountOptions = ["from higher", "from lower", "none"];

const Sorting = () => {
  const sortingDiscountValue = useAppSelector(state => state.sorting.sortByDiscountValue);
  const sortingPriceValue = useAppSelector(state => state.sorting.sortByPriceValue);
  const categoriesInStore = useAppSelector(state => state.category.categories);

  const [sortingByPriceValue, setSortingByPriceValue] =
    useState<TSortingByPriceValue>(sortingPriceValue);
  const [sortingByDiscountValue, setSortingByDiscountValue] =
    useState<TSortingByPriceValue>(sortingDiscountValue);
  const categories = useAppSelector((state) => state.category.categories);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      changeSortByPriceValue({
        value: sortingByPriceValue,
      })
    );
  }, [dispatch, sortingByPriceValue])

  useEffect(() => {
    dispatch(
      changeSortByDiscountValue({
        value: sortingByDiscountValue,
      })
    );
  }, [dispatch, sortingByDiscountValue])

  useEffect(() => {
    if (categoriesInStore.length === 0) {
      dispatch(
        changeSortByDiscountValue({
          value: "none",
        })
      );
      dispatch(
        changeSortByPriceValue({
          value: "none",
        })
      );
    }
  }, [categoriesInStore, dispatch])

  const handlePriceChange = (
    event: SelectChangeEvent<TSortingByPriceValue>
  ) => {
    setSortingByPriceValue(event.target.value as TSortingByPriceValue);
  };

  const handleDiscountChange = (
    event: SelectChangeEvent<TSortingByPriceValue>
  ) => {
    setSortingByDiscountValue(event.target.value as TSortingByPriceValue);
  };

  return (
    <div>
      {categories.length > 0 && (
        <>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label" color="info">
              Sort by price
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sortingPriceValue}
              onChange={handlePriceChange}
              label="Sort by price"
              disabled={sortingDiscountValue != "none"}
            >
              {priceOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="demo-simple-select-standard-label" color="info">
              Sort by discount
            </InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              value={sortingDiscountValue}
              onChange={handleDiscountChange}
              label="Sort by discount"
              disabled={sortingPriceValue != "none"}
            >
              {discountOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </>
      )}
    </div>
  );
};

export default Sorting;
