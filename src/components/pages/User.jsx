import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";
import { useParams } from "react-router-dom";
import {
    Grid,
    Paper,
    Button,
    Typography,
    ButtonBase,
    Badge,
    Stack,
    Link,
    Box,
    Divider,
} from "@mui/material";
import Groups2SharpIcon from "@mui/icons-material/Groups2Sharp";
import PeopleIcon from "@mui/icons-material/People";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";
import { pink } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
import { getUserAndRepos } from "../context/github/GithubAction";
import Spinner from "../layout/Spinner";
import ReposList from "../repos/ReposList";

const Img = styled("img")({
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
    borderRadius: "10px",
});

function User() {
    const { user, loading, repos, dispatch } = useContext(GithubContext);

    const params = useParams();

    useEffect(() => {
        const getUserData = async () => {
            dispatch({ type: "SET_LOADING" });
            const userData = await getUserAndRepos(params.login);
            dispatch({ type: "GET_USER_AND_REPOS", payload: userData });
        };
        getUserData();
    }, [dispatch, params.login]);

    const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    } = user;

    if (loading) {
        return <Spinner />;
    }

    const websiteUrl = blog?.startsWith("http") ? blog : "https://" + blog;

    return (
        <Paper
            sx={{
                p: 2,
                mt: 5,

                maxWidth: "94%",
                height: "100%",
                flexGrow: 1,
                borderRadius: "15px",
                backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
        >
            <Grid container spacing={2}>
                <Grid item>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                        <Link underline="hover" color="inherit" href="/">
                            Back to search
                        </Link>
                    </Typography>
                    <ButtonBase sx={{ width: 200, height: 200 }}>
                        <Img alt={user.login} src={avatar_url} />
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>
                            <Typography
                                gutterBottom
                                variant="h4"
                                component="div"
                            >
                                {name}
                                <Badge
                                    badgeContent={type}
                                    sx={{ spacing: 2, ml: 5 }}
                                    color="success"
                                ></Badge>
                                {hireable && (
                                    <Badge
                                        badgeContent={"Hireable"}
                                        sx={{ spacing: 2, ml: 7 }}
                                        color="secondary"
                                    ></Badge>
                                )}
                            </Typography>

                            <Typography variant="subtitle1" gutterBottom>
                                {bio}
                            </Typography>
                            <Button variant="outlined" href={html_url}>
                                Visit Github Profile
                            </Button>
                        </Grid>
                        <Grid item>
                            <Stack
                                direction={{ xs: "column", sm: "row" }}
                                spacing={{ xs: 1, sm: 2, md: 4 }}
                            >
                                {location && (
                                    <Box sx={{ boxShadow: 3, p: 2 }}>
                                        <Typography
                                            color="text.disabled"
                                            variant="subtitle2"
                                        >
                                            Location
                                        </Typography>
                                        <Typography>{location}</Typography>
                                    </Box>
                                )}
                                {blog && (
                                    <Box sx={{ boxShadow: 3, p: 2 }}>
                                        <Typography
                                            color="text.disabled"
                                            variant="subtitle2"
                                        >
                                            Website
                                        </Typography>
                                        <Typography>
                                            <Link
                                                href={websiteUrl}
                                                target="_blank"
                                                rel="noreferrer"
                                                color="inherit"
                                                underline="hover"
                                            >
                                                {websiteUrl}
                                            </Link>
                                        </Typography>
                                    </Box>
                                )}
                                {twitter_username && (
                                    <Box sx={{ boxShadow: 3, p: 2 }}>
                                        <Typography
                                            color="text.disabled"
                                            variant="subtitle2"
                                        >
                                            Twitter
                                        </Typography>
                                        <Typography>
                                            <Link
                                                href={`https://twitter.com/${twitter_username}`}
                                                target="_blank"
                                                underline="hover"
                                                color="inherit"
                                            >
                                                {twitter_username}
                                            </Link>
                                        </Typography>
                                    </Box>
                                )}
                            </Stack>
                        </Grid>

                        <Grid item sx={{ mt: 7, ml: 0 }}>
                            <Stack
                                direction="row"
                                divider={
                                    <Divider orientation="vertical" flexItem />
                                }
                                spacing={0}
                            >
                                <Box
                                    sx={{
                                        boxShadow: 3,
                                        p: 2,
                                    }}
                                >
                                    <Typography
                                        color="text.disabled"
                                        variant="subtitle2"
                                    >
                                        Followers
                                    </Typography>
                                    <Typography variant="h6">
                                        {followers}
                                        <Groups2SharpIcon
                                            sx={{
                                                color: pink[500],
                                                ml: 12,
                                            }}
                                            fontSize="large"
                                        />
                                    </Typography>
                                </Box>

                                <Box sx={{ boxShadow: 3, p: 2 }}>
                                    <Typography
                                        color="text.disabled"
                                        variant="subtitle2"
                                    >
                                        Following
                                    </Typography>
                                    <Typography variant="h6">
                                        {following}
                                        <PeopleIcon
                                            sx={{
                                                color: pink[500],
                                                ml: 12,
                                            }}
                                            fontSize="large"
                                        />
                                    </Typography>
                                </Box>
                                <Box sx={{ boxShadow: 3, p: 2 }}>
                                    <Typography
                                        color="text.disabled"
                                        variant="subtitle2"
                                    >
                                        Public Repos
                                    </Typography>
                                    <Typography variant="h6">
                                        {public_repos}
                                        <ViewInArOutlinedIcon
                                            sx={{
                                                color: pink[500],
                                                ml: 12,
                                            }}
                                            fontSize="large"
                                        />
                                    </Typography>
                                </Box>
                                <Box sx={{ boxShadow: 3, p: 2 }}>
                                    <Typography
                                        color="text.disabled"
                                        variant="subtitle2"
                                    >
                                        Publick Gists
                                    </Typography>
                                    <Typography variant="h6">
                                        {public_gists}
                                        <StorefrontOutlinedIcon
                                            sx={{
                                                color: pink[500],
                                                ml: 12,
                                            }}
                                            fontSize="large"
                                        />
                                    </Typography>
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <ReposList repos={repos} />
        </Paper>
    );
}

export default User;
