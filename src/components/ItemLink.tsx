import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

interface IItemLinkProps {
    itemTitle: string;
    endPoint: string;
    textColor: string;
}

const ItemLink = ({itemTitle, endPoint, textColor}: IItemLinkProps) => {
  return (
    <Link
      key={itemTitle}
      component={RouterLink}
      to={`/${endPoint}`}
      sx={{
        color: textColor,
        display: "block",
        width: 'fit-content',
        pb: '.5rem',
        mb: '.5rem',
        textTransform: "uppercase",
        "&:focus": {
          textDecoration: "underline",
          backgroundColor: "tomato",
        },
      }}
      underline="hover"
    >
      {itemTitle}
    </Link>
  );
};

export default ItemLink;
