import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { grey } from '@mui/material/colors'
import SearchIcon from '@mui/icons-material/Search'
import Tooltip from '@mui/material/Tooltip'
import { useDispatch } from 'react-redux'
import { setSidePanel } from 'store/sidePanel'

const navItems = ['News', 'Portal']
const Header = () => {
  const dispatch = useDispatch()
  const [active, setActive] = useState('News')
  const btnMenuClick = (event, key) => {
    event.preventDefault()
    setActive(key)
  }
  const btnAuthClick = open => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    dispatch(setSidePanel(open))
  }
  return (
    <>
      <AppBar position='sticky' color='inherit' sx={{ boxShadow: 0 }}>
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
            {navItems.map(item => {
              if (item == active) {
                return (
                  <Button
                    key={item}
                    sx={{
                      color: grey[50],
                      backgroundColor: grey[900],
                      p: 1,
                      fontWeight: 'bold',
                      mx: 1,
                      '&:hover': {
                        color: 'inherit'
                      }
                    }}
                  >
                    {item}
                  </Button>
                )
              } else {
                return (
                  <Button
                    onClick={event => btnMenuClick(event, item)}
                    key={item}
                    sx={{ color: 'inherit', fontWeight: 'bold', mx: 1 }}
                  >
                    {item}
                  </Button>
                )
              }
            })}
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <IconButton size='large' aria-label='show 4 new mails' color='inherit'>
              <SearchIcon />
            </IconButton>
            <Tooltip title='Authentication'>
              <IconButton onClick={btnAuthClick(true)} sx={{ ml: 1 }}>
                <MenuIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
