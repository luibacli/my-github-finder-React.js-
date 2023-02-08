import { AppBar, Box, Toolbar, Typography, Button, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <GitHubIcon fontSize="large" />
                    <Typography component="div" ml={5} sx={{ flexGrow: 1 }}>
                        <Box
                            sx={{
                                fontFamily: "Monospace",
                                fontSize: "h5.fontSize",
                                m: 1,
                            }}
                        >
                            <Link underline="none" color="inherit" href="/">
                                My Github Finder
                            </Link>
                        </Box>
                    </Typography>
                    <Box mr={4}>
                        <Button size="large" color="inherit" href="/">
                            <Typography component="div">
                                <Box
                                    sx={{
                                        fontFamily: "Monospace",
                                        fontSize: "h6.fontSize",
                                        m: 1,
                                    }}
                                >
                                    Home
                                </Box>
                            </Typography>
                        </Button>
                        <Button size="large" color="inherit" href="/about">
                            <Typography component="div">
                                <Box
                                    sx={{
                                        fontFamily: "Monospace",
                                        fontSize: "h6.fontSize",
                                        m: 1,
                                    }}
                                >
                                    About
                                </Box>
                            </Typography>
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Navbar;
