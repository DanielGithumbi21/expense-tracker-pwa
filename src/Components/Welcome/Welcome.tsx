import React, { useContext } from "react";
import { Container, Typography } from "@mui/material";
import ImageCarousel from "./CarouselComponent";
import { DataContext } from "../../Context/ContextProvider";

const Welcome: React.FC = () => {
    const { user } = useContext(DataContext)
    const images = [
        {
            src: "https://cdn-icons-png.flaticon.com/512/6607/6607686.png",
            caption: "Expense Tracker",
        },
        {
            src: "https://cdn-icons-png.flaticon.com/512/2721/2721223.png",
            caption: "Stop guessing where your money is going - let our app help you manage your expenses and save for the things that matter most.",
        }
    ];

    return (
        <Container sx={{ padding: "20px", marginTop: "10%" }}>
            <ImageCarousel items={images} type="image" title={`Welcome ${user.user.name}`} />
        </Container>

    );
};

export default Welcome;
