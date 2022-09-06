import React from "react";
import {
  Box,
  IconButton,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from "@mui/material";
import { StyledToast } from "./styles";
import { IToast } from "./types";
import { Close } from "@mui/icons-material";

// const handleClose = (
//     event: React.SyntheticEvent | Event,
//     reason?: string
// ) => {
//     if (reason === "clickaway") {
//         return;
//     }
// };

export function ModalToast(props: IToast) {
  const Action = (
    <React.Fragment>
      <StyledToast>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={props.onClose}
        >
          <Close fontSize="small" />
        </IconButton>
      </StyledToast>
    </React.Fragment>
  );

  const Message = (
    <React.Fragment>
      <StyledToast>
        <Box className="message-root">
          <Typography variant="body2" className="text">
            <strong>Attention:</strong> This site is still under development!
          </Typography>
        </Box>
      </StyledToast>
    </React.Fragment>
  );

  const defaultAnchorOrigin = {
    vertical: "bottom",
    horizontal: "right",
  } as SnackbarOrigin;

  if (props.open) {
    return (
      <React.Fragment>
        <Snackbar
          open={props.open}
          onClose={props.onClose}
          anchorOrigin={
            props.anchorOrigin ? { ...props.anchorOrigin } : defaultAnchorOrigin
          }
          autoHideDuration={
            props.autoHideDuration ? props.autoHideDuration : Infinity
          }
          action={Action}
          message={Message}
        />
      </React.Fragment>
    );
  }

  return null;
}
