import {
  AppBar,
  Box,
  Container,
  List,
  Typography,
  ListItem,
  Divider,
} from "@mui/material"
import { dark, grey, white } from "./../../theme/colors"
import { Link } from "react-router-dom"
import visaImg from "img/visa-img.png"
import arrowRightWhite from "icons/arrow-right-white.svg"
import { LogoIcon, MapIcon, MailIcon } from "../../assets/icons"

const userLinks = ["Личный кабинет", "Заказы", "Избранное", "Корзина"]
const section = ["Каталог", "Акции", "Бренды", "Контакты"]
const sellersLinks = ["Стать продавцом", "Доставка", "Возврат", "Документация"]

export const Footer = () => {
  return (
    <AppBar
      component="footer"
      sx={{
        bgcolor: dark[600],
        boxShadow: "none",
        position: "static",
        p: "40px 0 25px",
        mt: 10
      }}
    >
      <Container sx={{ maxWidth: "1160px" }}>
        <Box
          mr={4}
          color="#E8E9EA"
          fontSize={16}
          fontWeight={500}
          display="flex"
          justifyContent="space-between"
        >
          <Box>
            <Link to="/">
              <LogoIcon textColor={white} />
            </Link>
            <List sx={{ mt: 3, p: 0 }}>
              <ListItem sx={{ p: 0, mb: 2, cursor: "pointer" }}>
                <Box mr={1.1}>
                  <MailIcon color="#fff" />
                </Box>
                <Typography>info@stroykastore.ru</Typography>
              </ListItem>
              <ListItem sx={{ p: 0, cursor: "pointer" }}>
                <Box mr={1.1}>
                  <MapIcon color="#fff" />
                </Box>
                <Typography>Москва, ул. Камушкина 10</Typography>
              </ListItem>
            </List>
          </Box>
          <List>
            {userLinks.map((link) => (
              <ListItem
                sx={{
                  p: 0,
                  mb: 1.5,
                  cursor: "pointer",
                  width: "180px",
                  "&::before": {
                    content: '""',
                    display: "block",
                    width: "0",
                    height: "22px",
                    opacity: "0",
                    background: `url(${arrowRightWhite}) no-repeat`,
                    mr: "7px",
                    transition: ".3s",
                  },
                  "&:hover": {
                    "&:before": {
                      opacity: 1,
                      width: "22px",
                    },
                  }
                }}
                key={link}
              >
                <Box component="img" mr={0.5} display="none" src={arrowRightWhite} />
                <Typography>{link}</Typography>
              </ListItem>
            ))}
          </List>
          <List>
            {section.map((link) => (
              <ListItem
                sx={{
                  p: 0,
                  mb: 1.5,
                  cursor: "pointer",
                  width: "120px",
                  "&::before": {
                    content: '""',
                    display: "block",
                    width: "0",
                    height: "22px",
                    opacity: "0",
                    background: `url(${arrowRightWhite}) no-repeat`,
                    mr: "7px",
                    transition: ".3s",
                  },
                  "&:hover": {
                    "&:before": {
                      opacity: 1,
                      width: "22px",
                    },
                  },
                }}
                key={link}
              >
                <Typography>{link}</Typography>
              </ListItem>
            ))}
          </List>
          <List>
            {sellersLinks.map((link) => (
              <ListItem
                sx={{
                  p: 0,
                  mb: 1.5,
                  cursor: "pointer",
                  width: "180px",
                  "&::before": {
                    content: '""',
                    display: "block",
                    width: "0",
                    height: "22px",
                    opacity: "0",
                    background: `url(${arrowRightWhite}) no-repeat`,
                    mr: "7px",
                    transition: ".3s",
                  },
                  "&:hover": {
                    "&:before": {
                      opacity: 1,
                      width: "22px",
                    },
                  }
                }}
                key={link}
              >
                <Typography>{link}</Typography>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider sx={{ background: grey[800] }} />
        <Box
          mt={3}
          fontSize={16}
          fontWeight={500}
          color={grey[700]}
          display="flex"
          justifyContent="space-between"
        >
          <Typography>© СтройкаСтор</Typography>
          <Box component="img" src={visaImg} />
          <Typography>Cделано в KRUGLOV STUDIO</Typography>
        </Box>
      </Container>
    </AppBar >
  )
}
