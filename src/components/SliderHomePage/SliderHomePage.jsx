import { Container, Button, Box } from "@mui/material"
import { Typography } from "@mui/material"
import { dark, grey } from "theme/colors"
import bgImgSlider from "img/slider-item-1.png"
import arrowNext from "icons/arrow-right.svg"
import arrowPrev from "icons/arrow-left.svg"

import "swiper/css"
import "swiper/css/navigation"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper"
import { white, yellow } from "./../../theme/colors"

const styleSlider = {
  position: "relative",
  mt: "40px",
  "& .swiper-button-next": {
    backgroundImage: `url(${arrowNext}) `,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto",
    backgroundColor: white,
    p: "1px 10px",
    opacity: "1",
    top: "85%",
    left: "84%",
    border: "1px solid #D1D1D3",
  },
  "& .swiper-button-next::after": {
    display: "none",
  },
  "& .swiper-button-prev": {
    backgroundImage: `url(${arrowPrev})`,
    backgroundRepeat: " no-repeat",
    backgroundPosition: "center",
    backgroundSize: "auto",
    position: "absolute",
    p: "1px 10px",
    backgroundColor: white,
    opacity: "1",
    top: "85%",
    border: "1px solid #D1D1D3",
    left: "80%",
  },
  "& .swiper-button-prev::after": {
    display: "none",
  },
}
export const SliderMain = () => {
  return (
    <Container sx={{ maxWidth: "1360px !important" }}>
      <Box sx={styleSlider}>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
          loop
        >
          <SwiperSlide>
            <Box
              py="40px"
              width="100%"
              sx={{
                backgroundImage: `url(${bgImgSlider})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Container sx={{ maxWidth: "1360px" }}>
                <Typography
                  fontSize={48}
                  fontWeight={700}
                  variant="h2"
                  maxWidth={570}
                  color={dark[500]}
                >
                  Специальные предложения
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  maxWidth={278}
                  color={grey[900]}
                  m="20px 0 100px"
                >
                  на строительные материалы и товары для ремонта
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    py: 1.2,
                    bgcolor: yellow[500],
                    color: dark[500],
                    borderRadius: 0,
                    boxShadow: "none",
                  }}
                >
                  Подробнее
                </Button>
              </Container>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box
              py="40px"
              width="100%"
              sx={{
                backgroundImage: `url(${bgImgSlider})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <Container sx={{ maxWidth: "1360px" }}>
                <Typography
                  fontSize={48}
                  fontWeight={700}
                  variant="h2"
                  maxWidth={570}
                  color={dark[500]}
                >
                  Специальные предложения
                </Typography>
                <Typography
                  fontSize={20}
                  fontWeight={400}
                  maxWidth={278}
                  color={grey[900]}
                  m="20px 0 100px"
                >
                  на строительные материалы и товары для ремонта
                </Typography>
                <Button
                  variant="contained"
                  sx={{
                    py: 1.2,
                    bgcolor: yellow[500],
                    color: dark[500],
                    borderRadius: 0,
                    boxShadow: "none",
                  }}
                >
                  Подробнее
                </Button>
              </Container>
            </Box>
          </SwiperSlide>
        </Swiper>
      </Box>
    </Container>
  )
}
