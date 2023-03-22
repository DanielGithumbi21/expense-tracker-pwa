import React, { useContext, useState, useEffect } from 'react'
import { Card, Typography, Container, Avatar } from "@mui/material";
import { DataContext } from '../../Context/ContextProvider';
import DashboardCard from './DashboardCard';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { PieChart, Pie, Legend, Tooltip, Cell } from "recharts";
import { getSpending } from '../../Data/Finance/Spendings';
import { getAggregateExpenses, getExpenses } from '../../Data/Finance/expenses';
import { getAggregateIncomes, getIncomesByCategory } from '../../Data/Finance/incomes';

interface Spendings {
    income: "",
    budget: ""
}
const Dashboard = () => {
    const { user } = useContext(DataContext)
    const [spendings, setSpendings] = useState<Spendings | any>({})
    const [aggregateExpenses, setAggregateExpenses] = useState<any>({})
    const [aggregateIncomes, setAggregateIncomes] = useState<any>({})
    const [incomesData, setIncomesData] = useState<any>([])
    const [expenses, setExpenses] = useState<any>([])

    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const COLORS = ["#005DFF", "#FFA200", "#B2CEFF", "#8F01FF", "#001233"];

    useEffect(() => {
        getSpending(setIsLoading, setSpendings, user.jwt)
        getAggregateExpenses(setIsLoading, setAggregateExpenses, user.jwt)
        getAggregateIncomes(setIsLoading, setAggregateIncomes, user.jwt)
        getIncomesByCategory(setIsLoading, setIncomesData, user.jwt)
        getExpenses(setIsLoading, setExpenses, user.jwt)
    }, [])

    return (
        <React.Fragment>
            {
                isLoading ?
                    <div className="text-center mb-3 mt-3">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div> :
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
                                        amount={spendings.budget}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <DashboardCard
                                        heading="Targeted Income"
                                        color="#3282B8"
                                        amount={spendings.income}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <DashboardCard
                                        heading="Total Expenses"
                                        color="#3282B8"
                                        amount={aggregateExpenses.totalExpenses}
                                    />
                                </div>
                                <div className="col-lg-3">
                                    <DashboardCard
                                        heading="Total Income"
                                        color="#3282B8"
                                        amount={aggregateIncomes.totalIncomes}
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
                                        {
                                            expenses.sort((a: any, b: any) => b.amount - a.amount).slice(0, 4).map((expense: any) => (
                                                <Container className='mt-3 mb-3 d-flex'>
                                                    <Avatar sx={{ bgcolor: deepOrange[500] }}>FD </Avatar>
                                                    <Typography variant='subtitle1' sx={{
                                                        margin: "10px"
                                                    }}>
                                                        {expense.name}
                                                    </Typography>
                                                    <Typography variant='subtitle1' sx={{
                                                        margin: "10px"
                                                    }}>
                                                        - kshs. {expense.amount}
                                                    </Typography>
                                                </Container>
                                            ))
                                        }


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
                                                data={incomesData}
                                                cx={200}
                                                cy={200}
                                                innerRadius={60}
                                                outerRadius={120}
                                                fill="#8884d8"
                                                paddingAngle={5}
                                                dataKey="amount"
                                            >
                                                {incomesData.map((index: any) => (
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
            }

        </React.Fragment>

    )
}

export default Dashboard