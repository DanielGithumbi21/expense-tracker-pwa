import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import Sign from './Components/Sign'
import Welcome from './Components/Welcome/Welcome'
import Spendings from './Components/Welcome/Spendings'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth' element={<Sign />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path='/spendings' element={<Spendings />} />
      </Routes>
    </React.Fragment>
  )
}

export default App