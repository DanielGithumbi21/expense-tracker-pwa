import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Welcome from './Welcome/Welcome'
import Spendings from './Welcome/Spendings'
import Dashboard from './Dashboard/Dashboard'

const ComponentFiles = () => {
    return (
        <React.Fragment>
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path='/' element={<Dashboard />} />
                    <Route path="/welcome" element={<Welcome />} />
                    <Route path='/spendings' element={<Spendings />} />
                </Route>
            </Routes>
        </React.Fragment>
    )
}

export default ComponentFiles