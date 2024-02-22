import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../services/productsApi";
import { Autocomplete, Chip, TextField } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { changeCategory } from "../store/categorySlice";

const Categories = () => {
  const { data: allCategories } = useGetCategoriesQuery();
  const categoriesInStore = useAppSelector(
    (state) => state.category.categories
  );
  const [selected, setSelected] = useState<string[]>(categoriesInStore || []);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(changeCategory({ categories: selected })); 
  }, [dispatch, selected]);

  const handleChanges = (
    event: React.SyntheticEvent<Element, Event>,
    value: string[],
    reason: string
  ) => {
    if (reason === "selectOption") {
      setSelected((prev) => [
        ...prev,
        event.currentTarget.textContent as string,
      ]);
    }
    if (reason === "removeOption") {
      setSelected(value);
    }
  };

  return (
    <Autocomplete
      multiple
      id="tags-filled"
      options={allCategories || []}
      value={categoriesInStore || null}
      freeSolo
      onChange={handleChanges}
      renderTags={(value: readonly string[], getTagProps) =>
        value.map((option: string, index: number) => (
          <Chip variant="outlined" label={option} {...getTagProps({ index })} />
        ))
      }
      renderInput={(params) => (
        <TextField
          {...params}
          variant="filled"
          label="Categories"
          placeholder="Add category..."
          color="info"
        />
      )}
    />
  );
};

export default Categories;
