import Drawer from '@mui/material/Drawer'
import { useSelector, useDispatch } from 'react-redux'
import { setSidePanel } from 'store/sidePanel'
import { Link } from 'react-router-dom'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import LoginIcon from '@mui/icons-material/Login'
import LogoutIcon from '@mui/icons-material/Logout'
import LockOpenIcon from '@mui/icons-material/LockOpen'

const Left = () => {
  const dispatch = useDispatch()
  const isOpen = useSelector(state => state.sidePanel.isOpen)
  const isLogin = useSelector(state => state.sidePanel.isLogin)
  const anchor = 'left'
  const toggleDrawer = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    dispatch(setSidePanel(open))
  }
  return (
    <>
      <Drawer anchor={anchor} open={isOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {isLogin || (
              <>
                <ListItem component={Link} to="/login" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LoginIcon />
                    </ListItemIcon>
                    <ListItemText primary='Login' />
                  </ListItemButton>
                </ListItem>
                <ListItem component={Link} to="/register" disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <LockOpenIcon />
                    </ListItemIcon>
                    <ListItemText primary='Register' />
                  </ListItemButton>
                </ListItem>
              </>
            )}
            {isLogin && (
              <ListItem component={Link} to="/" disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <LogoutIcon />
                  </ListItemIcon>
                  <ListItemText primary='logout' />
                </ListItemButton>
              </ListItem>
            )}
          </List>
        </Box>
      </Drawer>
    </>
  )
}

export default Left
