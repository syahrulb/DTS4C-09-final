import { Container, Typography, Grid, Card, Box, CardMedia } from '@mui/material'
import { getNewsNytimes } from 'store/news'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import cover from 'assets/images/cover.png'
const Portal = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getNewsNytimes())
  }, [])
  return (
    <>
      {/* news hot topics */}
      <Container maxWidth={false} sx={{ maxWidth: '95%' }}>
        <Grid container item sx={{ mt: 6 }}>
          <Typography
            variant='h4'
            sx={{
              mb: 1,
              fontWeight: 700
            }}
          >
            Hot Topics
          </Typography>
          <Grid container columnSpacing={2}>
            <Grid item xs={8}>
              <Card sx={{ position: 'relative' }}>
                <CardMedia component='img' height='400' image={cover} sx={{ position: 'relative' }} />
                <Box
                  sx={{
                    position: 'absolute',
                    display: 'flex',
                    flexDirection: 'column-reverse',
                    alignItems: 'flex-start',
                    alignContent: 'flex-end',
                    width: '100%',
                    height: '100%',
                    bottom: 0,
                    mb: 2,
                    ml: 2
                  }}
                >
                  <Typography
                    variant='body1'
                    sx={{
                      color: 'white',
                      WebkitLineClamp: 1,
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    Hot line: 007-005-3009
                  </Typography>
                  <Typography
                    variant='h6'
                    sx={{
                      color: 'white',
                      WebkitLineClamp: 1,
                      display: '-webkit-box',
                      overflow: 'hidden',
                      WebkitBoxOrient: 'vertical'
                    }}
                  >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus omnis repudiandae blanditiis
                    reiciendis est dolorem, dignissimos ex veritatis earum alias incidunt, obcaecati harum repellat
                    voluptate quia ab unde ipsum labore.
                  </Typography>
                </Box>
              </Card>
            </Grid>

            <Grid container item xs={4} rowSpacing={1}>
              <Typography
                variant='h5'
                sx={{
                  WebkitLineClamp: 13,
                  display: '-webkit-box',
                  overflow: 'hidden',
                  WebkitBoxOrient: 'vertical'
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam pariatur voluptatum blanditiis quam
                rem commodi consequuntur molestias at! Accusantium, recusandae quo harum accusamus odio ducimus
                possimus? Accusantium inventore porro iure?
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* bagian  */}
    </>
  )
}

export default Portal
