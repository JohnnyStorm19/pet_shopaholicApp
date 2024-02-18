import { Container, Link, Typography } from "@mui/material"
import { Link as RouterLink } from "react-router-dom"

const ContactsPage = () => {
  return (
    <Container>
      <Typography>
        I am contacts page
      </Typography>
      <Link to={'/'} component={RouterLink}>Go to main</Link>
    </Container>
  )
}

export default ContactsPage
