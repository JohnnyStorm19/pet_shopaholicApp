import { Typography, TypographyTypeMap } from "@mui/material";
import { getFinalPrice } from "../services/utils/getFinalPrice";

interface finalPriceProps {
  price: number;
  discount: number;
  variant: TypographyTypeMap["props"]["variant"];
}

const FinalPrice = ({ price, discount, variant }: finalPriceProps) => {
  return (
    <Typography variant={variant}>${getFinalPrice(price, discount)}</Typography>
  );
};

export default FinalPrice;
