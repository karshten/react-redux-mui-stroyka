import { Box, Container } from '@mui/system'
import React from 'react'
import { OrderProduct } from './OrderProduct';
import { Grid } from '@mui/material';
import { Hero } from './../../components/Hero/Hero';
import orderHero from "img/order-intro.png"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getOrdersAsync } from '../../features/Orders/actions';

export const Orders = () => {
  const dispatch = useDispatch()
  const orders = useSelector(state => state.orders.items)

  useEffect(() => {
    dispatch(getOrdersAsync())
  }, [])

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
        <Box>
          <Grid container direction='column' >
            {orders?.map(order => (
              <OrderProduct {...order} key={order?.id}/>
            ))}
          </Grid>
        </Box>
      </Container>
    </>

  )
}
