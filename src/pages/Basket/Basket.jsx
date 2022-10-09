import { Container, Typography } from "@mui/material"
import { Box } from "@mui/system"
import React from "react"
import { Hero } from "./../../components/Hero/Hero"
import basketHero from "img/basket-intro.png"
import { ProductsInformation } from "../../features/Basket/BasketInformation/ProductsInformation"
import { BasketProduct } from "../../features/Basket/BasketProduct/BasketProduct"
import { useDispatch, useSelector } from "react-redux"
import { Error } from "../../components/Error/Error"
import { useEffect } from "react"
import { checkProductsInLocalStorage } from "../../features/Basket/actions"

export const Basket = () => {
  const cartItems = useSelector((state) => state.cart?.items)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkProductsInLocalStorage())
  }, [])
  
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
      <Error content="Пожалуйста, авторезуйтесь чтобы провести оплату." />

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
        <ProductsInformation />
        <Box>
          {Object.keys(cartItems).map((key) => {
            return <BasketProduct key={key} {...cartItems[key]} />
          })}
        </Box>
      </Container>
    </>
  )
}
