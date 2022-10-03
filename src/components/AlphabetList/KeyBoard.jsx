import React, { useEffect } from "react"
import { Box, Typography } from "@mui/material"
import { useState } from "react"
import { useDispatch } from "react-redux"
import {
  filterBrandListAsync,
  setBrandListAsync,
} from "../../features/Brands/actions"
import { useNavigate, useSearchParams } from "react-router-dom"

const englishAlphabet = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
]
const russianAlphabet = [
  "А",
  "Б",
  "В",
  "Г",
  "Д",
  "Е",
  "Ё",
  "Ж",
  "З",
  "И",
  "Й",
  "К",
  "Л",
  "М",
  "Н",
  "О",
  "П",
  "Р",
  "С",
  "Т",
  "У",
  "Ф",
  "Х",
  "Ц",
  "Ч",
  "Ш",
  "Щ",
  "Ъ",
  "Ы",
  "Ь",
  "Э",
  "Ю",
  "Я",
]

const letterStyles = {
  border: "1px solid #D1D1D3",
  padding: "4px 12px",
  mr: 1,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: ".3s",
  "&:hover": {
    backgroundColor: "#FBE303",
  },
}
const letterFontStyles = {
  fontSize: "18px",
  color: "#171B24",
  fontWeight: "500",
}

export const KeyBoard = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [searchParams, setSearchParams] = useSearchParams()
  const [activeLetter, setActiveLetter] = useState("Все")

  const handleFilterByActiveLtter = (letter) => {
    dispatch(filterBrandListAsync(letter))
    setActiveLetter(letter)
    navigate(`/brands?letter=${letter}`)
  }

  const handleGetAllBrands = () => {
    dispatch(setBrandListAsync())
    setActiveLetter("Все")
    navigate(`/brands`)
  }

  useEffect(() => {
    console.log("from keyboard");
    const letter = searchParams.get("letter")
    if (letter) {
      dispatch(filterBrandListAsync(letter))
      setActiveLetter(letter)
    } else dispatch(setBrandListAsync())

    return () => {
      
    }
  }, [searchParams])

  return (
    <Box sx={{ display: "flex", flexWrap: "wrap", mb: "30px" }}>
      <Box
        onClick={() => handleGetAllBrands()}
        sx={{
          ...letterStyles,
          backgroundColor: activeLetter === "Все" ? "#FBE303" : "#fff",
        }}
      >
        <Typography sx={letterFontStyles}>Все</Typography>
      </Box>
      {[...englishAlphabet, ...russianAlphabet].map((item) => (
        <Box
          onClick={() => handleFilterByActiveLtter(item)}
          key={item}
          sx={{
            ...letterStyles,
            backgroundColor: activeLetter === item ? "#FBE303" : "#fff",
          }}
        >
          <Typography sx={letterFontStyles}>{item}</Typography>
        </Box>
      ))}
    </Box>
  )
}
