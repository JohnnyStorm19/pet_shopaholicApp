import ProductCard from "./ProductCard";
import { Grid } from "@mui/material";
import { IProduct } from "../models/IProducts";

interface IProductsListProps {
    products: IProduct[];
    containerRef: React.RefObject<HTMLDivElement>;
}

const ProductsList = ({products, containerRef}: IProductsListProps) => {
  return (
    <Grid container spacing={2} ref={containerRef}>
      {products.length > 0 &&
        products.map((item) => {
          return <ProductCard key={item.id} productData={item} />;
        })}
    </Grid>
  );
};

export default ProductsList;
