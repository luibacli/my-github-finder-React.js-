import PropTypes from "prop-types";
import {
    Grid,
    Card,
    CardContent,
    Typography,
    Container,
    Avatar,
    Link,
} from "@mui/material";

function UserItem({ user: { login, avatar_url } }) {
    return (
        <Container sx={{ py: 2 }} fixed>
            <Grid container>
                <Grid xs={12} sm={12} md={12}>
                    <Card
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "row",
                            borderRadius: "15px",
                        }}
                    >
                        <Avatar
                            sx={{ width: 56, height: 56 }}
                            src={avatar_url}
                            alt="Loading.."
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography
                                gutterBottom
                                fontWeight="bold"
                                variant="body1"
                            >
                                {login}
                            </Typography>

                            <Typography>
                                <Link href={`user/${login}`} underline="hover">
                                    Visit Profile
                                </Link>
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
}
UserItem.propTypes = {
    user: PropTypes.object.isRequired,
};

export default UserItem;
