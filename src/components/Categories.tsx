import { useEffect, useState } from "react";
import { useGetCategoriesQuery } from "../services/productsApi";
import { Autocomplete, TextField } from "@mui/material";
import { useAppDispatch } from "../store/hooks";
import { changeCategory } from "../store/categorySlice";

interface ICategoriesProps {
  show: boolean;
}

const Categories = ({show}: ICategoriesProps) => {
  const { data } = useGetCategoriesQuery();
  const [allCategories, setAllCategories] = useState<string[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data && data.length > 0) {
      setAllCategories(prev => [...prev, ...data]);
    }
  }, [data])

  useEffect(() => {
    dispatch(changeCategory({categories: selected}));
  }, [dispatch, selected])

  const handleChanges = (event: React.SyntheticEvent<Element, Event>, value: string[], reason: string) => {
    console.log('event: ', event, 'value: ', value, 'reason: ', reason); 
    console.log(event.currentTarget.textContent);
    if (reason === 'selectOption') {
      setSelected(prev => [...prev, event.currentTarget.textContent as string])
    } 
    if (reason === 'removeOption') {
      console.log('removeOption', value)
      setSelected(value);
    }
  }

  return (
    <Autocomplete
        multiple
        id="size-small-standard-multi"
        size="small"
        sx={{
          display: `${show ? 'block' : 'none'}`,
        }}
        onChange={handleChanges}
        options={allCategories}
        getOptionLabel={(option) => option}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Categories"
            placeholder="Add new category..."
          />
        )}
      />
  );
};

export default Categories;
