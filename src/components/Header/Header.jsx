import React from "react"
import {
  AppBar,
  Box,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import { white, grey } from "theme/colors"
import { TopHeader } from "./TopHeader"
import { MiddleHeader } from "./MiddleHeader"

const items = [
  "Акции",
  "Строительные материалы",
  "Керамическая плитка",
  "Краски",
  "Сантехника",
  "Напольные покрытия",
  "Инструменты",
  "Обои",
  "Окна",
]

export const Header = () => {
  return (
    <AppBar sx={{ bgcolor: white, boxShadow: "none", position: "static", mb: 5 }}>
      <TopHeader />
      <MiddleHeader />
      <Box>
        <Divider />
        <Container sx={{ maxWidth: "1160px" }}>
          <List
            sx={{ display: "flex", justifyContent: "space-between", py: 0 }}
          >
            {items.map((item) => (
              <ListItem
                key={item}
                sx={{
                  "&:first-of-type": {
                    pl: 0,
                  },
                }}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    color: grey[900],
                    width: "min-content",
                    whiteSpace: "pre",
                    fontWeight: 500,
                    cursor: "pointer",
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Container>
        <Divider />
      </Box>
    </AppBar>
  )
}
