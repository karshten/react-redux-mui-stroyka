import React from "react"
import { Box, Grid } from "@mui/material"
import companyTest from "img/Frame 4184.png"

export const CompanyContent = () => {
  return (
    <Grid container sx={{ mb: "80px" }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <Grid key={item} item xs={2}>
          <Box
            sx={{ maxWidth: "180px", maxHeight: "124px", cursor: "pointer" }}
            component="img"
            src="https://buildstock.ru/netcat_files/216/375/braer.jpg"
          ></Box>
        </Grid>
      ))}
    </Grid>
  )
}
