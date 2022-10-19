import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import Header from 'components/Header'
import Container from '@mui/material/Container'
const Index = ({ children }) => {
  return (
    <>
      <Header></Header>
      <Container maxWidth='false' sx={{ mx: 3, mt: 7 }}>
        {children}
      </Container>
      <Footer />
    </>
  )
}

Index.propTypes = {
  children: PropTypes.any
}
export default Index
