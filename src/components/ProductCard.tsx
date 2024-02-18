import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Paper
} from "@mui/material";
import { IProduct } from "../models/IProducts";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

interface IProductCardProps {
  productData: IProduct;
}

const ProductCard = ({ productData }: IProductCardProps) => {
  const cartStore = useAppSelector((state) => state.cart.cart);
  const [isHovered, setIsHovered] = useState(false);
  const [inCart, setInCart] = useState(
    cartStore.find((item) => item.product.id === productData.id) || false
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleCardHover = () => {
    setIsHovered(!isHovered);
  };
  const handleAddToCart = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!inCart) {
      dispatch(addToCart({ product: productData }));
    } else {
      dispatch(removeFromCart({ product: productData }));
    }
    setInCart(!inCart);
  };

  const handleCardClick = () => {
    navigate(`/products/${productData.id}`);
  };

  return (
    <Grid item xs={12} md={4} onClick={handleCardClick}>
      <Paper elevation={3}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            backgroundColor: "primary.main",
            cursor: "pointer",
            ":hover": {
              bgcolor: "rgba(0, 0, 0, 0.05)",
            },
          }}
          variant="outlined"
          onMouseEnter={handleCardHover}
          onMouseLeave={handleCardHover}
        >
          <CardHeader title={productData.title} subheader={productData.brand} titleTypographyProps={{variant: 'h5'}} />
          <CardContent
            sx={{
              height: "250px",
              overflow: "hidden!important",
              borderTopLeftRadius: "8px",
              borderTopRightRadius: "8px",
            }}
          >
            <CardMedia
              component="img"
              image={productData.thumbnail}
              alt={productData.title}
              loading="lazy"
              sx={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </CardContent>
          <CardActions>
            <Button
              onClick={handleAddToCart}
              variant={inCart ? "text" : "contained"}
              color={inCart ? "error" : "primary"}
            >
              {inCart ? "Remove from cart" : "Add to cart"}
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </Grid>
  );
};

export default ProductCard;
