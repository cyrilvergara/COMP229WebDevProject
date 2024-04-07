import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const SnackBar = ({ open, message, severity }) => {
  const [isOpen, setIsOpen] = React.useState(open);

  React.useEffect(() => {
    setIsOpen(open);
  }, [open]);

  const handleSnackbarClose = () => setIsOpen(false);

  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleSnackbarClose}>
      <Alert
        onClose={handleSnackbarClose}
        severity={severity}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default SnackBar;
