import { useContext, useState } from "react"
import { Container, Card, Typography, TextField, InputAdornment, IconButton,Alert } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DataContext } from '../../context/ContextProvider'
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../Data/Auth/Auth";


interface User {
    name:String,
    email:String,
    password:String
}

const SignUpPage = ({ handleShowPassword, showPassword, switchmode }: any) => {
    const navigate = useNavigate()
    const { smallScreen, setUser } = useContext(DataContext)
    const initialState:User = {name:"",email:"", password:""}
    const [formData,setFormData] = useState<User> (initialState)
    const [isLoading,setIsLoading] = useState <Boolean> (false)
    const [errors,setErrors] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData,[e.target.name]:e.target.value})
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault ()
        registerUser(formData,setIsLoading,navigate,setErrors,setUser)

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
                    <Typography variant='h5' sx={{marginTop: "30px", marginBottom: "30px", textAlign: "center" }}>
                        Sign Up
                    </Typography>
                    <form onSubmit={onSubmit}>
                        <div className="mb-3">
                            <TextField fullWidth id="standard-basic" onChange={handleChange} label="Name" name="name" type="text" variant="standard" />
                        </div>
                        <div className="mb-3">
                            <TextField fullWidth id="standard-basic" onChange={handleChange} label="Email" name="email" type="email" variant="standard" />
                        </div>
                        <div className="mb-4">
                            <TextField fullWidth id="standard-basic" onChange={handleChange} label="Password" name="password" type={showPassword ? 'text' : 'password'} InputProps={{
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
                            <button className="btn btn-primary btn-md" disabled={isLoading?true:false}>Sign up</button>
                        </div>
                        <div className="mb-5 text-center">
                            <button className="btn btn-outline btn-md" onClick={switchmode} >Already have an account? Login</button>
                        </div>
                    </form>
                </Card>
            </Container>
        </div>
    )
}

export default SignUpPage