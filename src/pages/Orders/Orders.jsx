import { Box, Container } from '@mui/system'
import React from 'react'
import { OrderProduct } from './OrderProduct';
import { Grid } from '@mui/material';
import { Intro } from './../../components/Intro/Intro';
import orderIntro from "img/order-intro.png"

export const Orders = () => {
  return (
    <>
      <Intro
        props={{
          imgUrl: orderIntro,
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
        <Box>
          <Grid container direction='column' >
            <OrderProduct />
            <OrderProduct />
            <OrderProduct />
            <OrderProduct />
          </Grid>
        </Box>
      </Container>
    </>

  )
}
