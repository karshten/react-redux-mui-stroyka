import { Container } from '@mui/material'
import React from 'react'
import { Hero } from '../../components/Hero/Hero'

export const Contacts = () => {
  return (
    <Container sx={{ MaxWidth: "1160px !important" }}>
      <Hero props={{
        title: "Конаткты",
        path: [
          {
            point: "/",
            name: "Главная",
          },
          {
            point: "/contacts",
            name: "Конаткты",
          },
        ],
      }} />
    </Container>
  )
}
