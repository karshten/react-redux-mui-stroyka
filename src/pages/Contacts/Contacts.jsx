import { Box, Container, Typography } from '@mui/material'
import React from 'react'
import { About } from '../../components/AbountSomething/About'
import { Hero } from '../../components/Hero/Hero'
import { dark } from '../../theme/colors'

const infoItems = [
  "ОГРН: 1047796688554",
  "ИНН 7703528301",
  "КПП 774850001",
  "ОКТМО 45380000",
  "ОГРН 1047796688554",
  "Расчетный рублевый счет: 40702810900001403352",
  "Банк: АО «Сбербанк» г. Москва",
  "Корреспондентский счет: 30101810200000000700",
  "БИК: 044525700"
]
export const Contacts = () => {
  return (
    <>
      <Container sx={{ MaxWidth: "1160px !important" }}>
        <Hero props={{
          title: "Конаткты",
          path: [
            {
              point: "/",
              name: "Главная",
            },
            {
              point: "/contacts",
              name: "Конаткты",
            },
          ],
        }}
          sx={{
            minHeight: 'none',
            mb: 5
          }}
        />
        <iframe width="1160" height="340" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1160&amp;height=340&amp;hl=en&amp;q=%20Bishkek+()&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>
        <Box sx={{
          m: "80px 0",
        }}>
          <Typography
            sx={{
              fontSize: '34px',
              fontWeight: 600,
              color: dark[500],
              mb: '20px'
            }}>ООО «СтройкаСтор»
          </Typography>
          <Box sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Typography sx={{
              fontSize: '18px',
              fontWeight: 400,
              color: dark[500],
              maxWidth: '374px'
            }}>
              115114, г. Москва, Дербеневская набережная, д. 7, стр. 8

              <span style={{ marginTop: "35px", display: 'inline-block' }}>
                <span style={{ display: 'block' }}>Павелецкая</span>
                Автобусы 13, 106, 158, 184, 632
                <span style={{ display: 'block' }}>Остановка «Дербеневская наб., д. 7»</span>
              </span>
            </Typography>
            <Box sx={{
              fontSize: '18px',
              fontWeight: 400,
              color: dark[500],
              maxWidth: '474px'
            }}>
              {infoItems.map(info => (
                <Typography key={info} sx={{
                  width: '100%'
                }}>
                  {info}
                </Typography>
              ))}
            </Box>
            <Typography sx={{
              fontSize: '18px',
              fontWeight: 400,
              color: dark[500],
              maxWidth: '278px'
            }}>
              Поддержка клиентов
              info@stroykastore.ru
            </Typography>
          </Box>
        </Box>
      </Container >
      <About title="О компании" description={
        [
          "В СтройкаСтор вы всегда можете купить все необходимые товары для ремонта дома и дачи. Хотите сделать ремонт в квартире? Строите загородный дом? Используйте строительные и отделочные материалы из нашего каталога.",
          "Быстрая доставка строительных товаров по низким ценам сделает ваши покупки более приятными. Ремонт может стоить дешево, если делать его с нами. Для вас всегда в наличии более 30 000 товаров для строительства по низким ценам каждый день. СтройкаСтор — это широкий ассортимент товаров для дома и ремонта недорого; Возможность заказать строительные и отделочные материалы для дома и дачи."
        ]
      } />
    </>
  )
}
