import { Typography, Box } from '@mui/material'
import React from 'react'
import aboutCompanyBackground from 'img/aboutCompanyBackground.jpg'
import { dark } from '../../theme/colors'

export const About = ({ title, description }) => {
  return (
    <Box sx={{
      maxWidth: '1360px',
      m: '0 auto',
      background: `url(${aboutCompanyBackground}) no-repeat center`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '456px'
    }}>
      <Box sx={{
        width: '960px',
      }}>
        <Box sx={{ maxWidth: '670px' }}>
          <Typography
            sx={{
              fontSize: '34px',
              fontWeight: 600,
              color: dark[500],
              mb: '20px'
            }}>{title}
          </Typography>
          <Typography sx={{
            fontWeight: 400,
            fontSize: "16px",
            mt: "20px"
          }}>
            {description[0]}
            <span style={{ marginTop: '20px', display: "inline-block" }}>
              {description[1]}
            </span>
          </Typography>
        </Box>
      </Box>
    </Box>
  )
}
