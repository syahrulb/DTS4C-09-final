// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'layouts'
import { Portal, Login, Register } from 'pages'

const Router = () => {
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
