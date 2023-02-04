import { Container, Card, Typography, TextField, InputAdornment, IconButton,Alert } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/ContextProvider'
import { useContext, useState } from 'react';
import { loginUser } from '../../Data/Auth/Auth';

interface User {
    email:String,
    password:String
}

const SignInPage = ({ handleShowPassword, showPassword, switchmode }: any) => {
    const navigate = useNavigate ()
    const { smallScreen,setUser } = useContext(DataContext)
    const initialUser:User = {email:"",password:""}
    const [formData,setFormData] = useState <User> (initialUser)
    const [ isLoading,setIsLoading] = useState <Boolean> (false)
    const [errors,setErrors] = useState <String> ('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault ()
        loginUser(formData,setIsLoading,navigate,setErrors,setUser)

    }


    return (
        <div className="container-fluid p-5" style={{ backgroundColor: "#f2f8FF" }}>
            <Container sx={{
                padding: "30px",
                marginTop: smallScreen ? "30%" : "10%",
                width: smallScreen ? "100%" : "60%",
                marginBottom: smallScreen ? "40%" : "10%"
            }}>
                <Card sx={{ padding: "20px", backgroundColor: "transparent" }}>
                {
                        errors !== '' && (
                            <Alert variant="filled" onClose={(() => setErrors(''))} severity="error">
                                    {errors}
                                </Alert>
                        )
                    }
                    <Typography variant='h5' sx={{ marginTop: "30px", marginBottom: "30px", textAlign: "center" }}>
                        Sign In
                    </Typography>
                    <form onSubmit={onSubmit} >
                        <div className="mb-3">
                            <TextField fullWidth id="standard-basic" required onChange={handleChange} type="email" label="Email" name="email" variant="standard" />
                        </div>
                        <div className="mb-4">
                            <TextField fullWidth id="standard-basic" required onChange={handleChange} label="Password" name="password" type={showPassword ? 'text' : 'password'} InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton>
                                            {
                                                showPassword ? <VisibilityOff onClick={handleShowPassword} /> : <Visibility onClick={handleShowPassword} />
                                            }

                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }} variant="standard" />
                        </div>

                        <div className="mb-3 text-center">
                            <button className="btn btn-primary btn-md" disabled={isLoading?true:false}>Login</button>
                        </div>
                        <div className="mb-3 text-center">
                            <Link style={{ textDecoration: "none" }} to='/auth/forgot-password' >Forgot Password</Link>
                        </div>
                        <div className="mb-5 text-center">
                            <button className="btn btn-outline btn-md" onClick={switchmode} >Don't have an account? Sign up</button>
                        </div>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export default SignInPage