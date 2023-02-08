import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Container";

function About() {
    return (
        <Box
            component="main"
            sx={{ display: "flex", flexDirection: "column", mt: 20 }}
            maxWidth="sm"
        >
            <Typography variant="h2" component="h1" gutterBottom>
                About
            </Typography>
            <Typography
                sx={{ width: 750 }}
                width="50"
                variant="h5"
                component="h2"
                gutterBottom
            >
                {
                    "A React.js app to search Github profiles and see profie details."
                }
                {
                    "This project is part of the React Front To Back Udemy course by Brad Traversy."
                }
                {
                    "This project was remade by Luigie Bacli using Material UI instead of TailwindCSS."
                }
            </Typography>
            <Typography variant="body1">Layout by: Hassib Moddasser</Typography>
        </Box>
    );
}

export default About;
