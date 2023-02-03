import { useContext } from "react"
import { Container, Card, Typography, TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { DataContext } from '../../context/ContextProvider'

const SignUpPage = ({ handleShowPassword, showPassword, switchmode }: any) => {
    const { smallScreen } = useContext(DataContext)
    return (
        <div className="container-fluid p-5" style={{ backgroundColor: "#f2f8FF" }}>
            <Container sx={{
                padding: "30px",
                marginTop: smallScreen ? "20%" : "10%",
                width: smallScreen ? "100%" : "60%",
                marginBottom: smallScreen ? "30%" : "10%"
            }}>
                <Card sx={{ padding: "20px", backgroundColor: "transparent" }}>
                    <Typography variant='h5' sx={{ marginBottom: "30px", textAlign: "center" }}>
                        Sign Up
                    </Typography>
                    <form>
                        <div className="mb-3">
                            <TextField fullWidth id="standard-basic" label="Name" name="name" type="text" variant="standard" />
                        </div>
                        <div className="mb-3">
                            <TextField fullWidth id="standard-basic" label="Email" name="email" type="email" variant="standard" />
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
                            <button className="btn btn-primary btn-md">Sign up</button>
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