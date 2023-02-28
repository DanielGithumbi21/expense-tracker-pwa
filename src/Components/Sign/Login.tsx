import { Container, Typography, Button } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { login } from '../../Data/Auth/Auth';
const Login = ({ switchMode }: any) => {
    const navigate = useNavigate()
    const initialState = { email: "", password: "" }
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [errors, setErrors] = useState<String>()
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        login(formData, setIsLoading, setErrors, navigate)
    }
    return (
        <Container sx={{
            marginTop: "10%",
            width: "70%",
            padding: "20px"
        }}>
            <Typography className='mb-3' variant="h4">
                Sign in
            </Typography>
            <Typography className='mb-3' variant='subtitle1'>
                Welcome to Expense Tracker, put in your log in credentials to start using the app
            </Typography>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> <b>Email address</b> </label>
                    <input name='email' onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-5">
                    <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
                    <input name='password' onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <Button type="submit" variant="contained" fullWidth disableElevation disabled={isLoading ? true : false}>
                        {isLoading ? "Signing" : "Sign in"}
                    </Button>
                </div>
                <div className="mb-3">
                    <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                        Sign in with google
                    </Button>
                </div>
                <Typography variant="subtitle1">
                    Don't have an account? <a href="#" onClick={switchMode} > Create an Account</a>
                </Typography>

            </form>
        </Container>
    )
}

export default Login