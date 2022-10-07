import React from 'react'
import catalogInro from "img/catalog-inro.png"
import { Hero } from './../../components/Hero/Hero';
import { Container } from '@mui/system';
import { CatalogItem } from './CatalogItem';
import { Grid } from '@mui/material';


const catalogItems = [
  { id: 0, title: 'Сантехника', img: 'https://i.siteapi.org/itWUTuNfgJJTTXNPDCbHg4T37D0=/fit-in/1400x1000/center/top/s.siteapi.org/f7baaf46e7aa604.ru/img/59yrqhonmokckcowswkoc80w48k8so', items: ['Ванны', 'Комплектующие для ванн', 'Душевые', 'Унитазы и биде', 'Смесители', 'Душевое оборудование', 'Раковины', 'Пьедесталы для раковин',] },
  { id: 1, title: 'Стройматериалы', img: 'https://i.pinimg.com/originals/11/e7/50/11e750c5167f89bc2286722dad817cb0.jpg', items: ['Сухие смеси', 'Пиломатериалы', 'Гипсокартон', 'Профиль для гипсокартона', 'Изоляционные материалы', 'Армирующие материалы', 'Кровля', 'Ленты строительные',] },
  { id: 2, title: 'Напольные покрытия', img: 'https://04.img.avito.st/image/1/1.1fbjw7a6eR_VarsaxaTn6AlgfxtX4HHdUmB9F1doew.3m5c-V3mmINX4fjJ0ti7hoMBx55E0rQ-CCcruuH6CL8', items: ['Линолеум', 'Ламинат', 'Ковролин', 'Плинтус напольный', 'Пороги', 'Подложки', 'Ковровые дорожки', 'Плитка ПВХ, виниловый ламинат',] },
  { id: 3, title: 'Отделка стени потолка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVTzRBfmLDTJC9SPJWoh_E3b79oYKz5ftpxXk8z49ks5YSub7Ew_SU_ES-0M9BsvKwEc&usqp=CAU', items: ['Обои', 'Стеновые панели', 'Плинтус потолочный', 'Углы к потолочному плинтусу', 'Потолочная плитка', 'Профили алюминиевые', 'Декоративные молдинги, багеты', 'Пленки самоклеящиеся',] },
  { id: 4, title: 'Отделка стени потолка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVTzRBfmLDTJC9SPJWoh_E3b79oYKz5ftpxXk8z49ks5YSub7Ew_SU_ES-0M9BsvKwEc&usqp=CAU', items: ['Обои', 'Стеновые панели', 'Плинтус потолочный', 'Углы к потолочному плинтусу', 'Потолочная плитка', 'Профили алюминиевые', 'Декоративные молдинги, багеты', 'Пленки самоклеящиеся',] },
  { id: 5, title: 'Отделка стени потолка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVTzRBfmLDTJC9SPJWoh_E3b79oYKz5ftpxXk8z49ks5YSub7Ew_SU_ES-0M9BsvKwEc&usqp=CAU', items: ['Обои', 'Стеновые панели', 'Плинтус потолочный', 'Углы к потолочному плинтусу', 'Потолочная плитка', 'Профили алюминиевые', 'Декоративные молдинги, багеты', 'Пленки самоклеящиеся',] },
  { id: 6, title: 'Отделка стени потолка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVTzRBfmLDTJC9SPJWoh_E3b79oYKz5ftpxXk8z49ks5YSub7Ew_SU_ES-0M9BsvKwEc&usqp=CAU', items: ['Обои', 'Стеновые панели', 'Плинтус потолочный', 'Углы к потолочному плинтусу', 'Потолочная плитка', 'Профили алюминиевые', 'Декоративные молдинги, багеты', 'Пленки самоклеящиеся',] },
  { id: 7, title: 'Отделка стени потолка', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVTzRBfmLDTJC9SPJWoh_E3b79oYKz5ftpxXk8z49ks5YSub7Ew_SU_ES-0M9BsvKwEc&usqp=CAU', items: ['Обои', 'Стеновые панели', 'Плинтус потолочный', 'Углы к потолочному плинтусу', 'Потолочная плитка', 'Профили алюминиевые', 'Декоративные молдинги, багеты', 'Пленки самоклеящиеся',] },
]

export const Сatalog = () => {
  return (
    <>
      <Hero
        props={{
          imgUrl: catalogInro,
          title: "Каталог",
          caption: "",
          path: [
            {
              point: "/",
              name: "Главная",
            },
            {
              point: "/catalog",
              name: "Каталог",
            },
          ],
        }}
        sx={{ my: '40px' }}
      />
      <Container sx={{ maxWidth: '1160px' }}>
        <Grid container display='flex' spacing={10} mb={10}>
          {catalogItems.map(item => (
            <CatalogItem key={item.id} catalogItems={item} />
          ))}
        </Grid>
      </Container>
    </>
  )
}
