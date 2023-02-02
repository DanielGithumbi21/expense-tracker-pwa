import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sign from './components/sign/sign'
import "bootstrap/dist/css/bootstrap.min.css"
import ForgotPassword from './components/sign/ForgotPassword'
const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth' element={<Sign />} />
        <Route path='/auth/forgot-password' element={<ForgotPassword />} />
      </Routes>
    </React.Fragment>
  )
}

export default App
