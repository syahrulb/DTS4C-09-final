import { useReducer, /*useContext*/ } from 'react'
// import { useNavigate } from "react-router-dom";
import { CardContent, TextField, CardActions, Button, Box, Container } from '@mui/material'
// import { AuthContext } from "../../components/Provider/AuthProvider";
import { signingUp } from "../../utils/firebase/signup";
// import { signingIn } from "../../utils/firebase/signin";

const initialForm = {
  email: '',
  password: '',
  repassword: ''
}
const fungsiFormReducer = (state, action) => {
  switch (action.type) {
    case 'email':
      return { ...state, email: action.payload }
    case 'password':
      return { ...state, password: action.payload }
    case 'repassword':
      return { ...state, repassword: action.payload }
    case 'reset':
      return { ...initialForm }
    default:
      return state
  }
}
const Register = () => {
  // const { setUser } = useContext(AuthContext);
  // const navigate = useNavigate();
  const [getForm, setForm] = useReducer(fungsiFormReducer, initialForm)
  const onChangerValue = event => setForm({ type: event.target.id.replace('id-', ''), payload: event.target.value })
  const onSubmitForm = event => {
    event.preventDefault()
    setForm({ type: 'reset' })
  }
  const signUp = async (event) => {
    try {
      event.preventDefault()
      console.log(getForm.email,"ini get form")
      if(getForm.password === getForm.repassword){
        const response = await signingUp(getForm.email, getForm.password)
        console.log(response)
        if (!response.message) {
          alert('sukses register')
          // setUser(response.accessToken)
          //signingIn
          // const signedIn = await signingIn(getForm.email, getForm.password);
          // if (!signedIn.message) {
          //   navigate("/");
          // }
        } else {
          console.log("error");
        }
      } else {
        throw new Error(`Password isn't match`)
      }
    } catch(e) {
      alert('error: '+ e)
    }
  }
  return (
    <Container maxWidth='xl' sx={{ mx: 3, mt: 7, justifyContent: 'center', alignItems: 'center' }}>
      <Box display='flex' justifyContent='center' alignItems='center'>
        <form action={onSubmitForm}>
          <CardContent sx={{ minWidth: 275 }}>
            <TextField
              fullWidth
              id='id-email'
              label='Email'
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
            <TextField
              fullWidth
              id='id-repassword'
              label='Re-Password*'
              type='password'
              value={getForm.repassword}
              onChange={onChangerValue}
              variant='outlined'
              sx={{ my: 1 }}
            />
          </CardContent>
          <CardActions>
            <Button size='small' type='submit' color='success' onClick={signUp}>
              Register
            </Button>
          </CardActions>
        </form>
      </Box>
    </Container>
  )
}

export default Register
