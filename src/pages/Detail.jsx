import { Container, Typography, Grid, Card, CardMedia, Box, Skeleton } from '@mui/material'
import { getNewsMediastack } from 'store/news'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { perbedaanWaktu } from 'utils/moment'
// import cover from 'assets/images/cover.png'
const Detail = () => {
  const dispatch = useDispatch()
  // const news = useSelector(state => state.news.news)
  const higlightNews = useSelector(state => state.news.higlightNews)
  const isLoading = useSelector(state => state.news.isLoading)
  useEffect(() => {
    dispatch(getNewsMediastack())
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
            <Grid item xs={15}>
              <Card sx={{ position: 'relative' }}>
                {isLoading ? (
                  <>
                    <Skeleton variant='rectangular' width={'100%'} height='400px' />
                  </>
                ) : (
                  <CardMedia component='img' height='400' image={higlightNews.image} sx={{ position: 'relative' }} />
                )}
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Container>
      {/* bagian  last news*/}
      <Container maxWidth={false} sx={{ maxWidth: '95%' }}>
        <Typography
          variant='h4'
          sx={{
            my: 2,
            fontWeight: 700
          }}
        >
          {higlightNews.title}
        </Typography>
        {higlightNews ? (
            <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                maxWidth: '12%'
              }}
            >
              <Typography variant='body2'>{perbedaanWaktu(higlightNews.published_at)}</Typography>
              <Typography variant='body2'>{higlightNews.category}</Typography>
            </Box>
            </>
          ) : (
            <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                maxWidth: '12%'
              }}
            >
              <Skeleton />
              <Skeleton />
            </Box>            
            </>
          )}
        <Typography
                  variant='body1'
                  sx={{
                    WebkitLineClamp: 13,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {higlightNews.description}
                </Typography>
      </Container>
    </>
  )
}

export default Detail
