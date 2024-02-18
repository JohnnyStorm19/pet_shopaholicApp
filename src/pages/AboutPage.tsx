import { Container, Link, Typography } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

const AboutPage = () => {
  return (
    <Container>
      <Typography>
        I am about page
      </Typography>
      <Link to={'/'} component={RouterLink}>Go to main</Link>
    </Container>
  )
}

export default AboutPage
