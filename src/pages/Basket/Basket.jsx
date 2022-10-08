import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { Hero } from "./../../components/Hero/Hero"
import basketHero from "img/basket-intro.png"
import { ProductsInformation } from "../../features/Basket/BasketInformation/ProductsInformation"
import { BasketProduct } from "../../features/Basket/BasketProduct/BasketProduct"
import { useSelector } from "react-redux"
import { dark } from "../../theme/colors"
import { Error } from "../../components/Error/Error"

export const Basket = () => {
  const cartItems = useSelector((state) => state.cart?.items)
  return (
    <>
      <Hero
        props={{
          imgUrl: basketHero,
          title: "Корзина",
          caption: "",
          path: [
            {
              point: "/",
              name: "Главная",
            },
            {
              point: "/basket",
              name: "Корзина",
            },
          ],
        }}
        sx={{ my: "40px" }}
      />
      <Error content="Пожалуйста, авторезуйтесь чтобы провести оплату."/>

      <Container
        sx={{
          maxWidth: "1160px",
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gridTemplateRows: "1fr",
          gridColumnGap: "16px",
          p: "0 !important"
        }}
      >
        {JSON.stringify(cartItems).trim().length > 2 ?
          <>
            <ProductsInformation />
            <Box>
              {Object.keys(cartItems).map((key) => {
                return <BasketProduct key={key} {...cartItems[key]} />
              })}
            </Box>
          </> :
          <Typography sx={{
            color: dark[600],
            fontSize: '28px',
            fontWeight: 600
          }}>Корзина пуста</Typography>}
      </Container>
    </>
  )
}
