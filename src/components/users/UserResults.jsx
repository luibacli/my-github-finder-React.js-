import { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../context/github/GithubContext";
import Box from "@mui/material/Box";
function UserResults() {
    const { users, loading } = useContext(GithubContext);

    if (!loading) {
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </Box>;
    } else {
        return <Spinner />;
    }
    return (
        <Box display="flex" flexDirection="column" justifyContent="flex-start">
            {users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </Box>
    );
}

export default UserResults;
