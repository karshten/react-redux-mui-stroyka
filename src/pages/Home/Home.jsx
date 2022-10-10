import { Container } from "@mui/material"
import React from "react"
import { About } from "../../components/AbountSomething/About"
import { SliderMain } from "../../components/SliderHomePage/SliderHomePage"
import { ProductsByDiscount } from "../../features/Products/ProductsByDiscount/ProductsByDiscount"

export const Home = () => {
  return (
    <>
      <SliderMain />
      <Container sx={{ maxWidth: "1160px" }}>
        <ProductsByDiscount />
      </Container>
      <About title="О компании" description={
        [
          "В СтройкаСтор вы всегда можете купить все необходимые товары для ремонта дома и дачи. Хотите сделать ремонт в квартире? Строите загородный дом? Используйте строительные и отделочные материалы из нашего каталога.",
          "Быстрая доставка строительных товаров по низким ценам сделает ваши покупки более приятными. Ремонт может стоить дешево, если делать его с нами. Для вас всегда в наличии более 30 000 товаров для строительства по низким ценам каждый день. СтройкаСтор — это широкий ассортимент товаров для дома и ремонта недорого; Возможность заказать строительные и отделочные материалы для дома и дачи."
        ]
      } />
    </>
  )
}
