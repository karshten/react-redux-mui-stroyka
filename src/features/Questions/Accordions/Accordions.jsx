import { Box, CircularProgress, Typography } from "@mui/material"
import Accordion from "@mui/material/Accordion"
import AccordionSummary from "@mui/material/AccordionSummary"
import AccordionDetails from "@mui/material/AccordionDetails"
import { ArrowDown } from "icons"
import { grey, dark } from "theme/colors"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setQuestionsAsync } from "../actions"

export const Accordions = () => {
  const dispatch = useDispatch()
  const { items, isLoading } = useSelector((state) => state.questions)

  useEffect(() => {
    dispatch(setQuestionsAsync())
  }, [])
  return (
    <Box
      sx={{
        border: `1px solid ${grey[700]}`,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        my: 10,
        minHeight: 500,
      }}
    >
      {isLoading ? (
        <Box display="flex" justifyContent="center" alignItems="center">
          <CircularProgress size={80} />
        </Box>
      ) : (
        <Box sx={{ my: 10 }}>
          <Typography sx={{ color: dark[600], fontWeight: 600, fontSize: 34 }}>
            Часто задаваемые вопросы
          </Typography>
          {items.map((item) => (
            <Accordion
              key={item.id}
              sx={{ maxWidth: 760, mb: 1.5, boxShadow: "none", border: "none" }}
            >
              <AccordionSummary
                sx={{ background: grey[500] }}
                expandIcon={<ArrowDown />}
              >
                <Typography
                  sx={{ fontWeight: 500, fontSize: 18, color: dark[600] }}
                >
                  {item.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ background: grey[500] }}>
                <Typography
                  sx={{ fontWeight: 400, fontSize: 16, color: dark[600] }}
                >
                  {item.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      )}
    </Box>
  )
}
