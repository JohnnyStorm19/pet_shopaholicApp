import {
  Box,
  Container,
  Divider,
  Link,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      position="relative"
      color="primary"
      sx={{
        bottom: 0,
        mt: "auto",
        boxShadow:
          "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)",
        py: 2,
      }}
    >
      <Container maxWidth="sm">
        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 2,
          mb: 2
        }}>
          <Link href="#" color="inherit" display="block" underline="none" sx={{ textAlign: 'center', flex: '1'}}>
            About
          </Link>
          <Divider
            flexItem
            variant="fullWidth"
            orientation="vertical"
            sx={{ borderColor: "info.light" }}
          />
          <Link href="#" color="inherit" display="block" underline="none" sx={{ textAlign: 'center', flex: '1'}}>
            Privacy Policy
          </Link>
          <Divider
            flexItem
            variant="fullWidth"
            orientation="vertical"
            sx={{ borderColor: "info.light" }}
          />
          <Link href="#" color="inherit" display="block" underline="none" sx={{ textAlign: 'center', flex: '1'}}> 
            Terms of Service
          </Link>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {"Copyright © "}
          <Link color="inherit" href="/">
            Shopaholic
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Container>
    </Box>
  );
};

// const Footer = () => {
//   return (
//     <Box
//       sx={{
//         color: "text.secondary",
//         py: 2,
//         mt: 2,
//         borderTop: "1px solid",
//         borderColor: "divider",
//         boxShadow: "0px -2px 4px -1px rgba(0,0,0,0.2), 0px -4px 5px 0px rgba(0,0,0,0.14), 0px -1px 10px 0px rgba(0,0,0,0.12)"
//       }}
//     >
//       <Container maxWidth={false}>
//           <Box sx={{
//             display: 'flex',

//           }}>
//             <Link href="#" color="inherit" display="block">
//               About Us
//             </Link>
//             <Link href="#" color="inherit" display="block">
//               Careers
//             </Link>
//             <Link href="#" color="inherit" display="block">
//               Privacy Policy
//             </Link>
//             <Link href="#" color="inherit" display="block">
//               Terms of Service
//             </Link>
//           </Box>
//         <Typography
//           variant="body2"
//           color="text.secondary"
//           align="center"
//           sx={{ pt: 4 }}
//         >
//           © 2024 Company Co. All rights reserved.
//         </Typography>
//       </Container>
//     </Box>
//   );
// };

export default Footer;
