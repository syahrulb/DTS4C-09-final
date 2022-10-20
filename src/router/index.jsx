// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from 'layouts'
import { Portal, Login } from 'pages'

function Router() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Portal />} />
          <Route path='/login' exact element={<Login />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Router
