import React, { useState } from "react";
import { Button, Grid, Typography, Container, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
interface Image {
    src: string;
    caption: string;
}

interface Input {
    label: string;
    name: string;
    type: string;
    title: String;
    value: string;
}

interface ImageCarouselProps {
    items: (Image | Input)[];
    type: "image" | "input";
    title?: String,
    onNextItem?: () => void;
    onInputChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ items, type, title, onNextItem, onInputChange }) => {
    const navigate = useNavigate()
    const [currentIndex, setCurrentIndex] = useState(0);
    const [previousCaption, setPreviousCaption] = useState("");
    const [previousInputValue, setPreviousInputValue] = useState("");

    const handleNextItem = () => {
        if (currentIndex < items.length - 1) {
            if (type === "image") {
                setPreviousCaption((items[currentIndex] as Image).caption);
            } else {
                setPreviousInputValue((items[currentIndex] as Input).value);
            }
            setCurrentIndex(currentIndex + 1);
        }
    };

    const currentItem = items[currentIndex];


    return (
        <Container>
            <div className="row padding">
                <div className="col-lg-6">
                    <Grid item>
                        {type === "image" ? (
                            <Container className="text-center " sx={{ marginTop: "20%" }} >
                                <Typography sx={{
                                    color: "#3282B8"
                                }} variant="h4" className="mb-3" align="center">
                                    {title}
                                </Typography>
                                <Typography className="mb-3" variant="h5">{previousCaption}</Typography>
                                <Typography variant="body1">
                                    {(currentItem as Image).caption}
                                </Typography>
                            </Container>
                        ) : (
                            <>
                                <div className="text-center">
                                    <img src="https://media.istockphoto.com/id/1249714483/vector/money-insurance-concept.jpg?s=612x612&w=0&k=20&c=EOPGuZEbp387JK-HichG4vqNu3G0l-OA1GfEsC-os8A=" alt="..." className="img-fluid" />
                                </div>
                            </>
                        )}
                    </Grid>
                </div>
                <div className="col-lg-6">
                    {type === "image" && (
                        <Grid item>
                            <div className="text-center">
                                <img src={(currentItem as Image).src} alt={`Image ${currentIndex}`} className="img-fluid" style={{ height: "350px" }} />
                            </div>
                        </Grid>
                    )}
                    {type === "input" && (
                        <Grid item>
                            <div className="text-center">
                                <Typography sx={{
                                    color: "#3282B8"
                                }} variant="h4" className="mb-3 mt-5" align="center">
                                    Expense Tracker
                                </Typography>
                                <Typography className="mb-3 mt-3" variant="subtitle1">
                                    {(currentItem as Input).title}
                                </Typography>
                                <TextField
                                    onChange={onInputChange}
                                    label={(currentItem as Input).label}
                                    name={(currentItem as Input).name}
                                    type={(currentItem as Input).type}
                                    defaultValue={(currentItem as Input).value}
                                />
                            </div>
                        </Grid>
                    )}
                    <Grid className="text-center mt-3" item>
                        {
                            type === "image" ?
                                <>
                                    {currentIndex < items.length - 1 ? (
                                        <Button variant="contained" onClick={handleNextItem}>
                                            Next
                                        </Button>
                                    ) : (

                                        <Button variant="contained" onClick={(() => navigate("/spendings"))}>Continue</Button>
                                    )}
                                </> :
                                <>
                                    {currentIndex < items.length - 1 ? (
                                        <Button variant="contained" onClick={handleNextItem}>
                                            Next
                                        </Button>
                                    ) : (

                                        <Button variant="contained" onClick={onNextItem}>Submit</Button>
                                    )}
                                </>
                        }
                    </Grid>
                </div>
            </div>



        </Container>
    );
};

export default ImageCarousel;
