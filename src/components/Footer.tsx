import { Box, Container, Link, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      position="relative"
      color="primary"
      sx={{ bottom: 0, border: "1px solid black", mt: 'auto' }}
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="https://your-website.com/">
            Your Website
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
