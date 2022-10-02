import { Container } from "@mui/material"
import React from "react"
import { SliderMain } from "../../components/SliderHomePage/SliderHomePage"
import { ProductsByDiscount } from "../../features/Products/ProductsByDiscount/ProductsByDiscount"

export const Home = () => {
  return (
    <>
      <SliderMain />
      <Container sx={{ maxWidth: "1160px" }}>
        <ProductsByDiscount />
      </Container>
    </>
  )
}
