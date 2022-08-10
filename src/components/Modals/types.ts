import { SnackbarOrigin } from "@mui/material";

export interface IModal {
    open: boolean;
    onClose: () => unknown;
}

export interface IToast extends IModal {
    anchorOrigin?: SnackbarOrigin;
    autoHideDuration?: number | null | undefined;
}
