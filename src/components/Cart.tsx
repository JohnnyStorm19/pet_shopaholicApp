import {
  Avatar,
  Badge,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  Grow,
  IconButton,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useRef, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { Link as RouterLink } from "react-router-dom";
import { getFinalPrice } from "../services/utils/getFinalPrice";

const Cart = () => {
  const cartStore = useAppSelector((state) => state.cart.cart);
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }
    setOpen(false);
  };
  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  return (
    <Box
      sx={{
        width: 'fit-content',
      }}
    >
      <IconButton
        size="large"
        color="inherit"
        aria-label="shopping cart icon"
        ref={anchorRef}
        onClick={handleToggle}
      >
        <Badge badgeContent={cartStore.length} color="error">
          <ShoppingCartIcon fontSize="large" />
        </Badge>
      </IconButton>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        placement="bottom-start"
        transition
        sx={{
          zIndex: '10'
        }}
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom-start" ? "left top" : "left bottom",
            }}
          >
            <Paper
              sx={{
                p:1
              }}
            >
              {!cartStore.length && (
                <Typography
                  variant="subtitle2"
                  sx={{
                    textAlign: 'center'
                  }}

                >
                  No items added
                </Typography>
              )
              }
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="composition-menu"
                  aria-labelledby="composition-button"
                  onKeyDown={handleListKeyDown}
                >
                  {cartStore.map((item) => (
                    <Box key={item.product.id}>
                      <RouterLink to={`products/${item.product.id}`}
                        style={{
                          textDecoration: 'none',
                          color: 'black'
                        }}
                        key={item.product.id}
                      >
                        <MenuItem key={item.product.id} onClick={handleClose} sx={{
                          display: 'flex',
                          gap: 4,
                          justifyContent: 'space-between',
                        }}>
                          <Avatar 
                            src={item.product.thumbnail}
                            variant="square"
                            sx={{
                              width: 70,
                              height: 70
                            }}
                          />
                          <ListItemText>
                            {item.product.title}
                          </ListItemText>
                          <ListItemText>
                            <Typography
                              align="right"
                            >
                              ${getFinalPrice(item.product.price, item.product.discountPercentage)}
                            </Typography>
                          </ListItemText>
                        </MenuItem>
                      </RouterLink>
                      <Divider /> 
                    </Box>
                  ))}
                </MenuList>
              </ClickAwayListener>
              <RouterLink to={"/cart"}>
                <Button variant="outlined">Go to cart</Button>
              </RouterLink>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  );
};

export default Cart;
