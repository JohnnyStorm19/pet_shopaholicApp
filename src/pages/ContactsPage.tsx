import { Box, Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const ContactsPage = () => {
  return (
    <Container>
      <Typography variant="h3">Contact Us</Typography>
      <Box>
        <Typography variant="h5">
          We value your feedback and are here to assist you with any inquiries.
          Please feel free to reach out to us via the following channels:
        </Typography>
        <Typography variant="h6">Customer Support:</Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Link href="tel:1-800-123-4567" color="inherit" variant="subtitle1">
            Phone: 1-800-123-4567
          </Link>
          <Link
            href="mailto:support@yourshoppingapp.com"
            color="inherit"
            variant="subtitle1"
          >
            Email: support@yourshoppingapp.com
          </Link>
        </Box>
        <Box>
          <Typography variant="subtitle1">
            Headquarters: 934 Enchanted Hollows Avenue, City: Mysthollow, State: Glimmeridge, 0731
          </Typography>
        </Box>
        <Box>
          <Typography variant="subtitle1">
            Social Media: Follow us on Facebook, Twitter, and Instagram for
            updates and promotions.
          </Typography>
        </Box>
        <Box>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
          }}>
            <Typography variant="subtitle1">
              For any press or media inquiries, please contact:
            </Typography>
              <Link
                href="mailto:press@yourshoppingapp.com"
                color="inherit"
                variant="subtitle1"
              >
                Email: press@yourshoppingapp.com
              </Link>
              <Typography variant="subtitle1">
              We aim to respond to all queries and feedback within 24 hours.
            </Typography>
          </Box>
        </Box>
      </Box>
      <Typography>
        Your satisfaction is our priority, and we appreciate your support! Thank
        you for choosing Your Shopping App. Feel free to customize this content
        based on the specific needs and branding of your shopping web app!
      </Typography>
      <Link to={"/"} component={RouterLink}>
        Go to main
      </Link>
    </Container>
  );
};

export default ContactsPage;
