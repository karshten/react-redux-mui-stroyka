import React from "react"
import { Box, Container, Typography } from "@mui/material"
import { dark } from "../../theme/colors"
import { BreadCrumbs } from "../BreadCrumbs/BreadCrumbs"

export const Hero = React.memo(({ props, sx }) => {
  const { imgUrl, path, caption, title } = props
  return (
    <Box
      sx={{
        background: `url(${imgUrl ? imgUrl : null}) no-repeat`,
        backgroundSize: "cover",
        minHeight: "232px",
        padding: "40 0 60px",
        p: '0 !important',
        maxWidth: '1360px',
        m: 'auto',
        ...sx,
      }}
    >
      <Container sx={{ maxWidth: "1160px", p: '0 !important', }}>
        <BreadCrumbs listOfPath={path ? path : []} />
        <Box sx={{ maxWidth: "520px" }}>
          {title?.length > 0 &&
            <Typography
              sx={{
                fontSize: "48px",
                fontWeight: "700",
                mt: 2.5,
                color: dark[500],
              }}
            >
              {title}
            </Typography>
          }

          {caption?.length > 0 && (
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "400",
                mt: 2.5,
                color: dark[600],
              }}
            >
              {caption}
            </Typography>
          )}
        </Box>
      </Container>
    </Box>
  )
}, (prevProps, nextProps) => JSON.stringify(prevProps.props) === JSON.stringify(nextProps.props))
