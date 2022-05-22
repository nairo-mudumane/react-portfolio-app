import React from "react";
import { Typography } from "@mui/material";
import { StyledTypography } from "./styles";
import { ITypographyProps } from "./types";

export function Title({ props }: ITypographyProps) {
  return (
    <StyledTypography>
      <Typography
        variant={props.variant || "h1"}
        {...props}
        className="text bold title"
      >
        {props.children}
      </Typography>
    </StyledTypography>
  );
}
