import { Container } from "@mui/system"
import React from "react"
import { OrderInstruction } from "./OrderInstruction"
import { Accordions } from "../../features/Questions/Accordions/Accordions"

export const Delivery = () => {
  return (
    <>
      <Container sx={{ maxWidth: "1160px" }}>
        <OrderInstruction />
        <Accordions />
      </Container>
    </>
  )
}
