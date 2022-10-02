import React from "react"
import {
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { Link } from 'react-router-dom'
import map from "icons/map.svg"
import { grey } from "theme/colors"

const navItems = [
  {
    name: "Бренды",
    path: "/brands",
  },
  {
    name: "Доставка",
    path: "/delivery"
  },
  {
    name: "Возврат",
    path: "/refund"
  },
  {
    name: "Документация",
    path: "/docs"
  },
  {
    name: "Контакты",
    path: "/contacts"
  }
]

export const TopHeader = () => {
  return (
    <Box py="10px" bgcolor={grey[500]}>
      <Container sx={{ maxWidth: "1160px" }}>
        <Box display="flex" alignItems="center">
          <Box component="img" src={map} alt="Map" mr={1} />
          <Typography
            flex={1}
            variant="subtitle1"
            fontSize={15}
            fontWeight={500}
            color={grey[800]}
          >
            Москва
          </Typography>
          <List sx={{ display: "flex", p: 0, "& a": { textDecoration: 'none' } }}>
            {navItems.map((item) => (
              <Link to={item?.path} key={item.name}>
                <ListItem
                  sx={{ ml: 3, cursor: "pointer" }}
                  disablePadding
                >
                  <ListItemText primary={item.name} sx={{ color: grey[800] }} />
                </ListItem>
              </Link>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  )
}
