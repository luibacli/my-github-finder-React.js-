import { useContext } from "react";
import { Alert, Snackbar } from "@mui/material";
import AlertContext from "../context/alert/AlertContext";

function AlertMsg() {
    const { alert } = useContext(AlertContext);
    return (
        alert !== null && (
            <Snackbar
                open={Boolean(alert)}
                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                autoHideDuration={3000}
            >
                <Alert severity="error" sx={{ width: "100%" }}>
                    {alert.msg}
                </Alert>
            </Snackbar>
        )
    );
}

export default AlertMsg;
