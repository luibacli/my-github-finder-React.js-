import spinner from "./assets/spinner.gif";
import Box from "@mui/material/Box";
function Spinner() {
    return (
        <Box display="flex" alignContent="center">
            <img
                width={180}
                className="text-center mx-auto"
                src={spinner}
                alt="Loading..."
            />
        </Box>
    );
}

export default Spinner;
