import React from "react"
import { Box, List, ListItem, Container, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { dark, grey } from "../../theme/colors"
import { ArrowRight } from "../../assets/icons/index"

const pathItemStyles = {
  display: "inline-block",
  width: "auto",
  padding: 0,
  "& a": {
    color: grey[900],
    fontWeight: "400",
    fontSize: "16px",
    textDecoration: "none",
    lineHeight: "24px",
  },
}

export const Intro = React.memo(({ props, sx }) => {
  return (
    <Box
      sx={{
        background: `url(${props.imgUrl}) no-repeat`,
        backgroundSize: "cover",
        minHeight: "232px",
        padding: "40 0 60px",
        p: '0 !important',
        maxWidth: '1360px',
        m: 'auto',
        ...sx,
      }}
    >
      <Container sx={{ maxWidth: "1160px", p: '0 !important',  }}>
        <List>
          {props?.path?.map((item, idx) => (
            <ListItem key={item.point} sx={pathItemStyles}>
              <Typography
                sx={{
                  display: "flex",
                  alignItems: "center",
                  "& path": { stroke: "grey[900]" },
                }}
              >
                <Link to={item.point}>{item.name}</Link>
                {idx + 1 >= props.path.length ? "" : <ArrowRight />}
              </Typography>
            </ListItem>
          ))}
        </List>
        <Box sx={{ maxWidth: "520px" }}>
          <Typography
            sx={{
              fontSize: "48px",
              fontWeight: "700",
              mt: 2.5,
              color: dark[500],
            }}
          >
            {props.title}
          </Typography>
          {props?.caption?.length ? (
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                mt: 2.5,
                color: dark[600],
              }}
            >
              {props.caption}
            </Typography>
          ) : (
            ""
          )}
        </Box>
      </Container>
    </Box>
  )
}, (prevProps, nextProps) => JSON.stringify(prevProps.props) === JSON.stringify(nextProps.props))
