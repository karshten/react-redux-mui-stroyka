import { List, Typography, Box, ListItem } from "@mui/material"
import React from "react"
import basketIcon from "icons/basket-icon.svg"
import pointOfIssue from "icons/point-of-issue.svg"
import cube from "icons/cube.svg"
import bell from "icons/bell.svg"
import { dark } from "theme/colors"

const InstructionIconText = [
  {
    label: "Добавьте нужные товары в корзину и оплатите заказ",
    src: basketIcon,
  },
  { label: "Получите уведомления о подтверждении вашего заказа", src: bell },
  { label: "После подтверждения мы сформируем ваш заказ", src: cube },
  { label: "Заберите из пунктов  выдачи", src: pointOfIssue },
]
export const OrderInstruction = () => {
  return (
    <>
      <Typography
        sx={{ fontWeight: 600, fontSize: 34, color: dark[600], mb: 4 }}
      >
        Как сделать заказ: 4 простых шага
      </Typography>
      <List sx={{ display: "flex" }}>
        {InstructionIconText.map((item) => (
          <ListItem
            sx={{ display: "block", maxWidth: "100%" }}
            key={item.label}
          >
            <Box component="img" display="block" src={item.src} />
            <Typography
              sx={{ color: dark[600], fontWeight: 500, fontSize: 16, mt: 1.5 }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </>
  )
}
