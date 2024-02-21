import { Typography, TypographyTypeMap } from "@mui/material";

interface OldPriceProps {
  oldPrice: number;
  variant: TypographyTypeMap["props"]["variant"];
}

const OldPrice = ({ oldPrice, variant }: OldPriceProps) => {
  return (
    <Typography
      variant={variant}
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
