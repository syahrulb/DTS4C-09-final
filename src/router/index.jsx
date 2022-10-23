// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'layouts'
import { Portal, Login, Register } from 'pages'
import { listener } from 'utils/firebase/listener'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { declareUuid } from 'store/authentication'

function Router() {
  const dispatch = useDispatch()
  useEffect(() => {
    listener(val => {
      dispatch(declareUuid(val))
    })
  }, [])
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Portal />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/register' exact element={<Register />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Router
