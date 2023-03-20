import React, { useContext, useState } from 'react'
import { Container, Typography, Button, Alert } from '@mui/material'
import GoogleIcon from '@mui/icons-material/Google';
import { useNavigate } from "react-router-dom"
import { createAccount } from '../../Data/Auth/Auth';
import { DataContext } from '../../Context/ContextProvider';
const SignUp = ({ switchMode }: any) => {
    const navigate = useNavigate()
    const initialState = { name: "", email: "", password: "" }
    const [formData, setFormData] = useState(initialState)
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [errors, setErrors] = useState<String>("")
    const { setUser } = useContext(DataContext)
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
        setErrors("")
    }
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        createAccount(formData, setIsLoading, setErrors, navigate, setUser)
    }
    return (
        <Container sx={{
            marginTop: "7%",
            width: "70%",
            padding: "20px"
        }}>
            {
                errors === "" ? "" :
                    <Alert variant="filled" severity="error" className='mb-3'>
                        {errors}
                    </Alert>
            }
            <Typography className='mb-3 mt-5' variant="h4">
                Create an account
            </Typography>
            <Typography className='mb-3' variant='subtitle1'>
                Welcome to Expense Tracker, create an account to start using the app
            </Typography>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> <b>Name</b> </label>
                    <input required onChange={handleChange} type="text" name="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label"> <b>Email address</b> </label>
                    <input required onChange={handleChange} type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-5">
                    <label htmlFor="exampleInputPassword1" className="form-label"><b>Password</b></label>
                    <input required onChange={handleChange} type="password" name="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <Button type="submit" variant="contained" fullWidth disableElevation disabled={isLoading ? true : false}>
                        {isLoading ? "Signing" : "Sign up"}
                    </Button>
                </div>
                <div className="mb-3">
                    <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}>
                        Sign up with google
                    </Button>
                </div>
                <Typography variant="subtitle1">
                    Already have an account? <a href="#" onClick={switchMode} > Sign in to your account</a>
                </Typography>

            </form>
        </Container>
    )
}

export default SignUp