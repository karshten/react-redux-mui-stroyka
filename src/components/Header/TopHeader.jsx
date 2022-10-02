import React from "react"
import {
  AppBar,
  Box,
  Typography,
  Container,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import map from "icons/map.svg"
import { grey } from "theme/colors"

const navItems = ["Бренды", "Доставка", "Возврат", "Документация", "Контакты"]

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
          <List sx={{ display: "flex", p: 0 }}>
            {navItems.map((item) => (
              <ListItem
                sx={{ ml: 3, cursor: "pointer" }}
                key={item}
                disablePadding
              >
                <ListItemText primary={item} sx={{ color: grey[800] }} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </Box>
  )
}
