import { Container, Typography, Grid, Card, Box, CardMedia, CardContent, Skeleton } from '@mui/material'
import { getNewsMediastack } from 'store/news'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { perbedaanWaktu } from 'utils/moment'
// import cover from 'assets/images/cover.png'
const Portal = () => {
  const dispatch = useDispatch()
  const news = useSelector(state => state.news.news)
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
            <Grid item xs={8}>
              <Card sx={{ position: 'relative' }}>
                {isLoading ? (
                  <>
                    <Skeleton variant='rectangular' width={'100%'} height='400px' />
                  </>
                ) : (
                  <CardMedia component='img' height='400' image={higlightNews.image} sx={{ position: 'relative' }} />
                )}
                {isLoading ? (
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
                    <Skeleton width='60%' />
                    <Skeleton />
                  </Box>
                ) : (
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
                      {higlightNews.category}
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
                      {higlightNews.title}
                    </Typography>
                  </Box>
                )}
              </Card>
            </Grid>
            <Grid container item xs={4} rowSpacing={1}>
              {isLoading ? (
                <>
                  <Skeleton width='100%' />
                  <Skeleton width='100%' />
                  <Skeleton />
                </>
              ) : (
                <Typography
                  variant='h5'
                  sx={{
                    WebkitLineClamp: 13,
                    display: '-webkit-box',
                    overflow: 'hidden',
                    WebkitBoxOrient: 'vertical'
                  }}
                >
                  {higlightNews.description}
                </Typography>
              )}
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
          Lastest News
        </Typography>
        <Grid Grid container spacing={2}>
          {(isLoading ? Array.from(new Array(10)) : news).map((item, index) => {
            return (
              <>
                <Grid key={item ? item.published_at : index} item xs={3}>
                  <Card elevation={0}>
                    {item ? (
                      <CardMedia component='img' height='140' image={item.image} alt='' />
                    ) : (
                      <Skeleton variant='rectangular' height='140' />
                    )}

                    <CardContent>
                      {item ? (
                        <>
                          <Typography gutterBottom variant='h5' component='div'>
                            {item.title}
                          </Typography>
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              flexWrap: 'wrap'
                            }}
                          >
                            <Typography variant='body1'>{perbedaanWaktu(item.published_at)}</Typography>
                            <Typography variant='body1'>{item.category}</Typography>
                          </Box>
                        </>
                      ) : (
                        <>
                          <Skeleton width='100%' />
                          <Box
                            sx={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              flexWrap: 'wrap'
                            }}
                          >
                            <Skeleton />
                            <Skeleton />
                          </Box>
                        </>
                      )}
                    </CardContent>
                  </Card>
                </Grid>
              </>
            )
          })}
        </Grid>
      </Container>
    </>
  )
}

export default Portal
