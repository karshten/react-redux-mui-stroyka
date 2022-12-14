import React from "react"
import {
  Box,
  Container,
  TextField,
  List,
  ListItem,
  Typography,
} from "@mui/material"
import { dark, grey } from "theme/colors"
import userIcon from "icons/user.svg"
import orderIcon from "icons/order.svg"
import basketIcon from "icons/basket.svg"
import { MenuIcon, SearchIcon } from "icons"
import { PrimaryButtonIcon } from "../Button/Button"
import { LogoIcon } from "../../assets/icons"
import { Login } from "features/Auth/Login/Login"
import { useState } from "react"
import { SignUp } from "features/Auth/SignUp/SignUp"
import { useNavigate } from "react-router-dom"

const stylesInput = {
  "& > div": {
    height: 48,
    borderRadius: 0,
    width: 440,
    "&:hover:not(.Mui-disabled):before": {
      borderWidth: "2px",
    },
    "&:before": {
      borderBottomColor: grey[700],
    },
    "&:after": {
      borderBottomColor: grey[700],
    },
    "& input": {
      pt: 1.25,
      fontWeight: 500,
      fontSize: 18,
      color: dark[900],
    },
  },
}

export const MiddleHeader = () => {
  const navItems = [
    { label: "Профиль", icon: userIcon, isAuthtorized: false, path: '/personal-area' },
    { label: "Заказы", icon: orderIcon, path: '/orders' },
    { label: "Корзина", icon: basketIcon, path: '/basket' },
  ]
  const [loginPopupOpen, setLoginPopupOpen] = useState(false)
  const [signUpPopupOpen, setSignUpPopupOpen] = useState(false)
  const navigate = useNavigate()

  const toggleSignUpPopUp = (payload) => {
    setSignUpPopupOpen(payload)
  }

  const toggleLoginPopUp = (payload) => {
    setLoginPopupOpen(payload)
  }

return (
  <Box py={2}>
    <Container sx={{ maxWidth: "1160px" }}>
      {loginPopupOpen && <Login closeLogin={toggleLoginPopUp} openSignUp={setSignUpPopupOpen} />}
      {signUpPopupOpen && <SignUp closeSignUp={toggleSignUpPopUp} />}
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <LogoIcon onClick={() => navigate('/')} />
        <Box display="flex">
          <Box display="flex" alignItems="center">
            <PrimaryButtonIcon icon={<MenuIcon />}>Каталог</PrimaryButtonIcon>
            <TextField
              variant="filled"
              placeholder="Поиск"
              classes={{ underline: "red" }}
              InputProps={{
                endAdornment: <SearchIcon />,
              }}
              sx={stylesInput}
            />
          </Box>
          <Box ml={2}>
            <List sx={{ display: "flex" }}>
              {navItems.map((item, idx) => (
                <ListItem
                  onClick={() => idx === 0 && !item?.isAuthtorized ? setLoginPopupOpen(true) : navigate(item.path)}
                  key={item.label}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    color: grey[900],
                    cursor: "pointer",
                    "&:last-child": {
                      pr: 0,
                    },
                    "& :hover": {
                      color: dark[600],
                    },
                  }}
                >
                  <img src={item.icon} />
                  <Typography fontSize={15} fontWeight={500}>
                    {item.label}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </Box>
    </Container>
  </Box>
)
}
