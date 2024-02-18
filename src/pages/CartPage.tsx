import { Box, Typography } from "@mui/material";
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
            gap: 2,
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
            }}
          >
            {cartProducts.map((item) => {
              return <CartItem key={item.product.id} product={item.product} />;
            })}
          </Box>
          <Box>
            <Typography
              sx={{
                position: "sticky",
                top: "15px",
              }}
            >
              Total: {getTotalSum(cartProducts)}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
