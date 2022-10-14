import React from 'react'
import { Grid, Box, Typography } from '@mui/material';
import { dark } from 'theme/colors';

export const OrderProduct = ({ totalCount, totalPrice, providers, items }) => {
    return (
        <Box display='flex' sx={{ border: '1px solid #E8E9EA', mb: 2 }}>
            <Grid
                item
                xs={2}
                display='flex'
                alignItems='center'
                p={2}
                justifyContent='center' >
                {Object.keys(items).length === 1 ?
                    <Box
                        sx={{ objectFit: 'cover' }}
                        maxHeight={120}
                        component='img'
                        maxWidth='100%'
                        src={items["1"].img} />
                    :
                    "Подробнее"
                }
                {/* Object.keys(items).map((key) => {
                        return <Box
                            key={items[key].id}
                            sx={{ objectFit: 'cover' }}
                            maxHeight={120}
                            component='img'
                            maxWidth='50%'
                            src={items[key].img} />
                    }) */}
            </Grid>
            <Grid item xs={6}
                borderLeft='1px solid #E8E9EA'
                borderRight='1px solid #E8E9EA'
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 2,
                }}
            >
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: dark[600]
                    }}>
                    {Object.keys(items).map((key, idx, arr) => {
                        const addComa = arr.length - 1 !== idx ? "," : ""
                        return items[key].name + addComa
                    }).join('').slice(0, 50) + "..."}
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: 20,
                        color: dark[500]
                    }}>
                    {totalPrice} ₽
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: dark[600]
                    }}>
                    {totalCount} шт.
                </Typography>
            </Grid>
            <Grid item xs={2} p={2} >
                <Typography
                    sx={{
                        color: dark[600],
                        fontWeight: 700,
                        fontSize: '18px',
                    }}>
                    Заказ от 24 мая
                </Typography>
                <Typography sx={{
                    color: dark[600],
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
                    34078988-0047
                </Typography>
            </Grid>
            <Grid item xs={2} p={2} >
                <Typography sx={{
                    color: dark[600],
                    fontWeight: 700,
                    fontSize: '16px',
                }}>
                    Статус
                </Typography>
                <Typography sx={{
                    color: dark[600],
                    fontWeight: 400,
                    fontSize: '16px',
                }}>
                    Оплачен
                </Typography>
            </Grid>
        </Box >
    )
}
