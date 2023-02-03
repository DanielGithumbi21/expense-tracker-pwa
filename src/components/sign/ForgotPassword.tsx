import { Container, Card, Typography, TextField, InputAdornment, IconButton } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import SignBanner from './SignBanner'
import { DataContext } from '../../context/ContextProvider'
import React, { useContext } from 'react';


const ForgotPassword = ({ handleShowPassword, showPassword, switchmode }: any) => {
    const navigate = useNavigate()
    const { smallScreen } = useContext(DataContext)

    return (
        <React.Fragment>
            {
                smallScreen ?
                    <Container sx={{
                        padding: "30px",
                        marginTop: smallScreen ? "20%" : "10%",
                        width: smallScreen ? "100%" : "60%",
                        marginBottom: "10%"
                    }}>
                        <Card sx={{ padding: "20px", backgroundColor: "transparent" }}>
                            <Typography variant='h5' sx={{ marginBottom: "30px", textAlign: "center" }}>
                                Forgot Password
                            </Typography>
                            <form>
                                <div className="mb-3">
                                    <TextField fullWidth id="standard-basic" label="Email" name="email" variant="standard" />
                                </div>
                                <div className="mb-4">
                                    <TextField fullWidth id="standard-basic" label="New Password" name="password" type={showPassword ? 'text' : 'password'} InputProps={{
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
                                    <button className="btn btn-primary btn-md">Change Password</button>
                                </div>

                                <div className="mb-5 text-center">
                                    <button className="btn btn-outline btn-md" onClick={(() => navigate("/auth"))} >Go to login page</button>
                                </div>
                            </form>
                        </Card>
                    </Container> :
                    <div className="row padding">
                        <div className="col-lg-6">
                            <SignBanner />
                        </div>

                        <div className="col-lg-6">
                            <div className="container-fluid p-5" style={{ backgroundColor: "#f2f8FF" }}>
                                <Container sx={{
                                    padding: "30px",
                                    marginTop: "20%",
                                    width: "60%",
                                    marginBottom: "25%"
                                }}>
                                    <Card sx={{ padding: "20px", backgroundColor: "transparent" }}>
                                        <Typography variant='h5' sx={{ marginBottom: "30px", textAlign: "center" }}>
                                            Forgot Password
                                        </Typography>
                                        <form>
                                            <div className="mb-3">
                                                <TextField fullWidth id="standard-basic" label="Email" name="email" variant="standard" />
                                            </div>
                                            <div className="mb-4">
                                                <TextField fullWidth id="standard-basic" label="New Password" name="password" type={showPassword ? 'text' : 'password'} InputProps={{
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
                                                <button className="btn btn-primary btn-md">Change Password</button>
                                            </div>

                                            <div className="mb-5 text-center">
                                                <button className="btn btn-outline btn-md" onClick={(() => navigate("/auth"))} >Go to login page</button>
                                            </div>
                                        </form>
                                    </Card>
                                </Container>
                            </div>
                        </div>
                    </div>

            }
        </React.Fragment>


    )
}

export default ForgotPassword