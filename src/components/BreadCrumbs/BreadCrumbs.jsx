import React from "react"
import { List, ListItem, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import { ArrowRight } from "../../assets/icons/index"
import { grey } from "../../theme/colors"

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

export const BreadCrumbs = ({ listOfPath, sx }) => {
  return (
    <List sx={{...sx}}>
      {listOfPath?.length > 0 && listOfPath?.map((item, idx) => (
        <ListItem key={item.point} sx={pathItemStyles}>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              "& path": { stroke: "grey[900]" },
            }}
          >
            <Link to={item.point}>{item.name}</Link>
            {idx + 1 >= listOfPath.length ? "" : <ArrowRight />}
          </Typography>
        </ListItem>
      ))}
    </List>
  )
}
