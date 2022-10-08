import React, { useState } from 'react'
import { Box, Modal, Typography } from "@mui/material"
import { dark, grey } from '../../theme/colors'
import { PrimaryButton } from '../Button/Button'
import { Link } from 'react-router-dom'

export const Error = ({ isOpen, content, title }) => {
  const [open, setOpen] = useState(false)

  const onClose = () => {
    setOpen(false)
  }
  return (
    <Modal
      open={isOpen ?? open}
      onCLose={onClose}
      sx={{
        background: "rgba(23, 27, 36, 0.6)",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
      <Box sx={{
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
            {title ?? "Ошибка"}
          </Typography>
          <Typography sx={{
            m: '12px 0 24px',
            fontSize: '18px',
            color: grey[900],
            lineHeight: "36px"
          }}>
            {content ?? "Проблема с оплатой. Обратитесьза помощью к менеджеру"}
          </Typography>
          <Link to="/" onClick={onClose}><PrimaryButton>Вернуться в магазин</PrimaryButton></Link>
        </Box>
      </Box>
    </Modal>
  )
}