import React from 'react'
import { Card, Typography } from '@mui/material'

interface CardInterfaces {
  color: String,
  heading: String,
  amount: String

}
const DashboardCard = ({ heading, color, amount }: CardInterfaces) => {
  return (
    <Card
      sx={{
        padding: "30px",
        background: `linear-gradient(to right, #B2CEFF 0%, ${color} 100%)`,
        textAlign: "center",
        marginTop: "30px",
        color: "#001233"
      }}
    >
      <Typography className='mb-3' variant="h6">
        {heading}
      </Typography>
      <Typography variant='subtitle1'>
        Kshs. {amount}
      </Typography>
    </Card>
  )
}

export default DashboardCard