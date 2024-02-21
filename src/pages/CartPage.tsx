import { Box, Button, Typography } from "@mui/material";
import { useAppSelector } from "../store/hooks";
import CartItem from "../components/CartItem";
import { getTotalSum } from "../services/utils/getTotalSum";

const CartPage = () => {
  const cartProducts = useAppSelector((state) => state.cart.cart);
  return (
    <Box>
      {!cartProducts.length ? (
        <Typography>No items added</Typography>
      ) : (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            {cartProducts.map((item) => {
              return <CartItem key={item.product.id} product={item.product} />;
            })}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: ".5rem",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                position: "sticky",
                top: "15px",
                textAlign: "right",
              }}
            >
              Total: ${getTotalSum(cartProducts)}
            </Typography>
            <Button variant="contained" size="large" sx={{
              marginLeft: "auto"
            }}>Checkout</Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
