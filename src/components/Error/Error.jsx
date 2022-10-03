import React from 'react'
import { Box, Typography } from "@mui/material"
import { dark, grey } from '../../theme/colors'
import { PrimaryButton } from '../Button/Button'
import { Link } from 'react-router-dom'

export const Error = () => {
  return (
    <Box sx={{
      background: "rgba(23, 27, 36, 0.6)",
      position: 'fixed',
      width: "100%",
      height: '100%',
      zIndex: '100000',
      top: 0,
      left: 0,
      display: 'flex',
      justifyContent: 'center'
    }}>
      <Box sx={{
        position: "absolute",
        top: "30%",
        width: "572px",
        maxHeight: "240px",
        display: "flex",
        alignItems: "column",
        justifyContent: "center",
        textAlign: 'center',
        p: 4.5,
        m: '0 auto',
        backgroundColor: '#fff',
        "& a": {
          textDecoration: "none"
        }
      }}>
        <Box sx={{
          maxWidth: '320px'
        }}>
          <Typography sx={{
            fontSize: '34px',
            fontWeight: 600,
            color: dark[500]
          }}>
            Ошибка
          </Typography>
          <Typography sx={{
            m: '12px 0 24px',
            fontSize: '18px',
            color: grey[900],
            lineHeight: "36px"
          }}>
            Проблема с оплатой. Обратитесьза помощью к менеджеру
          </Typography>
          <Link to="/"><PrimaryButton>Вернуться в магазин</PrimaryButton></Link>
        </Box>
      </Box>
    </Box>
  )
}