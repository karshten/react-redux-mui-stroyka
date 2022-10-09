import { Button } from "@mui/material"
import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addToCart, deleteProductFromCart, removeFromCart, setLocalStorageProducts } from "../../features/Basket/actions"
import { yellow, dark, white } from "../../theme/colors"

const stylesButton = {
  bgcolor: yellow[500],
  color: dark[500],
  borderRadius: 0,
  boxShadow: "none",
  height: 48,
  mr: 2,
  py: 1.5,
  "& path": {
    transition: "0.25s",
  },
  "&:hover": {
    bgcolor: dark[600],
    color: white,
  },
  "&:hover path": {
    color: white,
    bgcolor: white,
    stroke: white,
  },
}
const stylesSecondaryButton = {
  border: "1px solid #D1D1D3",
  borderRadius: 0,
  color: dark[500],
  textTransform: "none",
  fontSize: 18,
  fontWeight: 500,
  "&:hover": {
    bgcolor: dark[600],
    color: white,
    borderColor: "transparent",
  },
  "&:hover path": {
    stroke: white,
  },
  "& path": {
    transition: "0.25s",
  },
}

export const PrimaryButton = ({ children, sx, ...props }) => {
  return (
    <Button variant="contained" sx={{ ...stylesButton, ...sx }} {...props}>
      {children}
    </Button>
  )
}

export const PrimaryButtonIcon = ({ children, sx, icon, ...props }) => {
  return (
    <Button
      variant="contained"
      sx={{ ...stylesButton, ...sx }}
      startIcon={icon}
      {...props}
    >
      {children}
    </Button>
  )
}

export const SecondaryButton = ({ children, sx, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{ ...stylesSecondaryButton, ...sx }}
      {...props}
    >
      {children}
    </Button>
  )
}

export const SecondaryButtonIcon = ({ children, icon, sx, ...props }) => {
  return (
    <Button
      variant="outlined"
      sx={{ ...stylesSecondaryButton, ...sx }}
      endIcon={icon}
      {...props}
    >
      {children}
    </Button>
  )
}
export const CountButton = ({ children, sx, ...props }) => {
  return (
    <Button sx={{ minWidth: 'unset', border: '1px solid #D1D1D3', borderRadius: 0, p: '8.7px', ...sx }} {...props} variant="outlined">
      {children}
    </Button>
  )
}

export const makeCartButton = (type, product) => {
  const dispatch = useDispatch()
  const cart = useSelector(({ cart }) => cart)

  const CartButton = ({ isPrimary, children, sx, productItem, ...props }) => {

    const handleAddToCart = () => {
      dispatch(addToCart(product ?? productItem))
    }

    const handleRemoveFromCart = () => {
      dispatch(removeFromCart(product ?? productItem))
    }

    const handleDeleteProdcutFromCart = () => {
      dispatch(deleteProductFromCart(product ?? productItem))
    }

    useEffect(() => {
      const unsub = () => setLocalStorageProducts(cart)

      return () => unsub()
    }, [cart])


    const cartAction = () => {
      switch (type) {
        case "ADD_TO_CART": {
          handleAddToCart()
          break
        }
        case "REMOVE_FROM_CART": {
          handleRemoveFromCart()
          break
        }
        case "DELETE_PRODUCT_FROM_CART": {
          handleDeleteProdcutFromCart()
          break
        }
      }
    }

    return (
      isPrimary ?
        <PrimaryButton onClick={cartAction} sx={{ ...sx }} {...props}>{children}</PrimaryButton> :
        <CountButton onClick={cartAction} sx={{ ...sx }} {...props}>{children}</CountButton>
    )
  }

  return CartButton
}