import { Box } from "@mui/material"
import { Typography } from "@mui/material"
import { dark } from "theme/colors"
import { CountButton, makeCartButton } from "../../../components/Button/Button"
import plus from "icons/plus.svg"
import minus from "icons/minus.svg"

export const BasketProduct = (product) => {
  const { img, price, name, code, count } = product
  const AddToCartButton = makeCartButton('ADD_TO_CART', product)
  const RemoveFromCartButton = makeCartButton('REMOVE_FROM_CART', product)
  const DeleteProductFromCartButton = makeCartButton('DELETE_PRODUCT_FROM_CART', product)

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gridTemplateRows: "1fr",
        border: "1px solid #E8E9EA",
        mb: 2,
        position: "relative",
      }}
    >
      <Box p={2}>
        <Box
          height={200}
          sx={{ objectFit: "cover" }}
          component="img"
          maxWidth="100%"
          src={img}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          borderLeft: "1px solid #E8E9EA",
        }}
        p={2}
      >
        <Typography fontSize={16} color={dark[600]} fontWeight={500}>
          {name}
        </Typography>
        <Typography fontSize={20} fontWeight={700} color={dark[500]}>
          {price} ₽
        </Typography>
        <Box display="flex">
          <AddToCartButton isPrimary={false}><Box component='img' src={plus} /></AddToCartButton>
          <CountButton sx={{ p: ' 8px 16px' }}>
            <Typography sx={{
              color: dark[500],
              fontSize: '18px',
              fontWeight: 500
            }}>
              {count}
            </Typography>
          </CountButton>
          <RemoveFromCartButton isPrimary={false}><Box component='img' src={minus} /></RemoveFromCartButton>
        </Box>
      </Box>
      <Box
        p={2}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography fontSize={16} color={dark[600]} fontWeight={500}>
            Код товара:
          </Typography>
          <Typography fontSize={16} color={dark[600]} fontWeight={500}>
            {code}
          </Typography>
        </Box>
        <DeleteProductFromCartButton
          sx={{
            fontSize: 18,
            color: dark[500],
            textTransform: "none",
            fontWeight: 500,
            border: "1px solid #D1D1D3",
            borderRadius: 0,
          }}
          variant="outlined"
        >
          Удалить товар
        </DeleteProductFromCartButton>
      </Box>
    </Box>
  )
}
