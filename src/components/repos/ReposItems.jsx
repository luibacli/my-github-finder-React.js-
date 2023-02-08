import React from "react";
import PropTypes from "prop-types";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import RestaurantOutlinedIcon from "@mui/icons-material/RestaurantOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import { pink } from "@mui/material/colors";
import {
    Box,
    Stack,
    Typography,
    Grid,
    Divider,
    Link,
    IconButton,
} from "@mui/material";
function ReposItems({ repo }) {
    const {
        name,
        description,
        html_url,
        forks,
        open_issues,
        watchers_count,
        stargazers_count,
    } = repo;
    return (
        <Grid container>
            <Grid item>
                <Stack
                    direction="column"
                    divider={<Divider orientation="vertical" flexItem />}
                >
                    <Box
                        sx={{
                            boxShadow: 3,
                            p: 2,
                            width: 1000,
                        }}
                    >
                        <Typography variant="h5">
                            <AttachFileIcon fontSize="small" />
                            <Link
                                underline="hover"
                                color="inherit"
                                href={html_url}
                                target="_blank"
                            >
                                {name}
                            </Link>
                        </Typography>
                        <Typography variant="subtitle1">
                            {description}
                        </Typography>
                        <Box>
                            <IconButton size="small">
                                <RemoveRedEyeOutlinedIcon
                                    color="primary"
                                    label="test"
                                />
                                <Typography color="primary.main">
                                    {watchers_count}
                                </Typography>
                            </IconButton>

                            <IconButton size="small">
                                <StarBorderOutlinedIcon color="success" />
                                <Typography color="success.main">
                                    {stargazers_count}
                                </Typography>
                            </IconButton>
                            <IconButton size="small">
                                <InfoOutlinedIcon sx={{ color: pink[500] }} />
                                <Typography sx={{ color: pink[500] }}>
                                    {open_issues}
                                </Typography>
                            </IconButton>
                            <IconButton size="small">
                                <RestaurantOutlinedIcon color="secondary" />
                                <Typography color="secondary.main">
                                    {forks}
                                </Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </Stack>
            </Grid>
        </Grid>
    );
}

ReposItems.propTypes = {
    repo: PropTypes.object.isRequired,
};
export default ReposItems;
