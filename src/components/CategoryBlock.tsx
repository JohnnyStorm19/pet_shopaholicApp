import { Box, Typography } from "@mui/material";
import { useGetProductsByCategoryQuery } from "../services/productsApi";
import MyError from "./MyError";
import MyLoader from "./MyLoader";
import ProductsList from "./ProductsList";
import { TCategory } from "../models/TCategory";

interface ICategoryBlockProps {
  category: TCategory;
}

const CategoryBlock = ({ category }: ICategoryBlockProps) => {
  const { data, isLoading, isError } = useGetProductsByCategoryQuery(category);
  return (
    <Box>
      {isError && <MyError />}
      {isLoading && <MyLoader position="center" />}
      <Box sx={{
        backgroundColor: 'info.light',
        borderRadius: ".5rem",
        p: 1
      }}>
        <Typography variant="h6" color="primary.main">{category.toUpperCase()}</Typography>
      </Box>

      {data && data.products && (
        <ProductsList products={data.products} componentFor="CategoryBlock" />
      )}
    </Box>
  );
};

export default CategoryBlock;
