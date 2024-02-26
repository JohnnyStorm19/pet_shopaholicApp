import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
} from "@mui/material";
import { IProduct } from "../models/IProducts";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { addToCart, removeFromCart } from "../store/cartSlice";
import { useNavigate } from "react-router-dom";
import OldPrice from "./OldPrice";
import FinalPrice from "./FinalPrice";

interface IProductCardProps {
  productData: IProduct;
  componentFor: "CataloguePage" | "CategoryBlock";
}


const ProductCard = ({ productData, componentFor }: IProductCardProps) => {
  const cartStore = useAppSelector((state) => state.cart.cart);
  const [inCart, setInCart] = useState(
    cartStore.find((item) => item.product.id === productData.id) || false
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

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
    <>
      {componentFor === "CataloguePage" && (
        <Grid item xs={12} sm={6} md={4} onClick={handleCardClick}>
          <Card
            sx={{
              height: "400px",
            }}
            variant="outlined"
          >
            <Box display={"flex"} justifyContent={"space-between"}>
              <CardHeader
                title={productData.title}
                subheader={productData.brand}
                titleTypographyProps={{ variant: "h5" }}
                subheaderTypographyProps={{ variant: "subtitle1" }}
                sx={{
                  cursor: "pointer",
                }}
              />
              <CardContent>
                <OldPrice oldPrice={productData.price} variant="h6" />
                <FinalPrice
                  price={productData.price}
                  discount={productData.discountPercentage}
                  variant="h6"
                />
              </CardContent>
            </Box>
            <CardContent
              sx={{
                position: "relative",
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
              <Chip
                label={`-${productData.discountPercentage}% off`}
                color="error"
                size={"medium"}
                sx={{
                  position: "absolute",
                  top: "1rem",
                  right: "1rem",
                }}
              />
            </CardContent>
            <CardActions>
              <Button
                onClick={handleAddToCart}
                variant={inCart ? "text" : "contained"}
                color={inCart ? "error" : "primary"}
                sx={{
                  width: "100%",
                }}
              >
                {inCart ? "Remove from cart" : "Add to cart"}
              </Button>
            </CardActions>
          </Card>
        </Grid>
      )}
      {componentFor === "CategoryBlock" && (
        <Card
          onClick={handleCardClick}
          sx={{
            flexShrink: "0",
            width: {
              xs: "250px",
              sm: "auto",
            },
          }}
          variant="outlined"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <CardHeader
              title={productData.title}
              subheader={productData.brand}
              titleTypographyProps={{ variant: "h6" }}
              subheaderTypographyProps={{ variant: "caption" }}
              sx={{
                cursor: "pointer",
                p: 1,
              }}
            />
            <CardContent
              sx={{
                p: 1,
                ":last-child": {
                  p: 1,
                },
              }}
            >
              <OldPrice oldPrice={productData.price} variant={"body2"} />
              <FinalPrice
                price={productData.price}
                discount={productData.discountPercentage}
                variant="h6"
              />
            </CardContent>
          </Box>
          <CardContent
            sx={{
              position: "relative",
              height: {
                xs: "150px",
                md: "250px",
              },
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
            <Chip
              label={`-${productData.discountPercentage}% off`}
              color="error"
              size={"small"}
              sx={{
                position: "absolute",
                top: "1rem",
                right: "1rem",
              }}
            />
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ProductCard;
