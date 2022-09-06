import React from "react";
import {
  Box,
  IconButton,
  Snackbar,
  SnackbarOrigin,
  Typography,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { Close } from "@mui/icons-material";
import { StyledToast } from "./styles";
import { IToast } from "./types";

export function ModalToast(props: IToast) {
  const defaultAnchorOrigin = {
    vertical: "bottom",
    horizontal: "right",
  } as SnackbarOrigin;

  const handleClose = (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    return props.onClose();
  };

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

  if (props.open) {
    return (
      <React.Fragment>
        <Snackbar
          action={Action}
          open={props.open}
          message={Message}
          TransitionComponent={Slide}
          onClose={handleClose}
          anchorOrigin={
            props.anchorOrigin ? { ...props.anchorOrigin } : defaultAnchorOrigin
          }
          autoHideDuration={
            props.autoHideDuration ? props.autoHideDuration : 10000
          }
        />
      </React.Fragment>
    );
  }

  return null;
}
