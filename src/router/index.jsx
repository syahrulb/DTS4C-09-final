// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layout'
import { Home } from '../pages'

function Router() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Home />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Router
