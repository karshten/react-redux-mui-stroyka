import { Button } from "@mui/material"
import React from "react"
import { yellow, dark, white } from "../../theme/colors"

const stylesButton = {
  bgcolor: yellow[500],
  color: dark[500],
  borderRadius: 0,
  boxShadow: "none",
  height: 48,
  mr: 2,
  py: 1.5,
  "& path": {
    transition: "0.25s",
  },
  "&:hover": {
    bgcolor: dark[600],
    color: white,
  },
  "&:hover path": {
    color: white,
    bgcolor: white,
    stroke: white,
  },
}
const stylesSecondaryButton = {
  border: "1px solid #D1D1D3",
  borderRadius: 0,
  color: dark[500],
  textTransform: "none",
  fontSize: 18,
  fontWeight: 500,
  "&:hover": {
    bgcolor: dark[600],
    color: white,
    borderColor: "transparent",
  },
  "&:hover path": {
    stroke: white,
  },
  "& path": {
    transition: "0.25s",
  },
}

export const PrimaryButton = ({ children, sx, ...props }) => {
  return (
    <Button variant="contained" sx={{ ...stylesButton, ...sx }} {...props}>
      {children}
    </Button>
  )
}

export const PrimaryButtonIcon = ({ children, sx, icon, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ ...stylesButton, ...sx }}
      startIcon={icon}
      {...props}
    >
      {children}
    </Button>
  )
}

export const SecondaryButton = ({ children, sx, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{ ...stylesSecondaryButton, ...sx }}
      {...props}
    >
      {children}
    </Button>
  )
}

export const SecondaryButtonIcon = ({ children, icon, sx, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{ ...stylesSecondaryButton, ...sx }}
      endIcon={icon}
      {...props}
    >
      {children}
    </Button>
  )
}
