import * as React from "react";
import { Box } from "@mui/material";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { IconButton } from "@mui/material";
import { Menu } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { MenuItem } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@mui/material";
import MenuItemLink from "./MenuItemLink";
import SearchForm from "./SearchForm";
import Cart from "./Cart";

const pages = ["Catalogue", "Contacts", "About"];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        paddingBlock: "2rem",
        paddingInline: {
          xs: ".5rem",
          sm: "1rem"
        },
        mb: 2,
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          gap: ".5rem",
          justifyContent: { xs: "center", md: "left" },
          flexWrap: 'wrap'
        }}
      >
        <Box sx={{ display: { sx: "none", md: "flex" }, alignItems: "center" }}>
          <AdbIcon
            sx={{
              display: { xs: "none", md: "flex" },
              mr: 1,
              color: "info.main",
            }}
          />
          <Link
            variant="h5"
            component={RouterLink}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "info.main",
              textDecoration: "none",
            }}
          >
            Shopaholic
          </Link>
        </Box>

        <Box sx={{ display: { xs: "flex", md: "none" } }}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleOpenNavMenu}
            color="inherit"
          >
            <MenuIcon />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: "block", md: "none" }
            }}
          >
            {pages.map((page) => (
              <MenuItem key={page} onClick={handleCloseNavMenu} sx={{fontWeight: "bold"}}>
                <MenuItemLink
                  menuText={page}
                  textColor="primary.contrastText"
                />
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box sx={{ display: "flex" }}>
          <AdbIcon
            sx={{
              display: { xs: "flex", md: "none" },
              mr: 1,
              color: "info.main",
            }}
          />
          <Link
            variant="h5"
            component={RouterLink}
            to={"/"}
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Shopaholic
          </Link>
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            flexGrow: 1,
            gap: "1rem",
            fontWeight: "bold",
          }}
        >
          {pages.map((page, id) => (
            <MenuItemLink
              key={id}
              menuText={page}
              textColor="primary.contrastText"
            />
          ))}
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
          }}
        >
          <SearchForm />
        </Box>
        <Cart />
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            mx: "auto",
          }}
        >
          <SearchForm />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;
