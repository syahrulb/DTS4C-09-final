import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import SidePanel from 'components/SidePanel'
import Header from 'components/Header'
const Index = ({ children }) => {
  return (
    <>
      <SidePanel />
      <Header />
      {children}
      <Footer />
    </>
  )
}

Index.propTypes = {
  children: PropTypes.any
}
export default Index
