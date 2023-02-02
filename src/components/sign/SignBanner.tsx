import React from 'react'
import { Container, Typography } from "@mui/material"
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import PaidIcon from '@mui/icons-material/Paid';
import InsightsIcon from '@mui/icons-material/Insights';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
const SignBanner = () => {
    return (
        <div className="container-fluid p-5" style={{ backgroundColor: "white" }}>
            <Container sx={{ marginTop: "20%" }}>
                <Typography variant="h4" sx={{ marginBottom: "20px", textAlign: "center", color: "#1F51FF" }}>
                    Panga Pesa
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    Panga Pesa is an online application where you can plan your finances, including expenses, incomes and also set your target your incomes and expenses
                </Typography>
                <Container sx={{
                    marginLeft: "25%",
                    padding: "20px"
                }}>
                    <Typography variant='subtitle1' sx={{ marginBottom: "20px" }}>
                        <span><CurrencyExchangeIcon sx={{ fontSize: "30px", marginRight: "10px", color: "#1F51FF" }} /></span> Expenses
                    </Typography>
                    <Typography variant='subtitle1' sx={{ marginBottom: "20px" }}>
                        <span><PaidIcon sx={{ fontSize: "30px", marginRight: "10px", color: "#1F51FF" }} /></span> Incomes
                    </Typography>
                    <Typography variant='subtitle1' sx={{ marginBottom: "20px" }}>
                        <span><InsightsIcon sx={{ fontSize: "30px", marginRight: "10px", color: "#1F51FF" }} /></span> Insights
                    </Typography>
                    <Typography variant='subtitle1' sx={{ marginBottom: "20px" }}>
                        <span><CircleNotificationsIcon sx={{ fontSize: "30px", marginRight: "10px", color: "#1F51FF" }} /></span> Notifications
                    </Typography>
                </Container>
            </Container>

        </div>
    )
}

export default SignBanner