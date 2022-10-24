import Router from './router'

import { listener } from 'utils/firebase/listener'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { declareUuid } from 'store/authentication'
function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    listener(val => {
      dispatch(declareUuid(val))
    })
  }, [])
  return (
    <>
      <Router />
    </>
  )
}

export default App
