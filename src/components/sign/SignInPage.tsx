import { Container, Card, Typography, TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const SignInPage = ({ handleShowPassword, showPassword, switchmode }: any) => {
    return (
        <div className="container-fluid p-5" style={{ backgroundColor: "#f2f8FF" }}>
            <Container sx={{
                padding: "30px",
                marginTop: "20%",
                width: "60%",
                marginBottom: "25%"
            }}>
                <Card sx={{ padding: "20px", backgroundColor: "transparent" }}>
                    <Typography variant='h5' sx={{ marginBottom: "30px", textAlign: "center" }}>
                        Sign In
                    </Typography>
                    <form>
                        <div className="mb-3">
                            <TextField fullWidth id="standard-basic" label="Email" name="email" variant="standard" />
                        </div>
                        <div className="mb-4">
                            <TextField fullWidth id="standard-basic" label="Password" name="password" type={showPassword ? 'text' : 'password'} InputProps={{
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
                            <button className="btn btn-primary btn-md">Login</button>
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