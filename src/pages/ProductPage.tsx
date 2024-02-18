import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import { useGetProductByIdQuery } from "../services/productsApi";
import { useNavigate, useParams } from "react-router-dom";
import MyLoader from "../components/MyLoader";
import MyError from "../components/MyError";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../store/cartSlice";
import ImagesSwiper from "../components/ImagesSwiper";
import { getFinalPrice } from "../services/utils/getFinalPrice";
import OldPrice from "../components/OldPrice";

const ProductPage = () => {
  const cartStore = useAppSelector((state) => state.cart.cart);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { id: currentId } = useParams();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProductByIdQuery(currentId as string, {
    skip: currentId === undefined,
  });
  const [inCart, setInCart] = useState(false);

  useEffect(() => {
    if (product) {
      const findedInCart =
        cartStore.find((item) => item.product.id === product?.id) || false;
      setInCart(findedInCart ? true : false);
    }
  }, [product, cartStore]);

  const handleAddToCart = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!inCart && product) {
      dispatch(addToCart({ product }));
    } else if (inCart && product) {
      dispatch(removeFromCart({ product }));
    }
    setInCart(!inCart);
  };
  const handleBuyNow = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (!inCart && product) {
      dispatch(addToCart({ product }));
      navigate(`/cart`);
    } else if (inCart && product) {
      navigate(`/cart`);
    }
  };

  return (
    <Box display="flex" paddingBlock={2} gap={2}>
      {isLoading && <MyLoader position="center" />}
      {isError && <MyError />}

      <Box maxWidth={"40%"}>
        {product && <ImagesSwiper images={product.images} />}
      </Box>

      <Box display={"flex"} flexDirection={"column"} rowGap={"1rem"}>
        <Typography variant="h2">{product?.title}</Typography>
        <Box>
          <Box>
            <Typography sx={{ color: "text.secondary" }}>Rating: </Typography>
            <Typography>{product?.rating}</Typography>
          </Box>
          <Divider
            variant="middle"
            sx={{ borderColor: "rgba(25, 118, 210, .7)" }}
          />
          <Box>
            <Typography sx={{ color: "text.secondary" }}>Brand: </Typography>
            <Typography>{product?.brand}</Typography>
          </Box>
          <Divider
            variant="middle"
            sx={{ borderColor: "rgba(25, 118, 210, .7)" }}
          />
          <Box>
            <Typography sx={{ color: "text.secondary" }}>Category: </Typography>
            <Typography>{product?.category}</Typography>
          </Box>
          <Divider
            variant="middle"
            sx={{ borderColor: "rgba(25, 118, 210, .7)" }}
          />
        </Box>
        <Typography variant="body2">{product?.description}</Typography>
        <Box py={0.5}>
          <Button onClick={handleAddToCart} variant="outlined" sx={{ mr: 1 }}>
            {inCart ? "Remove from cart" : "Add to cart"}
          </Button>
          <Button variant="contained" onClick={handleBuyNow}>
            Buy now
          </Button>
        </Box>
        <Box display="flex" gap={3} alignItems={"center"}>
          {product && (
            <Box display={"flex"} alignItems={'center'} gap={2}>
              <OldPrice oldPrice={product?.price} />
              <Typography variant="h4">
                ${getFinalPrice(product.price, product.discountPercentage)}
              </Typography>
              <Chip
                label={`-${product.discountPercentage}% off`}
                color="error"
                size={"small"}
              />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductPage;
