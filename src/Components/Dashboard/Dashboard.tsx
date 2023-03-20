import React, { useContext } from 'react'
import { Card, Typography, Container, Avatar } from "@mui/material";
import { DataContext } from '../../Context/ContextProvider';
import DashboardCard from './DashboardCard';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";


const Dashboard = () => {
    const { user } = useContext(DataContext)
    const data01 = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 },
        { name: "Group E", value: 278 },
        { name: "Group F", value: 189 }
    ];
    const COLORS = ["#005DFF", "#FFA200", "#B2CEFF", "#8F01FF", "#001233"];

    return (
        <React.Fragment>
            <Container sx={{
                padding: "20px",
                marginTop: "20px"
            }}>
                <Typography variant="h5" sx={{ color: "#3282B8", marginBottom: "10px" }}>
                    Hi, {user.user.name}
                </Typography>
                <Typography variant="body1">
                    Welcome Back to Analyze
                </Typography>
                <div className="row padding">
                    <div className="col-lg-3">
                        <DashboardCard
                            heading="Targeted Budget"
                            color="#3282B8"
                            amount="25000"
                        />
                    </div>
                    <div className="col-lg-3">
                        <DashboardCard
                            heading="Targeted Income"
                            color="#3282B8"
                            amount="25000"
                        />
                    </div>
                    <div className="col-lg-3">
                        <DashboardCard
                            heading="Total Expenses"
                            color="#3282B8"
                            amount="25000"
                        />
                    </div>
                    <div className="col-lg-3">
                        <DashboardCard
                            heading="Total Income"
                            color="#3282B8"
                            amount="25000"
                        />
                    </div>
                </div>

            </Container>
            <Container sx={{
                marginTop: "30px"
            }}>

                <div className="row padding">
                    <div className="col-lg-6">
                        <Card
                            sx={{
                                padding: "40px",
                                marginTop: "30px"
                            }}
                        >
                            <Typography variant="h5">
                                Top Expenses
                            </Typography>
                            <Container className='mt-3 mb-3 d-flex'>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>FD </Avatar>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    Food and Drinking
                                </Typography>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    - kshs. 3000
                                </Typography>
                            </Container>
                            <Container className='mt-3 mb-3 d-flex'>
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>FD </Avatar>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    Food and Drinking
                                </Typography>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    - kshs. 3000
                                </Typography>
                            </Container>
                            <Container className='mt-3 mb-3 d-flex'>
                                <Avatar sx={{ bgcolor: deepPurple[500] }}>FD </Avatar>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    Food and Drinking
                                </Typography>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    - kshs. 3000
                                </Typography>
                            </Container>
                            <Container className='mt-3 mb-3 d-flex'>
                                <Avatar sx={{ bgcolor: deepOrange[500] }}>FD </Avatar>
                                <Typography variant='subtitle1' sx={{
                                    margin: "10px"
                                }}>
                                    Food and Drinking
                                </Typography>
                                <Typography variant='subtitle1' sx={{
                                    margin: "5px"
                                }}>
                                    - kshs. 3000
                                </Typography>
                            </Container>

                        </Card>
                    </div>
                    <div className="col-lg-6">
                        <Card
                            sx={{
                                padding: "40px",
                                marginTop: "30px"
                            }}>
                            <Typography variant="h5">
                                Top Income Category
                            </Typography>
                            <PieChart width={500} height={400}>
                                <Pie
                                    data={data01}
                                    cx={200}
                                    cy={200}
                                    innerRadius={60}
                                    outerRadius={120}
                                    fill="#8884d8"
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {data01.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>

                                <Tooltip />
                            </PieChart>
                        </Card>
                    </div>
                </div>

            </Container>
        </React.Fragment>

    )
}

export default Dashboard