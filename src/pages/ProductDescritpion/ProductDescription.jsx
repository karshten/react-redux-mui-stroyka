import { Container, Box, Typography } from '@mui/material'
import React from 'react'
import { CheckMark } from '../../assets/icons'
import { CountButton, PrimaryButton } from '../../components/Button/Button'
import { Hero } from '../../components/Hero/Hero'
import { dark, grey, white } from '../../theme/colors'

import plus from "icons/plus.svg"
import minus from "icons/minus.svg"
import deliveryTrack from 'icons/deliveryTrack.svg'
import { useState } from 'react'

export const ProductDescription = () => {
  const product = {
    isAvailable: true,
    name: 'Шпатлевка масляно-клеевая 3кг Л-С',
    price: 212,
    discount: 10,
    priceWithDiscount: 190.8,
    description: `Штукатурка Волма Слой, 30кг
    Штукатурка на гипсовой основе для ручного нанесения.
    
    НАЗНАЧЕНИЕ:
    Выравнивание оснований в помещениях нормальной влажности перед нанесением декоративного слоя;
    Создание ровной поверхности на цементных, цементно-известковых, бетонных, кирпичных, гипсовых и гипсокартонных плоскостях.
    
    ПРЕИМУЩЕСТВА:
    Экономичная (расход продукта 8-9 кг на 1 кв.м, не требует покрытия шпаклевкой);
    Пластичная;
    Слой нанесения от 5 до 60мм;
    Можно использовать для создания декоративных поверхностей.
    
    ИНСТРУКЦИЯ ПО ПРИМЕНЕНИЮ:
    Подготовка основания:
    Поверхность нужно очистить и просушить. Вещества, ослабляющие сцепление с поверхностью, такие как жир,
    пыль и т.п. должны быть удалены.
    Температурный режим в помещении должен быть не ниже +5 градусов.
    Основания, хорошо впитывающие влагу, предварительно обработать составом «ВОЛМА-Универсал» или
    «ВОЛМА-Интерьер». Гладкие (например, бетон) обработать составом «Волма-Контакт», просушить.
    Приготовление смеси:
    Емкость, в которой будут производить замес, и рабочий инструмент должны быть чистыми и сухими.
    В воду комнатной температуры постепенно всыпать смесь из расчета на 1 кг смеси – 0,6-0,65 л воды.
    Замешивать строительным миксером или дрелью с насадкой. Смесь должна стать однородной.
    Дать отстояться в течение нескольких минут и снова замешать. Раствор можно наносить в течение 20 минут.
    Нанесение:
    Смесь наносить ручным способом, используя железный шпатель. Разровнять h-образным правилом.
    Если состав наносится в два слоя, то на первый до высыхания наносятся насечки, после полного высыхания наносится
    второй слой. После схватывания последнего слоя (примерно через 60 минут) правилом трапецией подрезать неровности.
    Если в работе использовались маячки, рекомендуется их удалить и заделать оставшиеся углубления.
    Для того чтобы загладить поверхность нужно через 10-20 минут после подрезки смочить водой, используя губчатую терку,
    и затереть круговыми движениями.
    Далее загладить металлическим шпателем.
    Для того чтобы поверхность стала глянцевой нужно в течение суток, но не ранее трех часов, повторно смочить поверхность
    водой и загладить шпателем.
    
    РЕКОМЕНДАЦИИ:
    После окончания штукатурных работ основание рекомендуется прогрунтовать;
    Поверхности, которые не будут штукатуриться (пол, окна, мебель и т.п.) необходимо закрывать;
    Использованные инструмент и емкости необходимо вымыть водой после завершения работ.
    
    МЕРЫ ПРЕДОСТОРОЖНОСТИ:
    При работе защищать кожу, глаза и дыхательные пути.`
  }

  const [productCount, setProductCount] = useState(1)
  const [productPrice, setProductPrice] = useState((product?.priceWithDiscount ? product.priceWithDiscount : product.price))

  return (
    <Container sx={{ maxWidth: '1160px' }}>
      <Hero
        props={{
          imgUrl: null,
          title: "",
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
            {
              point: "/catalog:type",
              name: "Стройматериалы",
            },
            {
              point: "/catalog:type/category:name",
              name: "Сухие смеси",
            },
            {
              point: "/catalog:type/category:name/product:id",
              name: "Шпаклевка маслено-клеевая 3кг Л-С",
            },
          ],
        }}
        sx={{ height: 'auto', minHeight: 'none', mb: '40px' }}
      ></Hero>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        border: '1px solid #E8E9EA'
      }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
          <Box component='img' src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVEhISEhYYGRIYERIZGhocFRkYGRgZGBoZGhgYHBocJC4lHB4rHxkcJzgmKy8xNTU1GiQ7QD00Py40NTEBDAwMEA8QHhISHzQrIys0MTQxMTQ9PzE0NDY0PzQ0MTQ0NDE0NDQ9PTQ3NDQxNDExNDQ0NDQ0NDE0NDQ0PTExNP/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAwUCBAYBB//EAEYQAAIBAgMDCAYHBQgBBQAAAAECAAMRBBIhMUFRBQYTImFxgZEyQqGxwdEUFVJigpLwByNTcqIWJDNEssLS4WM0Q3Pi8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMFBP/EACQRAQEAAgEEAgEFAAAAAAAAAAABAhEDEhMhMUFRoQQiMmFx/9oADAMBAAIRAxEAPwD7NERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERARKrlfHugApqGc3vvyjdp2669kpycQ/p1CBwBt7FsIHVO4G0gd5tNd8fSG2on5gfdOcHJwOrMxPhJFwCcCfxGBdNyxRHr+SsfhIW5dpD7R/D8zK8YVB6g8r++SCko2KPIQNk84ae5X8l+cx/tAm5G9khAnsCX694U28z8o+u2/hHzP/GRRAm+um/hHzP/ABnn1y38I+35SKIEv1y38I+35R9dN/CPmf8AjIogS/Xbfwj5n/jH18f4TeZ/4yKIEv1+N9NvP/qejnDT3q39PzkMQNleX6R3MPAfAyROW6J9YjvVvgJoFAdoHlMTh0PqL5CBbJypROyovjce+bFPEK3osp7mBnOtgk+z5EiRvych2Fh4398DrInJDDVF9Cow7Lke4zawfKdZXC1AGUkXbQZRxuPjA6OJ4DPYCIiAkdZsqs1r2BNuNhJJT8uYk0zR+w9TI2pFifR7xt0galSzsXuQ++3uIMBXH2W81PxkuUHaI6MbiR4/OBEHO9D4EH4x0g3hh3qflJch4+yLN2eZ+UCI1l+0POZBwdhHnMrtw9sxKjensBgez20w6Nfsf0T0Iv2T5EQM8hnuQ8JgEXt82+cyCrxP5m+cD3ozwjozwjq8T+c/Oe9X7R/MfnA86NuEdGeE96v2j+Y/OOrxP5z84HmQ8J5kMELxP52+cxKL2/mb5wMrTyY5F4H+oxkX7H9H/UAWHETE1l+0POe5R9gflEzF9w9ogR9KN1z3KT7p7nO5WPkPfaSWbs8/+oyHiPL/ALgRdc7lHefkJg1G/ptccPRHjvPnNno+JM86McPj74FhybWLKRbRbAHiP0JvSiwtVvpCIvolHZ+Nlyge0y9gIiICVvLlAvQfL6a2df5kOYe63jLKeQOdpYlTRpVWICuBxNmt1l8CCPCTI4Owg9xmnypyX0KDIx6HpLhCL5WbNchtttTp275DRSBaxNVAeJ85KL8YGcTwX7J6LwMhMhMBfhMhfhAzEzEjHdMxAzBnt5iDPbwPbwTPLwTA8JmBmRMwPdAxMxMyPdMSDwgeGeT0gzwgwMokZvxkbg8T52gTsbbdJFTrK7rTVgWa9t40BJ1HdNOqkhweGZ6oVGKHKxzAXIFrG3A62vAtub9TpDVq2GUVGpoeKqdW8Tbyl5NXA4NKNNadMWVR3k8STxm1AREQERECr5wj+7seDUz/AFAfGUmGM6DloXw9XsW/5SD8JzmGOggWNLUjvm0KPbNOkdR3iWSwI+hPZPeiPCTCZCBr5DwmQQ8D5TZEyEDWCz2016oL9KxZsqlgqio1MdUalmWx1N99gLabZoYXGKyhstQXJsPpNRr20vqeOngZz5OXHj/ldElt1Pa5AntpXcq4gUEVr1GdmVFUVW1J7bH3cOMiPKafRVxIaoc1lCZxfNexW9uwm/AXnSC2tPCJRty2op06jGoM1VkcZxdCu0+jroQbabZhX5XZaVKqyMBUayg4jLZdLOxC6D4S6Ta+tMSJzVXl9ejR1SoXYvdTiKigKnrhh6QOo2DVW4S7I/dpUpVKnR1MgsWZjapZVZSxJVgWB22tfS9iGlbJTsmPRngfKbFCnkRVzFrbztOt5kZBq9GeE86EzZMxMDXNHtkbUhNhjInMCsrGScgC9dzwpkebL8pDWM2ebY/eVjwWmPMt8oHRREQEREBERA1eUVvRqjjTf/SZyuFOgnYutwRxBHnOLwR0HdAs6ZlksrKZnLjlCsjMErOLMw1bPsPCoGA8JrHC5ek274TMTiqXOHEDaUYfeQ380ZR7JtpzqqD0qKEcRVZPZlb3zV4svo3HWCeVKyrYuyqCbC7AXPDWc6nOpfWov+Fkb/UVmpyvyytemqhHUhw3WCbLEeqzcRJOPLerDbo2QEs1OogzekpAdW0tewYENYAXvawGkwTk+wAHRWAsAFYf7jOJUSRRN5fpccver/sJbLuO0r4AvUp1GVC1O+TrOApNtco0J0HlNUcgrYL0a5BUL5elfLmIA2Zdlha05lTMgx4nzl7F+026QcgIDcU1A6RXt0r5Qy7LLltbsntPkNVCLkXKlTOgNWowVtDpps02bJzWY8T5zEmOxfs26vE8kLUdqlRaTOVC9YO4AH2QWAB7RY6njM8LhFphFLrkS+RASFBN9SWZmYi5trYX2aAjjjI2EvYv2bfQPpSEhQ6ZjsGZbnwvMzOC5PxAp1UqMCQpJIW1zoRpcgb+MvG51pupVfE0wPY5mMuKy6nldr8zEzmavOpvVoL3msR7Ah981avOWufRFNfwOx884HsknFlfg3HWtIKx0J7Jxtbleu171WA4KETyZVDe2RYGmz1qbvnfK4OZyz2tr6TXts4y9qybpt0Vczf5sL1arffA8lv/ALpXYgy25tLak541WPkFHwnJVzERAREQEREBOJoizMODsPIkTtpxlVbVqo/8tT2sT8YG5Tmu1RSzB1U2YjUA7O8Hs/QtJ6cqsTVAquuubNexBF9L9XbfafR1F/RJ1lgshyfh32oAexivsGX3Wnjc36J9F3XxUj2iV9PEW2E7ezj93S17doOm0ibKY47Ab/Pd3f8A5NTPKfKeGbc2R6tW3el/cRNLlHkc0Uz5wwzBbBSDrrx7PbLFOUT2fr9Xmtyrii9Mg/aU/rz9s3jyZXKS01Fd9EYZtV6pog6n/wB1cyW04bfjJlwLXALorNUqIoZwpZkYIwUHb1iB4ierjKZDAiqGYYa5C0yt6ShdLuCQbbwJ79MU1KL2YBcRiHN7XyvVR1GhNzZTOnVn6EaUGKM4F1XLmP8AMbDvmT4cquYsmW5GlRDci11ABuTqNNusmwuMQKiMrZSKmc5rAdIMvo5SXKqo2EbdLyE1FZKaFrENULHK1gGyWOg19E6DXSJllRI+AcHLZc2dUsHUkM1yoIB0uAdsjGHJYIHplrMdKqnKFF2LEHqgDjNxMenSM5uFOKVx1WvkUOM1gNNo0267NsiTEKHDGoCMlVdMPlVS65RdcgzC+430vxk6sxrNhWAzAqy5HfMrKylUIDWK3uQSBaYLhGNTorqGt1rnReqWIY20IGp4Xm4eUspuhJZaFRA+RUBZ3VlIT0QFAYk21NtDaQVMVTDVSlMnpEAKnRFLnNV1VgxBI02Xzndtszz+hBhcIXq9FcK13Um17FL3Fu8WlsvNnjVHgn/2mjh8UGxLVQLXBJH3ioDW1OhbMeOstG5QP6/X6tMZ8mcvhJI8HNykPSdz3ZR8DMjyTh09Qn+Zz8wP13yBuUG479PD46ia74q+/wB9t3Dds1HdttOdzyvyuo226NPQRQexVv2a5QffIKVbM4HYT4W0O+w9+mulppPXAFzcC5GtiSd4AW9zt0W53EqQDJcAzGpquUZWPWPWJ0BIQaDbtJLG9iZm1W3iDL7m8tsOna1Q/wBbTn8SdDOm5HW2HpdqA/m1+Mg3oiICIiAiIgJyGPFsTVH31Pmqn4zr5yfLC2xT9qofZb4QMqUqeVKb9I5Uh1OUtTew3DrI246X8CdNstaRlNyun7463DIpyE9UW0LvwXQabyAO4NYPfZc3tbUsWvoNW231AJ266ZQ180ckjXaQL9pFx4HdfZYjdIlN+tqRa4voWB6uY8C5sgG5b22SQCx23I18Q2p8SlQ9xlRHWxRVUN7ElL9i/a8xbzk7uSrjbltfTZ39tvYfLZ5NwQY5szBlyjQ7iHsDc2tfZYXue617haWQBB6IAsfWLa5i1tLk637TppriTKZ9W/H0mrtymFps9To6alm6Mvpa1gVW1ydvW98mZWTRlINztFr7Nlx36jj3W5bnFjmpcpYlcPUdaYIbKrEBSKasyLY9UZrjS1r2k+D5bxGJoNTq4pEZKilc6orN1WAGa4AW510J7d073my368fldTTpkcNpkF/5rbu7ZMrXBOUWDam52AEsBfwnMItS9vpV13MEpspBqBE9e+Ygq5GxQw1MmdKo2YpW6tQ2FNM5KMq5VXYWJbQEgk2G85ddzH42mnR1FsD1ACL+sdwudo10B/Vp5UFtci200z6jXu3/ADnMBq1nJxK2WpVU5UpsxVFzF7XHVOy173K7jcS1MPUDEHF+tRFxRW37wkEg31CgXJ7baGTuT+zS7eoLEBAO25J9o2/rSQNKKqrDNmxwsErEWKAkowVFsGuC+ptuy+XNvylVJF6tS1xcCow03jQzU5sZ6lNPomGD3YorNlBuRu9o1/WkkFa4B3G3hw04aW3bLTW5F5YzrUGHIWmQoJa975RmsLcbzzkem1XPTzqApqDObXIuDbZbb7jxnPLqy/dSWek+c79t7a7LgXJPdMC/bpa+umltb8LA68AeAYH29wS3aTbYQSpYjsKq3nMXFr3NiLkngVYhmHYr3J+7UMwrJA7E5SqW0ZySXH3FU3y7L6XFtRps3OSkQPUCa1AnWZjmexI0J9XZsudm6VrjQ6lCOoSPUO5T9w+qfVuBppbc5u4Qp0pbRjlFttgC2t+JIPlCt/FnQzr8CLUqY4U0HkonG43Ye6dwosAOAkGUREBERAREQE5fnAtsQp40l9jP851E5znKv7yieKuPIr84GtRMq+Wx+8GYWpimGcja9mbKg46nZ29ss6Jldy7UyvRJFwCzW4lbZb8bFrzWONt1Bo9YE/xBlJG7pH6tNO0KD8Z6wAV7ahVq2/lpUzT1/E5Mjw1dRkvckNUdj9pyLLpwAJ28BMlN0VFsXOHqKdCeu5Ba4Gp9G5tGWNnuI2C+SoMrEEqc3VJ2WuCp/DoRvv2zYxXKDkfu3YabMvpGx1DD0Rs079TpNGq7PXqO2gKrbrXHWtcjeNUOh4CSX94A7ybAeZni9XJx53GZW+Uy5t2ySNH6kw7qz9GoLuF1Ljrkl3QkHW5S+a9+t3SNebuG1PRsANHUO5dDxtm6693tlzWZgidL1lUZKmwWVSyo6gbBcE8et92eZGzBb/vlF0fdUTgbbxv7dRPYjSpo816JN2sKdrhldiWH3RfU9nbumFTm9QDMMrixIsX1HYbb5dUHOr0xZg13pnZca5l4N7D52iSoA2YZiLaXNj+LTXt8Z148ZbdxKp/qCjwb88n/ALMUDTuobPa9mYgML2upB46SwdwQAFA0XXebX18b+weM1IsVyglUFyzm1xcC6pw0Aue+b5cZJ4iRTjm1h7FSl3HpHO4RB945tWtuHsmLch4ZQXFG65TkBZyXsLlzduqgGv6EtrqUzEZaCnqqPSqMTpt23PHbtO4TJ0YtkJtUdb1CDpTpj1AePbxud04NNF+QKVPowCtmQs+QlMqrqxOQi9xpr9oa8Z6eHW1NSoHWpiw2KXOd08EVBM0RTlCqB0ziwta1JNf6v944TIPdkbjWrP4Ippr8Jd30mkaKCEv6OShf8aPT/wB0iucobawXPbbmKfu6yW36BTbjCPZRrso4O3ejZiO8Q2IUM1tbVs623qy2ceZa3baJjb6gwcWuV62VB29JRbZ3ldnlxlnyMtkexul1yHfltop4kbL8LSmFfLly+oz5exWvdDxGzyEtuQv8Jv8A5G8NFPvJlywsm6bbLi7014vTHmwE7ecXhlvXoj/yIfI3+E7SYUiIgIiICIiAlBzoX/BP3nHmAfhL+U/OKgWpKyi+Rwx/lsQfeD4QKigZo8v8o4WiKX0zMFZmVGCucpABN8mzdtBGk3KBlPz05uPjqNNKbojpULjODla6lcpK3K7RrY7JZbPMEmEwuExGuFxaN2ZkY91rqR5TbTkCujq6ZHsbgXIv2EEAe2fJcfzGx1PU4cuo1zU2Wp5KOv8A0zQTlPF4Y26XEUT9lmqIPyNp7JucuXqpp9dx9PEZ7nDOBlCdQZ7EM1j1bgg5r7RaV1TEMoUVUdCDqzplGYDYNN2nsM4vB/tC5QT/ADGf+dEb2gAy6wv7U8YB10oP+F19zmcO1h19evO9s9E3t09aqQzC/qqjduUWYdozZvOSoLhFLqAuVl1HVOy1wbi1rWlbX56YpsufBuCpIHR1WsbkaFcrX1GzvmC87WsufDYjYuuVGvbW/WTW4U349bw+jrx1rTWltcllqZlz2bW9jYHYQNvZDISblkuXtt3k23C1u0aWlYnO6lc5qFS/o2+j0NGIa24G9yDb7naZ63O2gbgU3HVH+WoEjqjX0t+3xlnJJ6hpYiieK7QNWG+KlyoRmXKLnabaHfbbxt3dk0E524cXvTc3DZf7tQFiQbH0tbEg+HbIzzrpWstKoW6xv9Hw+y4tYa7NR+LsEt5ZfaaWlRjdSXS6Xy2KkC9tg3nXhuNuB1nq6uA1w2jbOtbTXsmn/a8WATD1iwYG4SmpI6oAsqHS4PH0vCY0uduJzqaeFxDHMLK1UhSdLXApjTZv39sk5MZ8LpvBHY3AdjawsGJtw03SWlybWY/4T27VK93pWlFyl+0zGIchoUqbWBAbO+h2H0hKDFftI5QcW6RE/kpKP9WaO99RNPoycgVmsMipprmcG5ta/UvbjbtntXktKIzV8SlMAa6qu4Am7nbpwnx3Ec5sbXOV8TXcn1VcqT+FLTLCc1cdXOZcPVJOmeoOj8c1Qi47rzN5cqun0XGc5+SqHoM+IcDQKCyn8Ryp75c8hcrDFYZMQqdGjM4VLg2CuybgBtUzhsB+zGs1jiKyIPsoDUa3ecoU/mnecl8mJhsPTw9MsUTNYsQWJZmdiSABtY7pi5W+1bnJYviqXe58kb4zsJy/INAtXL26qK2v3m0A8rzqJAiIgIiICIiAiIgVeJ5JUnMnVPDd/wBTUbCsu1TbiNRL+IHPrMyLix1HA6jylxUoqdoB8NfOQnBJuuPH5wObxHNrBuSamFoFjtPQoG/MoBldU/Z/yexuKLKfu1qoHkXI9k7I4Hg3smJwjdnnA4o/s+w4JNOtikJABy1l1AvYG6XI1O/eeMzTmRltlxlfTZnCPbQjYRwY+c7L6O3D2iOibgYHE1eZVRv88+2+tBTrcHTrC2oB02kCBzMxAJIx2pWx/uy6jrbRnt6za9pnbdG3A+RjKeB8jA4xuaOJJJOOBJXL/wClTZrp6eg1PgZi/MuszKz45iyklT9HAsTbZ1+waTtcp4HyMdGeB8jA4wcxzaxxla2noqqDQACwubaADuFtkxHMCkTd8Tim0/iqPD0LztOjbgfKe/R24e0QONH7PsB66O54tXqD/Syzeo80sClsuFom320FQ+b3M6T6K3Z5z0YI72HleBXUaKIMtNFReCqFHks9aWa4Fd5J9kmTDINijx198CjWkzeipPu89k2aPJF9XNhwG3xMuYgR0qSqoVQAo3CSREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQP/9k="
            sx={{
              width: '60%',
            }}
          ></Box>
        </Box>
        <Box sx={{
          borderLeft: "1px solid #E8E9EA",
          p: 3,
          width: '50%'
        }}>
          <Typography
            sx={{
              fontSize: '34px',
              fontWeight: 600,
              colro: dark[500],
              maxWidth: '100%'
            }}>{product.name}</Typography>
          <Box sx={{ m: '12px 0', display: 'flex', alignItems: 'center' }}>
            <CheckMark isAvailable={product.isAvailable} />
            <Typography sx={{
              color: product.isAvailable ? '#3BAA35' : grey[600],
              fontSize: '15px',
              ml: '6px'
            }}>В наличии</Typography>
          </Box>

          <Box display="flex" alignItems="center">
            <Typography sx={{
              color: dark[600],
              fontSize: '24px',
              fontWeight: 600
            }}>
              {Math.ceil(productPrice) * productCount}
              ₽
            </Typography>
            {(product?.discount && product?.discount !== 0) && <>
              <Typography
                ml={1}
                fontSize={18}
                fontWeight={500}
                color={grey[600]}
                sx={{ textDecoration: "line-through", m: "0 16px" }}
              >
                {product.price * productCount} ₽
              </Typography>
              <Typography
                border="2px solid #FBE303"
                py={0.5}
                px={1}
                bgcolor={white}
                fontSize={15}
                fontWeight={500}
                lineHeight={1}
              >
                -{product?.discount}%
              </Typography>
            </>}
          </Box>
          <Box sx={{ m: '24px 0 35px' }}>
            <PrimaryButton sx={{ width: '230px' }}>В корзину</PrimaryButton>
            <CountButton onClick={() => productCount > 1 ? setProductCount(oldCount => oldCount - 1) : null}><Box component='img' src={minus} /></CountButton>
            <CountButton sx={{ p: ' 8px 16px' }}>
              <Typography sx={{
                color: dark[500],
                fontSize: '18px',
                fontWeight: 500
              }}>
                {productCount}
              </Typography>
            </CountButton>
            <CountButton onClick={() => setProductCount(oldCount => oldCount + 1)}><Box component='img' src={plus} /></CountButton>
          </Box>
          <Typography
            sx={{
              color: grey[900],
              mb: '12px'
            }}
          >
            Поставщик: Аксон
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
            <Box component="img" src={deliveryTrack} sx={{ mr: '12px' }}></Box>
            <Typography sx={{
              color: grey[900],
            }}>Доставка осуществляется курьерами поставщика или службой курьеров Достависта. Также товар можно забрать самостоятельно от поставщика</Typography></Box>
        </Box>
      </Box>
      <Box sx={{ width: '100%', border: "1px solid #E8E9EA", p: '60px 0', mt: '40px' }}>
        <Container sx={{ maxWidth: '768px !important', p: "0 !important" }}>
          <Typography sx={{
            fontSize: '34px',
            fontWeight: 600,
            color: dark[500],
            mb: "20px"
          }}>Описание</Typography>
          <Typography sx={{ color: dark[600] }}>
            {product.description}
          </Typography>

        </Container>
        <Container sx={{
          maxWidth: "1160px"
        }}>
          <Box sx={{
            mt: 10
          }}>
            <Typography sx={{
              fontWeight: 600,
              fontSize: "34px",
              color: dark[500],
              mb: "20px"
            }}>
              Похожие товары
            </Typography>
          </Box>
        </Container>
      </Box>
    </Container>
  )
}
