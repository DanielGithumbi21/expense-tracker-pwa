import React, { useContext } from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import Welcome from './Welcome/Welcome'
import Spendings from './Welcome/Spendings'
import Dashboard from './Dashboard/Dashboard'
import { DataContext } from '../Context/ContextProvider'
import { Box, Toolbar } from "@mui/material"
import Sidebar from './Sidebar/Sidebar'

const ComponentFiles = () => {
    const { user } = useContext(DataContext)
    return (
        <Box sx={{ display: 'flex' }}>
            <Sidebar />
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <Routes>
                    <Route element={<PrivateRoute />}>
                        <Route path='/' element={<Dashboard />} />
                        <Route path="/welcome" element={<Welcome />} />
                        <Route path='/spendings' element={<Spendings jwt={user.jwt} />} />
                    </Route>
                </Routes>
            </Box>

        </Box>
    )
}

export default ComponentFiles