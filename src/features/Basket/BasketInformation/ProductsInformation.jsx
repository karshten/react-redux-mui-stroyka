import { Box, List, Typography, ListItem } from "@mui/material"
import { PrimaryButton } from "../../../components/Button/Button"
import { grey, dark } from "../../../theme/colors"
import order from "icons/order.svg"
import delivery from "icons/delivery.svg"
import info from "icons/info.svg"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { checkProductsInLocalStorage, resetCart, setToCart } from "../actions"
import { addOrderAsync } from "../../Orders/actions"
import { useNavigate } from "react-router-dom"

const infoDelivery = [
  { label: "Можно сделать заказ только от одного поставщика", src: info },
  {
    label:
      "Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика",
    src: delivery,
  },
  {
    label:
      "Точная сумма доставки будет определена после после подтверждения заказа",
    src: order,
  },
]
export const ProductsInformation = () => {
  const { totalPrice, totalCount, providers, items } = useSelector((state) => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleConfirmOrders = () => {
    dispatch(addOrderAsync({
      totalPrice,
      totalCount,
      providers,
      items,
      createdAt: new Date()
    }))
    dispatch(resetCart())
    localStorage.setItem('products', "")
    navigate('/thank')
  }

  useEffect(() => {
    if (!totalCount) {
      dispatch(checkProductsInLocalStorage())
    }
  }, [])
  return (
    <Box>
      <Box>
        <Box p={2} border={`2px solid ${grey[500]}`}>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "18px",
              color: dark[500],
              mb: 1.5,
            }}
          >
            Итого
          </Typography>
          <List sx={{ p: 0 }}>
            <ListItem
              sx={{
                p: 0,
                m: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  p: 0,
                  mb: 1.5,
                  fontWeight: "500",
                  fontSize: "16px",
                  color: dark[700],
                }}
              >
                Количество товара
              </Typography>
              <Typography
                sx={{
                  p: 0,
                  mb: 1.5,
                  fontWeight: "500",
                  fontSize: "16px",
                  color: dark[700],
                }}
              >
                {totalCount} шт.
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                p: 0,
                m: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  p: 0,
                  mb: 1.5,
                  fontWeight: "500",
                  fontSize: "16px",
                  color: dark[700],
                }}
              >
                Товаров на сумму
              </Typography>
              <Typography
                sx={{
                  p: 0,
                  mb: 1.5,
                  fontWeight: "500",
                  fontSize: "16px",
                  color: dark[700],
                }}
              >
                {totalPrice} ₽
              </Typography>
            </ListItem>
            <ListItem
              sx={{
                p: 0,
                m: 0,
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  p: 0,
                  fontWeight: "500",
                  fontSize: "16px",
                  color: dark[700],
                }}
              >
                Поставщик
              </Typography>
              <Typography
                sx={{
                  p: 0,
                  fontWeight: "500",
                  fontSize: "16px",
                  color: dark[700],
                }}
              >
                {Object.keys(providers).map((key) => (
                  <Typography key={key} sx={{
                    color: "#333333"
                  }}>{key}</Typography>
                ))}
              </Typography>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ p: 2, border: `2px solid ${grey[500]}`, borderTop: "none" }}>
          <PrimaryButton
            onClick={handleConfirmOrders}
            sx={{
              textTransform: "none",
              fontWeight: "500",
              width: "100%",
              fontSize: "18px",
            }}
          >
            Оформить заказ
          </PrimaryButton>
        </Box>
      </Box>
      <List mt={1.5}>
        {infoDelivery.map((item) => (
          <ListItem
            key={item.label}
            sx={{ display: "flex", alignItems: "flex-start" }}
          >
            <Box component="img" mr={1.5} src={item.src} />
            <Typography
              sx={{
                color: grey[900],
                fontWeight: "500",
                fontSize: "15px",
              }}
            >
              {item.label}
            </Typography>
          </ListItem>
        ))}
      </List>
    </Box>
  )
}
