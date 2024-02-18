import { Typography } from "@mui/material";

interface OldPriceProps {
  oldPrice: number;
}

const OldPrice = ({ oldPrice }: OldPriceProps) => {
  return (
    <Typography
      variant="h6"
      sx={{
        textDecoration: "line-through",
        opacity: ".5",
      }}
    >
      ${oldPrice}
    </Typography>
  );
};

export default OldPrice;
