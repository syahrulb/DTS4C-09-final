import { Box, Typography } from '@mui/material'
const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#F8F8F8', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Typography sx={{ px: 2 }} variant='h6' component='h2'>
        Copyright 2022 News Portal Syahrul Bastomy & Steven Stiawan
      </Typography>
    </Box>
  )
}

export default Footer
