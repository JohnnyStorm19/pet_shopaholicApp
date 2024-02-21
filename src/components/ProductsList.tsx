import ProductCard from "./ProductCard";
import { Box, Grid } from "@mui/material";
import { IProduct } from "../models/IProducts";

interface IProductsListProps {
  products: IProduct[];
  containerRef?: React.RefObject<HTMLDivElement>;
  componentFor: "CataloguePage" | "CategoryBlock";
}

const ProductsList = ({
  products,
  containerRef,
  componentFor,
}: IProductsListProps) => {
  return (
    <>
      {componentFor === "CataloguePage" && (
        <Grid container spacing={2} ref={containerRef}>
          {products.length > 0 &&
            products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  productData={item}
                  componentFor={componentFor}
                />
              );
            })}
        </Grid>
      )}
      {componentFor === "CategoryBlock" && (
        <Box
          sx={{
            display: "flex",
            overflowY: "hidden",
            gap: 2,
            mb: 2,
            p: 1,
          }}
        >
          {products.length > 0 &&
            products.map((item) => {
              return (
                <ProductCard
                  key={item.id}
                  productData={item}
                  componentFor={componentFor}
                />
              );
            })}
        </Box>
      )}
    </>
  );
};

export default ProductsList;
