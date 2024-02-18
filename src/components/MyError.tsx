import { Alert, AlertTitle, Box } from '@mui/material'

const MyError = () => {
  return (
    <Box>
      <Alert
        severity='error'
      >
        <AlertTitle>Error</AlertTitle>
        Something went wrong {':('}
      </Alert>
    </Box>
  )
}

export default MyError
