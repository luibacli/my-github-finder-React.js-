import { Button, Box, Paper, Typography } from "@mui/material";
import React from "react";
import { pink } from "@mui/material/colors";
import SvgIcon from "@mui/material/SvgIcon";
function HomeIcon(props) {
    return (
        <SvgIcon {...props}>
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
}
function NotFound() {
    return (
        <Paper
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "50vh",
                mt: 20,
                borderRadius: "20px",
            }}
        >
            <Box>
                <Typography align="center" variant="h3" gutterBottom>
                    Oops!
                </Typography>
                <Typography variant="h4">404 - Page not found!</Typography>
                <Box align="center" mt={2}>
                    <Button variant="contained" disableElevation>
                        Back to Home{" "}
                        <HomeIcon sx={{ color: pink[200], fontSize: 30 }} />
                    </Button>
                </Box>
            </Box>
        </Paper>
    );
}

export default NotFound;
