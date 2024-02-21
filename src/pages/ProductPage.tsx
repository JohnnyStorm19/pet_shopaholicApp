import { Box, Button, Chip, Divider, Typography } from "@mui/material";
import { useGetProductByIdQuery } from "../services/productsApi";
import { useNavigate, useParams } from "react-router-dom";
import MyLoader from "../components/MyLoader";
import MyError from "../components/MyError";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { useEffect, useState } from "react";
import { addToCart, removeFromCart } from "../store/cartSlice";
import ImagesSwiper from "../components/ImagesSwiper";
import OldPrice from "../components/OldPrice";
import FinalPrice from "../components/FinalPrice";

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
    <Box sx={{
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row'
      },
      paddingBlock: 2,
      mb: 2,
      gap: {
        xs: 2,
        md: 13,
      },
    }}>
      {isLoading && <MyLoader position="center" />}
      {isError && <MyError />}

      <Box sx={{
        maxWidth: {
          xs: '100%',
          md: '40%'
        }
      }}>
        {product && <ImagesSwiper images={product.images} />}
      </Box>

      <Box display={"flex"} flexDirection={"column"} rowGap={"2rem"}>
        <Typography variant="h2">{product?.title}</Typography>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          gap: {
            xs: 1,
          },
          flexWrap: {
            xs: 'wrap',
          }
        }}>
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Typography sx={{ color: "info.light" }}>Rating: </Typography>
            <Typography>{product?.rating}</Typography>
          </Box>
          <Divider
            variant="middle"
            orientation="vertical"
            sx={{ borderColor: "rgba(25, 118, 210, .7)" }}
          />
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Typography sx={{ color: "info.light" }}>Brand: </Typography>
            <Typography>{product?.brand}</Typography>
          </Box>
          <Divider
            variant="middle"
            orientation="vertical"
            sx={{ borderColor: "rgba(25, 118, 210, .7)" }}
          />
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Typography sx={{ color: "info.light" }}>Category: </Typography>
            <Typography>{product?.category}</Typography>
          </Box>
        </Box>
        <Typography variant="body2">{product?.description}</Typography>
        <Box py={0.5}>
          <Button
            onClick={handleAddToCart}
            variant={inCart ? "text" : "contained"}
            color={inCart ? "error" : "primary"}
            sx={{ mr: 1 }}
          >
            {inCart ? "Remove from cart" : "Add to cart"}
          </Button>
          <Button variant="outlined" onClick={handleBuyNow}>
            Buy now
          </Button>
        </Box>
          {product && (
            <Box sx={{
              display: "flex",
              alignItems: "center",
              gap: {
                xs: 1,
                md: 2
              }
            }}>
              <OldPrice oldPrice={product?.price} />
              <FinalPrice
                price={product.price}
                discount={product.discountPercentage}
                variant="h4"
              />
              <Chip
                label={`-${product.discountPercentage}% off`}
                color="error"
                size={"small"}
                sx={{
                  alignSelf: "flex-start"
                }}
              />
            </Box>
          )}

      </Box>
    </Box>
  );
};

export default ProductPage;
