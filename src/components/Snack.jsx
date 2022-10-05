import { Alert, Snackbar } from "@mui/material";
import React from "react";

const Snack = ({ isOpen, handleClose = Function.prototype }) => {
  return (
    <Snackbar open={isOpen} onClose={handleClose} autoHideDuration={1500}>
      <Alert severity="success">product add in cart!</Alert>
    </Snackbar>
  );
};

export default Snack;
