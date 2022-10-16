import { Box, Container } from '@mui/system'
import React from 'react'
import { Grid } from '@mui/material';
import { Hero } from './../../components/Hero/Hero';
import orderHero from "img/order-intro.png"
import { useParams } from 'react-router-dom';

export const OrderDescription = () => {
  const { id } = useParams()
  return (
    <>
      <Hero
        props={{
          imgUrl: orderHero,
          title: "Заказы",
          caption: "",
          path: [
            {
              point: "/",
              name: "Главная",
            },
            {
              point: "/orders",
              name: "Заказы",
            },
          ],
        }}
        sx={{ my: '40px' }}
      />
      <Container sx={{ maxWidth: '1160px' }} >
        {id}
      </Container>
    </>
  )
}
