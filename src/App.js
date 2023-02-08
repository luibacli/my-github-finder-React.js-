import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import User from "./components/pages/User";
import NotFound from "./components/pages/NotFound";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import AlertMsg from "./components/layout/AlertMsg";
import Container from "@mui/material/Container";
import { GithubProvider } from "./components/context/github/GithubContext";
import { AlertProvider } from "./components/context/alert/AlertContext";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <GithubProvider>
                <AlertProvider>
                    <AlertMsg />
                    <Navbar />
                    <main>
                        <Container fixed>
                            <Router>
                                <Routes>
                                    <Route exact path="/" element={<Home />} />
                                    <Route path="/about" element={<About />} />
                                    <Route
                                        path="/user/:login"
                                        element={<User />}
                                    />
                                    <Route
                                        path="/notfound"
                                        element={<NotFound />}
                                    />
                                    <Route
                                        exact
                                        path="*"
                                        element={<NotFound />}
                                    />
                                </Routes>
                            </Router>
                        </Container>
                    </main>
                    <Footer />
                </AlertProvider>
            </GithubProvider>
        </ThemeProvider>
    );
}

export default App;
