import { useReducer } from 'react'
import { CardContent, TextField, CardActions, Button, Box, Container } from '@mui/material'
import { signingIn } from 'utils/firebase/sign'
import { useDispatch, useSelector } from 'react-redux'
import { declareUuid } from 'store/authentication'
import logo from 'assets/images/daily-bugle-logo.png'
import { handleClick } from 'store/snackbars'
import { useNavigate } from 'react-router-dom'

const initialForm = () => {
  return {
    email: '',
    password: ''
  }
}
const fungsiFormReducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    case 'reset':
      return { ...initialForm }
    default:
      return state
  }
}
const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const isOpen = useSelector(state => state.snackbars.isOpen)
  const [getForm, setForm] = useReducer(fungsiFormReducer, {
    email: '',
    password: ''
  })
  const onChangerValue = event => setForm({ type: event.target.id.replace('id-', ''), payload: event.target.value })
  const onSubmitForm = async event => {
    event.preventDefault()
    const { email, password } = getForm
    await signingIn(email, password)
      .then(response => {
        dispatch(declareUuid(response.uid))
        console.log(response)
        dispatch(
          handleClick({
            message: `Selamat datang ${response.user.email}`,
            severity: 'info'
          })
        )
        navigate('/')
      })
      .catch(errors => {
        dispatch(
          handleClick({
            message: errors.message,
            severity: 'error'
          })
        )
      })
  }
  return (
    <Container maxWidth='xl' sx={{ mt: 7, justifyContent: 'center', alignItems: 'center' }}>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <form onSubmit={onSubmitForm}>
          <CardContent sx={{ minWidth: 275 }}>
            <center>
              <img src={logo} width='80%' alt='baggian foto' />
            </center>
            <TextField
              fullWidth
              id='id-email'
              placeholder='xxx@xxx.xx'
              type='email'
              value={getForm.email}
              onChange={onChangerValue}
              variant='outlined'
              sx={{ my: 1 }}
            />
            <TextField
              fullWidth
              id='id-password'
              label='Password*'
              type='password'
              value={getForm.password}
              onChange={onChangerValue}
              variant='outlined'
              sx={{ my: 1 }}
            />
          </CardContent>
          <CardActions sx={{ justifyContent: 'right', alignItems: 'right', mr: 1 }}>
            <Button size='small' type='submit' color='success' disabled={isOpen}>
              Simpan
            </Button>
          </CardActions>
        </form>
      </Box>
    </Container>
  )
}

export default Login
