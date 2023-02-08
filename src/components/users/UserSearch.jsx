import { useState, useContext } from "react";
import { TextField, Stack, Button, Box, Container } from "@mui/material";
import GithubContext from "../context/github/GithubContext";
import AlertContext from "../context/alert/AlertContext";
import { searchUsers } from "../context/github/GithubAction";

function UserSearch() {
    const [text, setText] = useState("");

    const { users, dispatch } = useContext(GithubContext);

    const { setAlert } = useContext(AlertContext);

    const handleChange = (e) => setText(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (text === "") {
            setAlert("Please enter something", "error");
        } else {
            dispatch({ type: "SET_LOADING" });
            const users = await searchUsers(text);
            dispatch({ type: "GET_USERS", payload: users });
            setText("");
        }
    };
    return (
        <Box
            sx={{
                bgcolor: "background.paper",
                pt: 8,
                pb: 6,
            }}
        >
            <Container maxWidth="sm">
                <TextField
                    name="keyword"
                    required
                    fullWidth
                    id="keyword"
                    label="Search user"
                    autoFocus
                    value={text}
                    onChange={handleChange}
                />

                <Stack
                    sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                >
                    <Button
                        variant="outlined"
                        size="large"
                        color="secondary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </Button>
                    {users.length > 0 && (
                        <Button
                            size="large"
                            variant="outlined"
                            onClick={() => dispatch({ type: "CLEAR_USERS" })}
                        >
                            Clear
                        </Button>
                    )}
                </Stack>
            </Container>
        </Box>
    );
}

export default UserSearch;
