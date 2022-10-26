import { Container, Typography, Grid, Card, CardMedia, Box, Skeleton } from '@mui/material'
// import { getNewsMediastack } from 'store/news'
import { useSelector } from 'react-redux'
import { perbedaanWaktu } from 'utils/moment'
// import cover from 'assets/images/cover.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Detail = () => {
  const navigate = useNavigate()
  // const dispatch = useDispatch()
  // const news = useSelector(state => state.news.news)
  const pickNews = useSelector(state => state.news.pickNews)
  const isLoading = useSelector(state => state.news.isLoading)
  const [loading, setLoading] = useState(false)
  const [article, setArticle] = useState('')
  const getHml = async () => {
    setLoading(true)
    axios(pickNews.url)
      .then(({ data }) => {
        setArticle(data)
        setLoading(false)
      })
      .catch(eror => {
        console.log(eror)
      })
  }
  useEffect(() => {
    Object.keys(pickNews).length === 0 && navigate('/')
    getHml()
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
                  <CardMedia component='img' height='400' image={pickNews.image} sx={{ position: 'relative' }} />
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
          {pickNews.title}
        </Typography>
        {pickNews ? (
          <>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                maxWidth: '12%'
              }}
            >
              <Typography variant='body2'>{perbedaanWaktu(pickNews.published_at)}</Typography>
              <Typography variant='body2'>{pickNews.category}</Typography>
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
          {pickNews.description}
        </Typography>
      </Container>
      <Container maxWidth={false} sx={{ maxWidth: '95%' }}>
        {loading && (
          <>
            <div dangerouslySetInnerHTML={{ __html: article }}></div>
          </>
        )}
      </Container>
    </>
  )
}

export default Detail
