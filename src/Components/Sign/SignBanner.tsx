import React from 'react'
import login from "../../assets/login.svg"
import { Container } from '@mui/material'

const SignBanner = () => {
    return (
        <Container sx={{ marginTop: "15%", }}>
            <img src={login} className='img-fluid' alt="..." />
        </Container>
    )
}

export default SignBanner