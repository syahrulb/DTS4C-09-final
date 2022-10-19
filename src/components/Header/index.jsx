import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { grey } from '@mui/material/colors'
import SearchIcon from '@mui/icons-material/Search'
const navItems = ['News', 'Portal']
const Header = () => {
  const [active, setActive] = useState('News')
  const btnClick = (event, key) => {
    event.preventDefault()
    setActive(key)
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
                    onClick={event => btnClick(event, item)}
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
            <IconButton sx={{ ml: 1 }}>
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header
