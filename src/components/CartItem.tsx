import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { IProduct } from "../models/IProducts";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import {
  decrementCartProduct,
  incrementCartProduct,
  removeFromCart,
} from "../store/cartSlice";
import { useNavigate } from "react-router-dom";

interface CartItemProps {
  product: IProduct;
}

const CartItem = ({ product }: CartItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItemQuantity =
    useAppSelector((state) =>
      state.cart.cart.find((item) => item.product.id === product.id)
    )?.quantity || false;

  const decrementItem = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(decrementCartProduct({ product: product }));
  };
  const incrementItem = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(incrementCartProduct({ product: product }));
  };
  const removeItem = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(removeFromCart({ product }));
  };

  const onCartItemClick = () => {
    navigate(`/products/${product.id}`);
  };

  return (
    <Card
      sx={{
        display: "flex",
        gap: "1rem",
        alignItems: "center",
      }}
      onClick={onCartItemClick}
    >
      <CardMedia
        component="img"
        image={product.thumbnail}
        alt={product.title}
        sx={{
          width: "100px",
          height: "100px",
        }}
      />
      <CardHeader
        title={product.title}
        subheader={product.brand}
        sx={{
          minWidth: "330px",
        }}
      />
      <CardContent sx={{}}>
        <Typography>Unit price: ${product.price}</Typography>
        <Typography>
          Total price: $
          {product.price * (cartItemQuantity ? cartItemQuantity : 1)}
        </Typography>
      </CardContent>
      <CardActions
        disableSpacing
        sx={{
          width: "fit-content",
          flexGrow: 1,
          p: 0,
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <IconButton size="small" onClick={decrementItem}>
            <RemoveCircleOutlineIcon color="error" />
          </IconButton>
          <Typography>{cartItemQuantity && cartItemQuantity}</Typography>
          <IconButton size="small" onClick={incrementItem}>
            <AddCircleOutlineIcon color="error" />
          </IconButton>
        </Box>
        {/* <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        </Box> */}
        <Button variant="text" color="error" onClick={removeItem}>
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
