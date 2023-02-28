import { Container } from '@mui/material';
import React, { useState } from 'react'
import ImageCarousel from './CarouselComponent';
import { createSpending } from '../../Data/Finance/Spendings';
import { useNavigate } from 'react-router-dom';

const Spendings = () => {
    const navigate = useNavigate()
    const [inputValues, setInputValues] = useState({
        income: "",
        budget: "",
    });
    const [isLoading, setIsLoading] = useState<Boolean>(false)
    const [errors, setErrors] = useState<String>('')
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValues((prevValues) => ({ ...prevValues, [name]: value }));
    };
    const handleInputSubmit = () => {
        createSpending(inputValues, setIsLoading, setErrors, navigate)
    };
    const inputs = [
        {
            label: "Total Income",
            name: "income",
            type: "text",
            title: "Enter the total income you plan to earn",
            value: inputValues.income,
        },
        {
            label: "Total Budget",
            name: "budget",
            type: "text",
            title: "Enter the total budget planned for your expenses",
            value: inputValues.budget,
        }
    ];
    return (
        <Container sx={{ padding: "20px", marginTop: "10%" }}>
            <ImageCarousel
                items={inputs}
                type="input"
                onNextItem={handleInputSubmit}
                onInputChange={handleInputChange}
            />
        </Container>
    )
}

export default Spendings