import { Typography, Box, Button } from "@mui/material";
import React from "react";
import { PrimaryButton } from "../../components/Button/Button";
import { grey } from "../../theme/colors";

export const NotFound = () => {
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
      <Typography
        sx={{ textAlign: "center", fontWeight: 700, fontSize: 48, mb: 1 }}
      >
        404
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontWeight: 600, fontSize: 34, mb: 1 }}
      >
        Страница не найдена
      </Typography>
      <Typography
        sx={{ textAlign: "center", fontWeight: 500, fontSize: 18, mb: 3 }}
      >
        Неправильно набран адрес или такая страница больше не существует
      </Typography>
      <PrimaryButton>Перейти на главную</PrimaryButton>
    </Box>
  );
};