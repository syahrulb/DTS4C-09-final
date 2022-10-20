import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import SidePanel from 'components/SidePanel'
import Header from 'components/Header'
import Container from '@mui/material/Container'
const Index = ({ children }) => {
  return (
    <>
      <SidePanel />
      <Header />
      <Container maxWidth='xl' sx={{ mx: 3, mt: 7 }} fixed>
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
