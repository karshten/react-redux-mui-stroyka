import React, { memo } from "react"
import { KeyBoard } from "./KeyBoard"
import { Box, Typography, List, Divider } from "@mui/material"
import { dark } from "../../theme/colors"
import { Link } from "react-router-dom"
import arrowRight from "icons/arrow-right-16.svg"

export const AlphabetList = React.memo(
  ({ list }) => {
    return (
      <div>
        <KeyBoard />
        {list?.length > 0 ? (
          list.map((item, idx) => (
            <Box key={item.letter}>
              <List
                sx={{
                  display: "flex",
                  maxWidth: "100%",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    width: "200px",
                    fontSize: "34px",
                    fontWeight: "600",
                    color: "#333333",
                    p: "0 !important",
                  }}
                >
                  {item.letter}
                </Typography>
                <Box sx={{ display: "flex", flexWrap: "wrap", width: "100%" }}>
                  {item.items.map((name) => (
                    <Box
                      key={item.letter + name}
                      sx={{
                        mb: "12px",
                        flex: "1 0 20%",
                        maxWidth: "20%",
                        position: "relative",
                        transition: ".3s",
                        "& a": {
                          textDecoration: "none",
                          display: "flex",
                          alignItems: "center",
                          "&::before": {
                            content: '""',
                            display: "block",
                            width: "0",
                            height: "14px",
                            opacity: "0",
                            background: `url(${arrowRight}) no-repeat`,
                            mr: "7px",
                            transition: ".3s",
                          },
                          "&:hover": {
                            "&:before": {
                              opacity: 1,
                              width: "14px",
                            },
                          },
                        },
                      }}
                    >
                      <Link display="inline-block" to="/brands">
                        <Typography sx={{ color: dark[600] }}>
                          {name}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </List>
              {idx + 1 >= list.length ? (
                ""
              ) : (
                <Divider sx={{ m: "25px 0", backgroundColor: "#E8E9EA" }} />
              )}
            </Box>
          ))
        ) : (
          <Typography
            sx={{ fontSize: "28px", fontWeight: "700", color: dark[600] }}
          >
            Таких брендов нет :(
          </Typography>
        )}
      </div>
    )
  },
  (prevProps, nextProps) => {
    return JSON.stringify(prevProps.list) === JSON.stringify(nextProps.list)
  }
)
