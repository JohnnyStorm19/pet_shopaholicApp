import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Container } from "@mui/material";

const Layout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "primary.main",
      }}
    >
      <Header />
      <Container maxWidth="xl">
        <main>
          <Outlet />
        </main>
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
