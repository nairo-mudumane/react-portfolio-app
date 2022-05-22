import React from "react";
import { Typography } from "@mui/material";
import { ITypographyProps } from "./types";
import { StyledTypography } from "./styles";

export function Text({ props }: ITypographyProps) {
  return (
    <StyledTypography>
      <Typography
        variant={props.variant || "body1"}
        {...props}
        className="text normal"
      >
        {props.children}
      </Typography>
    </StyledTypography>
  );
}
