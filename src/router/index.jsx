// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'layouts'
import { Portal, Login, Register } from 'pages'
import { initLogin } from 'store/authentication'
import { useEffect } from 'react'
function Router() {
  useEffect(() => {
    initLogin(console.log)
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
