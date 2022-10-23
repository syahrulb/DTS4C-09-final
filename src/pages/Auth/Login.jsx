import { useReducer } from 'react'
import { CardContent, TextField, CardActions, Button, Box, Container } from '@mui/material'
import { signingIn } from 'utils/firebase/sign'
import { useDispatch } from 'react-redux'
import { declareUuid } from 'store/authentication'
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
  const [getForm, setForm] = useReducer(fungsiFormReducer, {
    email: '',
    password: ''
  })
  const onChangerValue = event => setForm({ type: event.target.id.replace('id-', ''), payload: event.target.value })
  const onSubmitForm = async event => {
    event.preventDefault()
    const { email, password } = getForm
    try {
      const response = await signingIn(email, password)
      dispatch(declareUuid(response.user))
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Container maxWidth='xl' sx={{ mx: 3, mt: 7, justifyContent: 'center', alignItems: 'center' }}>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <form onSubmit={onSubmitForm}>
          <CardContent sx={{ minWidth: 275 }}>
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
          <CardActions>
            <Button size='small' type='submit' color='success'>
              Simpan
            </Button>
          </CardActions>
        </form>
      </Box>
    </Container>
  )
}

export default Login
