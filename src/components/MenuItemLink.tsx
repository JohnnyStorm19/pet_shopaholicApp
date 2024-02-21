import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";

interface IMenuItemLinkProps {
    menuText: string;
    textColor: string;
}

const MenuItemLink = ({ menuText, textColor }: IMenuItemLinkProps) => {
  return (
    <Link
      key={menuText}
      component={RouterLink}
      to={`/${menuText.toLowerCase()}`}
      sx={{
        color: textColor,
        display: "block",
        textTransform: "uppercase",
        padding: "5px 8px",
        "&:focus": {
          textDecoration: "underline",
        },
      }}
      underline="hover"
    >
      {menuText}
    </Link>
  );
};

export default MenuItemLink;
