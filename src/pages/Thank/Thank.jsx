import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../../components/Button/Button";
import checkCircle from "icons/checkCircle.svg"

export const Thank = () => {
  return (
    <Box
      sx={{
        maxWidth: "580px",
        p: "36px 28px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        m: "0 auto",
        border: "1px solid grey",
        mt: "80px",
        mb: "80px"
      }}
    >
      <Box component="img" src={checkCircle}/>

      <Typography
        sx={{ textAlign: "center", fontWeight: 700, fontSize: 48, mb: 1 }}
      >
        Спасибо!
      </Typography>
      <Typography
        sx={{ textAlign: "center", maxWidth: 376, fontWeight: 500, fontSize: 18, mb: 1 }}
      >
        Ваша заявка принята. Мы свяжемся с вами в ближайшее время
      </Typography>
      <PrimaryButton sx={{ mt: 2 }}>Перейти на главную</PrimaryButton>
    </Box>
  );
};