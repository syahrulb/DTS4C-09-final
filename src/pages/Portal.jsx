import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { getNewsNytimes } from 'store/news'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const Portal = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewsNytimes())
  }, [])
  return (
    <>
      {/* news hot topics */}
      <Container sx={{ mx: 3, mt: 7 }}>
        <Box>
          <Typography
            variant='h4'
            sx={{
              mb: 1,
              fontWeight: 700
            }}
          >
            Hot Topics
          </Typography>
        </Box>
      </Container>
    </>
  )
}

export default Portal
