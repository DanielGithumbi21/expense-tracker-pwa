import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { Routes, Route } from 'react-router-dom'
import Sign from './Components/Sign'

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/auth' element={<Sign />} />
      </Routes>
    </React.Fragment>
  )
}

export default App