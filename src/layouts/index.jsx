import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import SidePanel from 'components/SidePanel'
import Header from 'components/Header'
import Snackbars from 'components/Snackbars'
import Modals from 'components/Modals'

const Index = ({ children }) => {
  return (
    <>
      <SidePanel />
      <Header />
      {children}
      <Footer />
      <Snackbars />
      <Modals />
    </>
  )
}

Index.propTypes = {
  children: PropTypes.any
}
export default Index
