import React from 'react'
import { Box, Typography, TextField } from "@mui/material"
import { dark } from 'theme/colors'

const inputStyles = {
  width: '100%',
  m: '8px 0 24px',
  outline: dark[600],
  "& input": {
    p: "12px 16px",
  },
  "& .Mui-focused fieldset": {
    borderColor: `${dark[600]} !important`
  }
}
export const AccountInput = ({ boxWidth, label, inputType, placeholder, sx, value, setState }) => {
  console.log(value);
  return (
    <Box sx={{ width: boxWidth }}>
      <Typography
        sx={{
          color: dark[600],
        }}
      >{label}</Typography>
      <TextField
        required={true}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setState ? setState(e.target.value) : null}
        type={inputType}
        sx={{ ...inputStyles, ...sx }}
      />
    </Box>
  )
}
