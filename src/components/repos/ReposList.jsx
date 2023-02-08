import React from "react";
import PropTypes from "prop-types";
import ReposItems from "./ReposItems";
import Box from "@mui/material/Box";

function ReposList({ repos }) {
    return (
        <Box>
            <h2>Top Repositories</h2>
            {repos.map((repo) => (
                <ReposItems key={repo.id} repo={repo} />
            ))}
        </Box>
    );
}

ReposList.propTypes = {
    repos: PropTypes.array.isRequired,
};

export default ReposList;
