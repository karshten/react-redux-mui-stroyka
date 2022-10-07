import React from 'react'
import { Grid, Box, Typography, List, ListItem } from '@mui/material';
import { dark } from 'theme/colors';

export const OrderProduct = () => {
    return (
        <Box display='flex' sx={{ border: '1px solid #E8E9EA', mb: 2 }}>
            <Grid item xs={2} display='flex' alignItems='center' p={2} justifyContent='center' >
                <Box
                    sx={{ objectFit: 'cover' }}
                    maxHeight={120}
                    component='img'
                    maxWidth='100%'
                    src="https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg" />
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
                    Плита OSB-3 Kronospan 2500 х 1250 х 9 мм, хвойные породы
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 700,
                        fontSize: 20,
                        color: dark[500]
                    }}>
                    995 ₽
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 500,
                        fontSize: 16,
                        color: dark[600]
                    }}>
                    2 шт.
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
