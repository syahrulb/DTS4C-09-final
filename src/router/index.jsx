// import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../layouts'
import { Portal } from '../pages'

function Router() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' exact element={<Portal />} />
        </Routes>
      </Layout>
    </>
  )
}

export default Router
