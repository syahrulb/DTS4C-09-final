import * as React from 'react'
import PropTypes from 'prop-types'
import Footer from 'components/Footer'
import SidePanel from 'components/SidePanel'
import Header from 'components/Header'
import { useSelector, useDispatch } from 'react-redux'
import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import { handleClose } from 'store/snackbars'

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />
})
const Index = ({ children }) => {
  const isOpen = useSelector(state => state.snackbars.isOpen)
  const autoHideDuration = useSelector(state => state.snackbars.autoHideDuration)
  const anchorOrigin = useSelector(state => state.snackbars.anchorOrigin)
  const message = useSelector(state => state.snackbars.message)
  const severity = useSelector(state => state.snackbars.severity)
  const dispatch = useDispatch()
  const onClose = event => {
    event?.preventDefault()
    dispatch(handleClose())
  }
  return (
    <>
      <SidePanel />
      <Header />
      {children}
      <Footer />
      <Snackbar open={isOpen} autoHideDuration={autoHideDuration} onClose={onClose} anchorOrigin={anchorOrigin}>
        <Alert onClose={onClose} severity={severity} sx={{ width: '100%' }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  )
}

Index.propTypes = {
  children: PropTypes.any
}
export default Index
