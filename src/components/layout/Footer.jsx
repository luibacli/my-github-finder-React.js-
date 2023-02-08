import * as React from "react";
import { Paper, Box, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "} {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}
function Footer() {
    return (
        <Paper
            sx={{
                mt: 75,
                bottom: 0,
                width: "100%",
            }}
            component="footer"
        >
            <Box
                sx={{
                    flexGrow: 1,
                    justifyContent: "center",
                    p: 5,
                }}
            >
                <Typography component="div" align="center" gutterBottom>
                    <Box
                        sx={{
                            fontFamily: "Monospace",
                            fontSize: "h5.fontSize",
                            m: 1,
                        }}
                    >
                        <GitHubIcon fontSize="medium" /> My Github Finder
                    </Box>
                </Typography>

                <Typography
                    variant="subtitle1"
                    align="center"
                    color="text.secondary"
                    component="p"
                >
                    This Project is Made By Luigie Bacli From Scratch
                </Typography>
                <Copyright />
            </Box>
        </Paper>
    );
}

export default Footer;
