import React from "react"
import { Container } from "@mui/material"
import { Hero } from "../../components/Hero/Hero"
import intro from "img/slider-item-1.png"
import { ProductList } from "../../components/ProductList/ProductList"
import { CompanyContent } from "../../components/ProductList/CompanyContent"
import { AlphabetList } from "../../components/AlphabetList/AlphabetList"
import { useSelector } from "react-redux"

export const Brands = () => {
  const list = useSelector((state) => state.brands?.list)

  return (
    <>
      <Hero
        props={{
          imgUrl: intro,
          title: "Все бренды",
          caption: "",
          path: [
            {
              point: "/",
              name: "Главная",
            },
            {
              point: "/brands",
              name: "Все брэнды",
            },
          ],
        }}
      />
      <Container sx={{ maxWidth: "1160px", p: "0 !important"}}>

        <ProductList title="Популярные бренды" moreAbout="Все бренды" btnText="Все бренды">
          <CompanyContent />
        </ProductList>
        <AlphabetList list={list} />
      </Container>
    </>

  )
}
